const CoresTipos = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
  };



function ConsultaPokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(function (response) {
    response.json()
    .then(function (pokemon){
        CriaPokemon(pokemon);
    })
})
}

function CriaPokemon(pokemon){  
    document.getElementById("lista-pokemon").insertAdjacentHTML('beforeend',
    `
    <div class="col-5 col-md-4 col-lg-3 poke-container" onclick="ExibePokemon(${pokemon.id})">
        <img src="${pokemon.sprites.front_default}">
        <div class="nome-pokemon">
            ${pokemon.name}
        </div>
        <div class="pokemon-tag">
            #${pokemon.id}
        </div>
    </div>
    `);
}

function ExibePokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(function (response) {
    response.json()
    .then(function (pokemon){
        var SomaAtributos = pokemon.stats[0].base_stat + pokemon.stats[1].base_stat + pokemon.stats[2].base_stat+pokemon.stats[3].base_stat+pokemon.stats[4].base_stat+pokemon.stats[5].base_stat;
        document.getElementById("container-externo").innerHTML = `
        <a href="index.html"><button>Voltar</button></a>
        <div class="card-pokemon" id="cardunico">
            <p class="hp"><img src=""><span>HP </span>${pokemon.stats[0].base_stat}</p>
            <img src="${pokemon.sprites.other.dream_world.front_default}">
            <h2 class="nome-pokemon">${pokemon.name}</h2>
            <h2 class="nome-pokemon">#${pokemon.id}</h2>
            <div class="tipos">

            </div>
            <div class="atributos">
                <div>
                    <h3>${pokemon.stats[1].base_stat}</h3><p>Ataque</p>
                </div>
                <div>
                    <h3>${pokemon.stats[5].base_stat}</h3><p>Velocidade</p>
                </div>
                <div>
                    <h3>${pokemon.stats[2].base_stat}</h3><p>Defesa</p>
                </div>
            </div>
            <div class="atributos">
                <div>
                    <h3>${pokemon.stats[3].base_stat}</h3><p>Ataque Especial</p>
                </div>
                <div>
                    <h3>${pokemon.stats[4].base_stat}</h3><p>Defesa Especial</p>
                </div>
            </div>
            <hr>
            <div class="atributos">
                <p>Poder Total</p><h3>${SomaAtributos}</h3>
            </div>
        </div>
        `;
        AppendTipos(pokemon.types);
        EstilizaCard(CoresTipos[pokemon.types[0].type.name]);
    })

    let AppendTipos = (types) => {
        types.forEach(item => {
            let NovoSpan = document.createElement('span');
            NovoSpan.textContent = item.type.name;
            document.querySelector(".tipos").appendChild(NovoSpan)
        })
    };

    let EstilizaCard = (color) => {
        document.getElementsByClassName("card-pokemon")[0].style.background = `radial-gradient(
            circle at 50% 0%, ${color} 36%, white 36%
        )`
        document.getElementsByClassName("tipos")[0].querySelectorAll(".tipos span").forEach(CoresTipos => CoresTipos.style.backgroundColor = color);
    };
})

}


function RenderizaPagInicial(){
    for(let i = 1; i < 151; i++) {
        ConsultaPokemon(i);
    }
}

function PesquisaPokemon(){
    NomePokemon = document.getElementById("pokemon-desejado").value;
    ExibePokemon(NomePokemon);
    
}


function IniciaBatalha(){
    document.getElementById("container-externo").innerHTML = `
    <div class="container-batalha">
        <div class="caixa-batalha">
            <div id="pokemon-1">
                
            </div>
        </div>
        
        <div class="caixa-batalha">
            <div id="pokemon-2">

            </div>
        </div>
    </div>
    `;
}

RenderizaPagInicial();