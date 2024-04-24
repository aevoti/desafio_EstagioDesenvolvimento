document.addEventListener("DOMContentLoaded", async function () {
    const idPoke = new URL(window.location.href).searchParams.get("idPoke");
    const pokePesquisado = await buscaInfo(parseInt(idPoke));

    const pokeImg = document.getElementById("imgPokemon");
    pokeImg.setAttribute("src", pokePesquisado.img);

    const pokeNome = document.getElementById("nomePoke");
    pokeNome.innerHTML = toNormalizedName(pokePesquisado.nome);

    const pokeAltura = document.getElementById("alturaPoke");
    pokeAltura.innerHTML = `${pokePesquisado.altura / 10} M`;

    const pokePeso = document.getElementById("pesoPoke");
    pokePeso.innerHTML = `${pokePesquisado.peso / 10} Kg`;

    const pokeAtaque = document.getElementById("ataque");
    pokeAtaque.innerHTML = `Ataque: ${pokePesquisado.status.attack}`;
    
    const pokeDefesa = document.getElementById("defesa");
    pokeDefesa.innerHTML = `Defesa: ${pokePesquisado.status.defense}`;
    
    const pokeVida = document.getElementById("vida");
    pokeVida.innerHTML = `Vida: ${pokePesquisado.status.hp}`;

    const pokeAtaqueEspecial = document.getElementById("ataqueEspecial");
    pokeAtaqueEspecial.innerHTML =`Ataque Especial: ${pokePesquisado.status["special-attack"]}`;

    const pokeDefesaEspecial = document.getElementById("defesaEspecial");
    pokeDefesaEspecial.innerHTML =`Defesa Especial: ${pokePesquisado.status["special-defense"]}`;

    const pokeVelocidade = document.getElementById("velocidade");
    pokeVelocidade.innerHTML =`Velocidade: ${pokePesquisado.status.speed}`;

    const pokeBaseStats = document.getElementById("base_stats");
    pokeBaseStats.innerHTML =`Status total: ${pokePesquisado.base_stats}`;

    const pokeTipos = document.getElementById("tiposPoke");
    pokePesquisado.tipos.forEach((tipo) => {
        let h1Tipo = document.createElement("h1");
        h1Tipo.innerText = toNormalizedName(tipo);
        h1Tipo.style.backgroundColor = colors[tipo];
        h1Tipo.setAttribute("class", "tipos");
        pokeTipos.appendChild(h1Tipo);
    });

    const pokeHabilidade = document.getElementById("habilidadesPoke");
    pokePesquisado.habilidades.forEach((Habilidade) => {
        let h1Habilidade = document.createElement("h1");
        h1Habilidade.innerText = toNormalizedName(Habilidade);
        pokeHabilidade.appendChild(h1Habilidade);
    });

    let btnAntPoke = document.getElementById("pokeAnterior");
    let imgAntPoke = document.getElementById("imgPokeAnt");
    await buscaInfo(parseInt(idPoke) - 1)
        .then((pokeAnterior) => {
            btnAntPoke.href = "?idPoke=" + (parseInt(idPoke) - 1);
            imgAntPoke.setAttribute("src", pokeAnterior.img);
        })
        .catch(() => {
            btnAntPoke.style.display = "none";
        });

    let btnProxPoke = document.getElementById("pokeProximo");
    let imgProxPoke = document.getElementById("imgPokeProx");
    await buscaInfo(parseInt(idPoke) + 1)
        .then((pokeProximo) => {
            btnProxPoke.href = "?idPoke=" + (parseInt(idPoke) + 1);
            imgProxPoke.setAttribute("src", pokeProximo.img);
        })
        .catch(() => {
            btnProxPoke.style.display = "none";
        });

        if (pokePesquisado.tipos.length == 2) {
            document.getElementById("infosPokemon").style.background = `linear-gradient(to bottom right, ${colors[pokePesquisado.tipos[0]]}, ${colors[pokePesquisado.tipos[1]]})`;
        } else {
            document.getElementById("infosPokemon").style.backgroundColor = colors[pokePesquisado.tipos[0]];
        }
});