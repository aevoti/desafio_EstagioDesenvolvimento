document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
    let selectedPokemon = [];
  
    // Função para calcular a soma dos status
    function calculateStatsSum(stats) {
      let sum = 0;
      stats.forEach(stat => {
        sum += stat.base_stat;
      });
      return sum;
    }
  
      // Função para exibir os detalhes de um Pokémon
  async function showPokemonDetails(pokemon, elementId) {
    const response = await fetch(pokemon.url);
    const data = await response.json();

    const detailsElement = document.getElementById(elementId);
    detailsElement.innerHTML = '';

    const nameElement = document.createElement('h2');
    nameElement.textContent = data.name;

    const imageElement = document.createElement('img');
    imageElement.src = data.sprites.front_default;

    const typesElement = document.createElement('p');
    typesElement.textContent = 'Tipos: ' + data.types.map(type => type.type.name).join(', ');

    const abilitiesElement = document.createElement('p');
    abilitiesElement.classList.add('abilities');
    abilitiesElement.textContent = 'Habilidades:';

    data.abilities.forEach(async ability => {
      const abilityResponse = await fetch(ability.ability.url);
      const abilityData = await abilityResponse.json();
      abilitiesElement.innerHTML += `<span>${abilityData.name}</span>, `;
    });

    const statsSum = calculateStatsSum(data.stats);
    const statsSumElement = document.createElement('p');
    statsSumElement.textContent = `Soma total das habilidades: ${statsSum}`;

    detailsElement.appendChild(nameElement);
    detailsElement.appendChild(imageElement);
    detailsElement.appendChild(typesElement);
    detailsElement.appendChild(abilitiesElement);
    detailsElement.appendChild(statsSumElement);

    // Mostra os detalhes dos elementos dos pokémons
    detailsElement.style.display = 'block';

    return statsSum;
  }
  /* Função para comparar os status de dois Pokémon
  async function comparePokemonStats(pokemon1, pokemon2) {
    const statsSum1 = await showPokemonDetails(pokemon1, 'pokemon-details-1');
    const statsSum2 = await showPokemonDetails(pokemon2, 'pokemon-details-2');

    let message;
    if (statsSum1 > statsSum2) {
      message = `${pokemon1.name} has higher stats sum (${statsSum1}) than ${pokemon2.name} (${statsSum2})`;
    } else if (statsSum1 < statsSum2) {
      message = `${pokemon2.name} has higher stats sum (${statsSum2}) than ${pokemon1.name} (${statsSum1})`;
    } else {
      message = `${pokemon1.name} and ${pokemon2.name} have the same stats sum (${statsSum1})`;
    }

    alert(message);
  }*/
  
  // Função para lidar com a seleção de Pokémon
  function handlePokemonSelection(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        selectedPokemon.push(data);
        if (selectedPokemon.length === 2) {
          comparePokemonStats(selectedPokemon[0], selectedPokemon[1]);
          selectedPokemon = [];
        }
      })
      .catch(error => console.error('Erro ao selecionar pokémon:', error));
  }
  
 // Função para popular a lista de Pokémon
 async function populatePokemonList() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const pokemonList = data.results;

    const listElement = document.getElementById('pokemon-list');
    listElement.innerHTML = '';

    pokemonList.forEach(pokemon => {
      const listItem = document.createElement('li');
      listItem.classList.add('collection-item');
      listItem.textContent = pokemon.name;
      listItem.addEventListener('click', () => showPokemonDetailsOnClick(pokemon.url));
      listElement.appendChild(listItem);
    });
  }
  
  // Função para mostrar os detalhes de um Pokémon ao clicar em seu nome
  async function showPokemonDetailsOnClick(url) {
    const response = await fetch(url);
    const data = await response.json();

    const detailsElement = document.getElementById('pokemon-details');
    detailsElement.innerHTML = '';

    const nameElement = document.createElement('h2');
    nameElement.textContent = data.name;

    const imageElement = document.createElement('img');
    imageElement.src = data.sprites.front_default;

    const typesElement = document.createElement('p');
    typesElement.textContent = 'Tipos: ' + data.types.map(type => type.type.name).join(', ');

    const abilitiesElement = document.createElement('p');
    abilitiesElement.classList.add('abilities');
    abilitiesElement.textContent = 'Habilidades:';

    data.abilities.forEach(async ability => {
      const abilityResponse = await fetch(ability.ability.url);
      const abilityData = await abilityResponse.json();
      abilitiesElement.innerHTML += `<span>${abilityData.name}</span>, `;
    });

    const statsSum = calculateStatsSum(data.stats);
    const statsSumElement = document.createElement('p');
    statsSumElement.textContent = `Soma total das habilidades: ${statsSum}`;

    detailsElement.appendChild(nameElement);
    detailsElement.appendChild(imageElement);
    detailsElement.appendChild(typesElement);
    detailsElement.appendChild(abilitiesElement);
    detailsElement.appendChild(statsSumElement);

    // Mostra detalhes pokémon
    detailsElement.style.display = 'block';
  }
   // Função para lidar com a busca de Pokémon
   async function handlePokemonSearch() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();

    const response = await fetch(apiUrl);
    const data = await response.json();
    const pokemonList = data.results;

    const filteredPokemon = pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(searchInput));

    const listElement = document.getElementById('pokemon-list');
    listElement.innerHTML = '';

    filteredPokemon.forEach(pokemon => {
      const listItem = document.createElement('li');
      listItem.classList.add('collection-item');
      listItem.textContent = pokemon.name;
      listItem.addEventListener('click', () => showPokemonDetailsOnClick(pokemon.url));
      listElement.appendChild(listItem);
    });
  }
  
    // Chamada da função para popular a lista de Pokémon quando a página carrega
    populatePokemonList();

     // Adicionando o evento de busca ao campo de input
  document.getElementById('search-input').addEventListener('input', handlePokemonSearch);
  });
  