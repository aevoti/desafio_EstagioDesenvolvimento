const tabela = document.getElementById("pokeTabela");
let pokemonsAdicionados = new Set();
document.addEventListener("DOMContentLoaded", async function () {
    await carregaTabela(1, 25);
    const pokeListaNomes = await carregaNomes();
    let input = document.getElementById("pokeBusca");

    input.addEventListener("input", async function () {
        let value = input.value.trim().toLowerCase();
        if (value != "" && value != null && isNaN(value)) {
            let pokePromises = pokeListaNomes.map(async (lst) => {
                if (lst.toLowerCase().includes(value)) {
                    let aux = await buscaInfo(lst);
                    return aux;
                }
            });
            let pokeResults = await Promise.all(pokePromises);
            pokeResults = pokeResults.filter(function (element) {
                return element != undefined;
            });
            pokeResults.forEach((pokePesquisado) => {
                if (!document.getElementById(pokePesquisado.id)) {
                    geraCard(pokePesquisado);
                }
            });
            Array.from(document.getElementsByClassName("pokeCard")).forEach(
                (element) => {
                    let id = parseInt(element.getAttribute("id"));
                    if (!pokeResults.some((poke) => poke.id === id)) {
                        element.style.display = "none";
                    } else {
                        element.style.display = "flex";
                    }
                }
            );
        } else if (value == "" || value == null) {
            let pokeCards = document.getElementsByClassName("pokeCard");
            Array.from(pokeCards).forEach((element) => {
                element.style.display = "flex";
            });
        } else if (!isNaN(Number(value))) {
            let id = parseInt(value);
            try {
                let pokeResult = await buscaInfo(id);
                if (!document.getElementById(pokeResult.id)) {
                    geraCard(pokeResult);
                }
                let pokeCard = document.getElementById(id.toString());
                if (pokeCard) {
                    pokeCard.style.display = "flex";
                }
                let pokeCards = document.getElementsByClassName("pokeCard");
                Array.from(pokeCards).forEach((element) => {
                    let cardId = parseInt(element.getAttribute("id"));
                    if (cardId !== id) {
                        element.style.display = "none";
                    }
                });
            } catch (error) {
                console.error("Erro ao buscar informações do Pokémon:", error);
            }
        }
    });
});

async function carregaTabela(inicio, final) {
    for (let index = inicio; index <= final; index++) {
        let pokeObj = await buscaInfo(index);
        await geraCard(pokeObj);
    }
    let ultimoPoke = tabela.lastChild;
    let vigiaPoke = new IntersectionObserver(([fimTabela], obervador) => {
        if (fimTabela.isIntersecting) {
            obervador.unobserve(fimTabela.target);
            carregaTabela(final, final * 2);
        }
    });
    vigiaPoke.observe(ultimoPoke);
}

async function geraCard(pokemon) {
    if (pokemonsAdicionados.has(pokemon.id)) {
        return;
    }
    let pokeCard = document.createElement("a");
    let pokeId = document.createElement("h4");
    let pokeImg = document.createElement("img");
    let pokeNome = document.createElement("h3");

    pokeCard.appendChild(pokeId);
    pokeCard.appendChild(pokeImg);
    pokeCard.appendChild(pokeNome);

    pokeCard.setAttribute("class", "pokeCard");
    pokeCard.setAttribute("id", pokemon.id);
    pokeCard.href = `especificao_pokemon.html?idPoke=${pokemon.id}`;
    if (pokemon.tipos.length == 2) {
        pokeCard.style.background = `linear-gradient(to bottom right, ${
            colors[pokemon.tipos[0]]
        }, ${colors[pokemon.tipos[1]]})`;
    } else {
        pokeCard.style.backgroundColor = colors[pokemon.tipos[0]];
    }

    pokeImg.setAttribute("src", pokemon.img);
    pokeImg.setAttribute("class", "pokeImg");
    pokeImg.alt = pokemon.nome;

    pokeNome.setAttribute("class", "pokeNome");
    pokeNome.innerHTML = toNormalizedName(pokemon.nome);

    pokeId.setAttribute("class", "pokeId");
    pokeId.innerHTML = `#${pokemon.id}`;

    let pokeAnterior = document.getElementById(pokemon.id - 1);
    if (pokeAnterior != null) {
        pokeAnterior.parentElement.insertBefore(
            pokeCard,
            pokeAnterior.nextSibling
        );
    } else {
        tabela.appendChild(pokeCard);
    }
    pokemonsAdicionados.add(pokemon.id);
}
