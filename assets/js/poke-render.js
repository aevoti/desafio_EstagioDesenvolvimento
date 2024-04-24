// função para converter os pokemons em lista
const convertPokemonToLi = (pokemon) => {
    return `<li class="pokemon ${pokemon.type}">
              <span class="number" value="${pokemon.number}">#${pokemon.number}</span>
              <span class="name">${pokemon.name}</span>
  
              <div class="detail">
                <ol class="types">
                  ${pokemon.types
            .map((type) => `<li class="type ${type}"> ${type}</li>`)
            .join("")}
                </ol>
  
                <img src="${pokemon.photoFront}" alt="${pokemon.name}">
              </div>
            </li>`;
};

// função para renderizar o pokemon no modal
const renderPokemonModal = (pokemon) => {
    return `
        <div class='card'>
          <span class="close">&times;</span>
          <p class="hp">
            <span>HP ${pokemon.hp}</span>
          </p>
          <img class="pokemon-image" src=${pokemon.photoFront} />
          <h2 class="poke-name">${pokemon.name}</h2>
          <div class="detail">
            <div class="types">
              ${pokemon.types
                .map((type) => `<li class="type ${type}"> ${type}</li>`)
                .join("")}
            </div>
          </div>
          <div class="statsList">
            <div class="stats">
              <div>
                <h3>${pokemon.statAttack}</h3>
                <p>Attack</p>
              </div>
              <div>
                <h3>${pokemon.statDefense}</h3>
                <p>Defense</p>
              </div>
              <div>
                <h3>${pokemon.statSpeed}</h3>
                <p>Speed</p>
              </div>
            </div>

            <div class="statsSum">
              <div>
                <h3>${pokemon.SumStat}</h3>
                <p>Total sum of stats</p>
              </div>
            </div>
          </div>
        </div>
    `;
};

// função para definir gradiente baseado no tipo de cada pokemon
const getGradientColors = (types) => {
    const typeColors = {
        normal: "#A8A77A",
        fire: "#EE8130",
        water: "#6390F0",
        electric: "#F7D02C",
        grass: "#7AC74C",
        ice: "#96D9D6",
        fighting: "#C22E28",
        poison: "#A33EA1",
        ground: "#E2BF65",
        flying: "#A98FF3",
        psychic: "#F95587",
        bug: "#A6B91A",
        rock: "#B6A136",
        ghost: "#735797",
        dragon: "#6F35FC",
        dark: "#705746",
        steel: "#B7B7CE",
        fairy: "#D685AD",
    };

    // Retornar uma string com as cores correspondentes aos tipos
    return types.map((type) => typeColors[type]).join(", ");
};

// função para renderizar quando um pokemon não é encontrado
const pokeNotFound = (pokemonName) => {
    return `
        <img src="assets/img/icon_pikachu.svg" alt="Pokemon não encontrado" />
        <h2>Infelizmente o Pokemon ${pokemonName} não foi encontrado :(</h2>    
    `;
}