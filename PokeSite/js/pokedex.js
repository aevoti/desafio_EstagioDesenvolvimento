let pokemons = [];
const poke_Container = document.getElementById("poke_Container");
const url = "https://pokeapi.co/api/v2/pokemon";
const pokemons_number = 151;
const search = document.getElementById("search");
const form = document.getElementById("form");

const fechPokemons = async () => {
    for(let i = 1; i< pokemons_number; i++){
        await getAllpokemons(i);
    }
    pokemons.forEach((pokemon) => createPokemonCard(pokemon))
};

const removePokemon = () => {
    const pokemonEls = document.getElementsByClassName("pokemon");
    let removablePokemons = [];
    for(let i = 0; i < pokemonEls.length; i++){
        const pokemonEl = pokemonEls[i];
        removablePokemons = [...removablePokemons, pokemonEl];
    }
    removablePokemons.forEach((remPoke) => remPoke.remove());
};

const getPokemon = async (id) => {
    const searchPokemons = pokemons.filter((poke) => poke.name === id);
    removePokemon();
    searchPokemons.forEach((pokemon) => createPokemonCard(pokemon));
};

const getAllpokemons = async (id) =>{
    const res = await fetch(`${url}/${id}`);
    const pokemon = await res.json();
    pokemons = [...pokemons,pokemon];
};

fechPokemons();

function createPokemonCard(pokemon){
    const types = pokemon.types.map(typeInfo => typeInfo.type.name)
    const pokemonEl = document.createElement("div");
    pokemonEl.classList.add(`pokemon`);
    const poke_types = pokemon.types.map((el) => el.type.name).slice(0,1);
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const poke_stat = pokemon.stats.map((el) => el.stat.name);
    const base_value = pokemon.stats.map((el) => el.base_stat);
    const hp = base_value.slice(0,1)
    const attack = base_value.slice(1,2)
    const defense = base_value.slice(2,3)
    const poder = parseInt(hp) + parseInt(attack) + parseInt(defense)


    const pokeInnerHTML = `<div class = "img-container ${types[0]}">
    <span class="bola"></span>
        <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt ="${name}"/>
        
    </div>
    

    <div class="info ${types[0]}">
        <span class="number">#${pokemon.id.toString().padStart(3,"0")}</span>
        <h3 class = "name ">${name}</h3>
        <small class="type">
            <span>${types.join(' | ')}</span> 
        </small>
    </div>

    <div class="stats ${types[0]}">
        <h2>Atributos</h2>
        <div class="flex">
        <p class = "hp">HP: ${hp}</p>
        <p class = "attk">Ataque: ${attack}</p>
        <p class = "def">Defesa: ${defense}</p>
        <p class = "poder">Poder: ${poder}</p>

        </div>
    </div>
    `;
    pokemonEl.innerHTML = pokeInnerHTML;
    poke_Container.appendChild(pokemonEl);

}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = search.value
    if(searchTerm){
        getPokemon(searchTerm);
        search.value = "";
    }
    else if (searchTerm === ""){
        pokemons=[];
        removePokemon();
        fechPokemons();
    }
});

