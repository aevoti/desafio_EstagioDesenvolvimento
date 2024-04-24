const pokeApi = {
    // Função para converter os detalhes do Pokémon para uma instância do objeto Pokemon
    convertPokeApiDetainToPokemon: pokemonDetail => {

        const pokemon = new Pokemon();

        pokemon.number = pokemonDetail.id;
        pokemon.name = pokemonDetail.name;

        const types = pokemonDetail.types.map((typeSlot) => typeSlot.type.name);
        const [type] = types;

        pokemon.types = types;
        pokemon.type = type;
        pokemon.photoFront = pokemonDetail.sprites.front_default;
        pokemon.photoBack = pokemonDetail.sprites.back_default;

        pokemon.hp = pokemonDetail.stats[0].base_stat;
        pokemon.statAttack = pokemonDetail.stats[1].base_stat;
        pokemon.statDefense = pokemonDetail.stats[2].base_stat;
        pokemon.statSpecialAttack = pokemonDetail.stats[3].base_stat;
        pokemon.statSpecialDefense = pokemonDetail.stats[4].base_stat;
        pokemon.statSpeed = pokemonDetail.stats[5].base_stat;

        pokemon.SumStat = pokeApi.sumStatPokemon(pokemonDetail.stats);
        
        return pokemon;
    },

    // Função de Soma de stats do Pokemon
    sumStatPokemon: function (pokemonStats) {
        let totalStats = 0;
        pokemonStats.forEach(stat => {
            // Adiciona o valor base_stat ao total
            totalStats += stat.base_stat;
        });

        return totalStats;
    },

    // Função para obter os detalhes de um Pokémon
    getPokemonDetails: async (pokemon) => {
        try {
            const response = await fetch(pokemon.url);
            const JsonBody = await response.json();
            return pokeApi.convertPokeApiDetainToPokemon(JsonBody);
        } catch (error) {
            console.error('Erro ao obter detalhes do Pokémon:', error);
            throw error;
        }
    },

    // Função para obter os detalhes de um Pokémon por id
    getPokemonDetailById: async (pokemonId) => {
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
            const response = await fetch(url);
            if (response.status === 404) {
                return response.status;
            }
            const pokemonDetail = await response.json();
            return pokeApi.convertPokeApiDetainToPokemon(pokemonDetail);
        } catch (error) {
            console.error('Erro ao obter detalhes do Pokémon:', error);
            throw error;
        }
    },

    // Função para obter os detalhes de um pokemon por nome
    searchPokemonByName: async (pokemonName) => {
        try {
            // Faz a requisição para a API para obter os detalhes do Pokémon pelo nome
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
            const response = await fetch(url);

            if (response.status === 404) {
                return response.status;
            }
            const pokemonDetail = await response.json();

            return pokeApi.convertPokeApiDetainToPokemon(pokemonDetail);
        } catch (error) {
            console.error('Erro ao buscar o Pokémon pelo nome:', error);
            throw error;
        }
    },

    // Função para obter uma lista de Pokémon
    getPokemons: async (offset = 0, limit = 20) => {
        try {
            const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
            const response = await fetch(url);
            const JsonBody = await response.json();
            const pokemons = JsonBody.results;
            const detailRequests = pokemons.map(pokeApi.getPokemonDetails);
            const pokemonsDetails = await Promise.all(detailRequests);
            return pokemonsDetails;
        } catch (error) {
            console.error('Erro ao obter lista de Pokémon:', error);
            throw error;
        }
    }
}


