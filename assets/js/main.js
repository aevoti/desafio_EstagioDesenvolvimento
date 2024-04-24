const initializeApp = () => {
    // variaveis 
    const pokemonList = document.getElementById("PokemonList");
    const loadMoreButton = document.getElementById("loadmore");
    const modalDetail = document.getElementById("pokemonModal");
    const pokemonDetails = document.getElementById("pokemonDetails");
    const pokemonSubmit = document.querySelector('.search-button');
    const NotfoundPoke = document.querySelector('.notfoundPoke');
    const backPoke = document.querySelector('.back-button');
    const pokemonNameInput = document.getElementById("pokemonName");
    const comparePoke = document.querySelector('.comparePoke');
    const battleModal = document.getElementById("battleModal");
    const closeButton = battleModal.querySelector(".close");

    //Elementos da batalha
    const onePokemon = document.getElementById("onePokemon");
    const twoPokemon = document.getElementById("twoPokemon");
    const cardleftPoke = battleModal.querySelector(".cardleftPoke");
    const cardRightPoke = battleModal.querySelector(".cardRightPoke");
    const comparePokebutton = document.getElementById("comparePokeBattle");
    const clearBattlePoke = document.getElementById("clearBattle");

    let pokemonLeft;
    let pokemonRight;

    const limit = 20;
    let offset = 0;

    // função resposável por manipulador eventos
    const addEventHandlers = (pokemon) => {
        // Adicionar evento de clique para fechar o modal
        const closeBtn = document.querySelector("#pokemonModal .close");
        closeBtn.onclick = () => {
            modalDetail.style.display = "none";
        };

        // Adicionar o efeito de hover na imagem do Pokémon
        addFrontAndBackImageHoverEffect(pokemon);
    };

    // função para abrir modal com detalhes do pokemon
    const openPokemonModal = async (pokemonId) => {
        try {
            // Obter os detalhes do Pokémon pelo ID
            const pokemon = await pokeApi.getPokemonDetailById(pokemonId);

            // Exibir os detalhes do Pokémon no modal
            modalDetail.style.display = "block";
            pokemonDetails.innerHTML = renderPokemonModal(pokemon);

            // Adiciona as classes de tipo diretamente ao card
            const card = document.querySelector(".card");
            pokemon.types.forEach((type) => {
                card.classList.add(type);
            });

            // Define a cor do gradiente com base nos tipos do Pokémon
            const gradientColor = `radial-gradient(circle at 50% 0%, ${getGradientColors(
                pokemon.types
            )} 36%, #ffffff 36%)`;
            card.style.background = gradientColor;

            // Adicionar tratamento de eventos
            addEventHandlers(pokemon);
        } catch (error) {
            console.error("Erro ao abrir modal do Pokémon:", error);
        }
    };

    // Função para manipular imagem do pokemon
    const addFrontAndBackImageHoverEffect = (pokemon) => {
        // Seleciona a imagem do Pokémon
        const pokemonImage = document.querySelector(".pokemon-image");

        // Adiciona evento de mouseover para trocar para a imagem "back"
        pokemonImage.addEventListener("mouseover", () => {
            pokemonImage.src = pokemon.photoBack;
        });

        // Adiciona evento de mouseout para restaurar para a imagem "front"
        pokemonImage.addEventListener("mouseout", () => {
            pokemonImage.src = pokemon.photoFront;
        });
    }

    // Função para carregar pokemons baseadas em um limit
    const loadPokemonItens = (offset, limit) => {
        try {
            pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
                const pokemonLis = pokemons
                    .map((pokemon) => convertPokemonToLi(pokemon))
                    .join("");
                pokemonList.innerHTML += pokemonLis;

                // Adicionar evento de clique para cada item de Pokémon na lista
                const pokemonItems = pokemonList.querySelectorAll(".pokemon");

                pokemonItems.forEach((item, index) => {
                    const pokemonId = index + 1; // Os IDs dos Pokémon começam em 1
                    item.addEventListener("click", () => {
                        openPokemonModal(pokemonId);
                    });
                });
            });
        } catch (error) {
            console.error("Erro ao carregar Pokémon:", error);
            throw error;
        }
    };

    // função responsável por pesquisar pokemon por nome
    const searchPokemon = async () => {
        // Obtenha o valor atual do campo de entrada
        const pokemonName = pokemonNameInput.value.trim().toLowerCase();

        // Verifique se o campo de entrada não está vazio
        if (pokemonName) {
            try {
                // Busque o Pokémon pelo nome na API
                const pokemon = await pokeApi.searchPokemonByName(pokemonName);

                if (pokemon === 404) {
                    // Se ocorrer um erro ao buscar o Pokémon, trate-o como Pokémon não encontrado
                    pokemonList.innerHTML = '';
                    loadMoreButton.style.display = 'none';
                    const notFoundHtml = pokeNotFound(pokemonName);
                    return NotfoundPoke.innerHTML = notFoundHtml;
                }
                // Converta o Pokémon em um elemento de lista e adicione-o à lista de Pokémon
                const pokemonLi = convertPokemonToLi(pokemon);
                pokemonList.innerHTML = pokemonLi;

                const pokemonItem = pokemonList.querySelector(".pokemon");
                pokemonItem.addEventListener("click", () => {
                    const pokemonId = document.querySelector('.number');
                    const valueId = pokemonId.getAttribute("value").toString();
                    openPokemonModal(valueId);
                });

                // Limpe o campo de entrada
                pokemonNameInput.value = "";
                loadMoreButton.style.display = "none";

            } catch (error) {
                console.error('Erro ao buscar o Pokémon pelo nome:', error);
                throw error;
            }
        } else {
            pokemonList.innerHTML = '';
            loadMoreButton.style.display = '';
            NotfoundPoke.innerHTML = "";
            loadPokemonItens(0, 20);
        }
    }

    const searchPokemonBattle = async (pokemonName, cardPosition) => {

        // Verifique se o campo de entrada não está vazio
        if (pokemonName) {
            try {
                // Busque o Pokémon pelo nome na API
                const pokemon = await pokeApi.searchPokemonByName(pokemonName);

                // Determine qual card deve ser atualizado com base na posição
                const card = cardPosition === 'left' ? cardleftPoke : cardRightPoke;

                if (pokemon === 404) {
                    card.innerHTML = pokeNotFound(pokemonName);
                }

                if (cardPosition === 'left') {
                    pokemonLeft = pokemon;
                } else {
                    pokemonRight = pokemon;
                }

                openPokemonBattle(pokemonName, cardPosition); // Passa a posição do card para a função openPokemonBattle

            } catch (error) {
                console.error('Erro ao buscar o Pokémon pelo nome:', error);
                throw error;
            }
        } else {
            pokemonList.innerHTML = '';
            loadMoreButton.style.display = '';
            NotfoundPoke.innerHTML = "";
            loadPokemonItens(0, 20);
        }
    }

    // função para abrir modal com detalhes do pokemon
    const openPokemonBattle = async (pokemonName, cardPosition) => { // Adicionando um parâmetro adicional para indicar a posição do card
        try {
            // Obter os detalhes do Pokémon pelo nome
            const pokemon = await pokeApi.searchPokemonByName(pokemonName);

            // Determine qual card deve ser atualizado com base na posição
            const card = cardPosition === 'left' ? cardleftPoke : cardRightPoke;

            // Passar o card da batalha 
            card.innerHTML = renderPokemonModal(pokemon);

            // Define a cor do gradiente com base nos tipos do Pokémon
            const gradientColor = `radial-gradient(circle at 50% 0%, ${getGradientColors(
                pokemon.types
            )} 36%, #ffffff 36%)`;
            card.style.background = gradientColor;

        } catch (error) {
            console.error("Erro ao abrir modal do Pokémon:", error);
        }
    };

    // Função para comparar os Pokémon e decidir quem vence a batalha, apenas lógica inplementada
    const startBattle = () => {
        if(!pokemonLeft || !pokemonRight){
            alert('Selecione dois Pokémon para começar a batalha!');
        }else{
            if (pokemonLeft.SumStat && pokemonRight.SumStat) {

                if (pokemonLeft.SumStat > pokemonRight.SumStat) {
                    alert(`${pokemonLeft.name} é o mais forte!`);
                } else if (pokemonLeft.SumStat < pokemonRight.SumStat) {
                    alert(`${pokemonRight.name} é o mais forte!`);
                } else {
                    alert('Ambos os Pokémon têm a mesma força!');
                }
            } else {
                alert('Selecione dois Pokémon para começar a batalha!');
            }
        }
    }

    //função que limpa o campo de batalha
    const clearBattle = () => {
        // Limpa os valores dos campos de entrada
        onePokemon.value = "";
        twoPokemon.value = "";
    
        // Limpa o conteúdo dos cards
        cardleftPoke.innerHTML = "";
        cardRightPoke.innerHTML = "";
    
        // Remove os estilos dos cards
        cardleftPoke.style.cssText = "";
        cardRightPoke.style.cssText = "";

        // Restaura as referências dos Pokémon para null
        pokemonLeft = null;
        pokemonRight = null;

    };

    comparePoke.addEventListener("click", () => {
        battleModal.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        battleModal.style.display = "none";
        clearBattle();
    });

    pokemonSubmit.addEventListener('click', async () => {
        await searchPokemon();
    })

    comparePokebutton.addEventListener('click', () => {
        startBattle();
    })

    onePokemon.addEventListener('keypress', async (event) => {
        if (event.key === 'Enter') {
            await searchPokemonBattle(onePokemon.value.trim().toLowerCase(), 'left'); // Passa 'left' para indicar que é para o card da esquerda
        }
    });

    twoPokemon.addEventListener('keypress', async (event) => {
        if (event.key === 'Enter') {
            await searchPokemonBattle(twoPokemon.value.trim().toLowerCase(), 'right'); // Passa 'right' para indicar que é para o card da direita
        }
    });

    
    pokemonName.addEventListener('keypress', async (event) => {
        if (event.key === 'Enter') {
            await searchPokemon();
        }
    })

    clearBattlePoke.addEventListener('click', () => {
        clearBattle();
    })

    loadMoreButton.addEventListener("click", () => {
        offset += limit;
        loadPokemonItens(offset, limit);
    });

    backPoke.addEventListener("click", () => {
        loadPokemonItens(0, 20);
        pokemonList.innerHTML = '';
        NotfoundPoke.innerHTML = '';
        loadMoreButton.style.display = '';
    });

    loadPokemonItens(offset, limit);

}

document.addEventListener("DOMContentLoaded", () => {
    initializeApp();
});