const colors = {
    normal: "#a8a77a",
    fire: "#ee8130",
    water: "#6390f0",
    electric: "#f7d02c",
    grass: "#7ac74c",
    ice: "#96d9d6",
    fighting: "#c22e28",
    poison: "#a33ea1",
    ground: "#e2bf65",
    flying: "#a98ff3",
    psychic: "#f95587",
    bug: "#a6b91a",
    rock: "#b6a136",
    ghost: "#735797",
    dragon: "#6f35fc",
    dark: "#705746",
    steel: "#b7b7ce",
    fairy: "#d685ad",
};
async function buscaInfo(id) {
    let pokeExiste = JSON.parse(localStorage.getItem(id));
    if (pokeExiste != null) {
        return pokeExiste;
    } else {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: "https://pokeapi.co/api/v2/pokemon/" + id,
                success: async function (result) {
                    let base_stats = 0;
                    let status = {};
                    let tipos = [];
                    let habilidades = [];

                    result.stats.forEach((stato) => {
                        base_stats += stato.base_stat;
                        status[stato.stat.name] = stato.base_stat;
                    }); //populando status

                    result.types.forEach((tipo) => {
                        tipos.push(tipo.type.name);
                    }); //populando tipo

                    result.abilities.forEach((habilidade) => {
                        habilidades.push(habilidade.ability.name);
                    }); //populando habilidades
                    let pokeObj = {
                        id: result.id,
                        nome: result.name,
                        img: result.sprites.front_default,
                        peso: result.weight,
                        altura: result.height,
                        status: status,
                        base_stats: base_stats,
                        tipos: tipos,
                        habilidades: habilidades,
                    };
                    localStorage.setItem(
                        pokeObj.nome.toString(),
                        JSON.stringify(pokeObj)
                    );
                    localStorage.setItem(
                        pokeObj.id.toString(),
                        JSON.stringify(pokeObj)
                    );
                    resolve(pokeObj);
                },
                error: function (error) {
                    reject(error);
                },
            });
        });
    }
}
function carregaNomes() {
    let pokeNomeList = JSON.parse(localStorage.getItem("pokeNomeList"));
    if (pokeNomeList != null) {
        return pokeNomeList;
    } else {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: "https://pokeapi.co/api/v2/pokemon/?limit=1025",
                success: function (response) {
                    let lstNames = [];
                    for (
                        let index = 0;
                        index < response.results.length;
                        index++
                    ) {
                        lstNames.push(response.results[index].name);
                    }
                    localStorage.setItem(
                        "pokeNomeList",
                        JSON.stringify(lstNames)
                    );
                    resolve(lstNames);
                },
                error: function (error) {
                    reject(error);
                },
            });
        });
    }
}
async function compararPokemon(pokemon1, pokemon2) {
    let titulo;
    let mensagem;

    if (pokemon1.id === pokemon2.id) {
        return Swal.fire({
            title: "Você escolheu o mesmo Pokémon!!!",
            html: `
                <div style="display: flex; justify-content: space-around; align-items: center;">
                    <img src="${pokemon1.img}" style="width: 150px;"/>
                    <img src="img/vs.svg" style="width: 100px;"/>
                    <div style="display: flex; justify-content: space-around; align-items: center;">
                        <img src="${pokemon2.img}" style="width: 150px;"/>
                    </div>
                </div>`,
        });
    }

    if (pokemon1.base_stats > pokemon2.base_stats) {
        titulo = `${toNormalizedName(pokemon1.nome)} é mais forte 💪💪`;
        mensagem = `
                    <div style="display: flex; justify-content: center;flex-direction: column;">
                        <div style="display: flex;gap: 20px;">
                            <div>
                                <img src="${pokemon1.img}" alt="" style="width: 150px;"/>
                                <h1>${toNormalizedName(pokemon1.nome)} tem ${pokemon1.base_stats}
                            </div>
                            <img src="img/maior-que.svg" alt="sinal" style="width: 100px;"/>
                            <div>
                                <img src="${pokemon2.img}" alt="" style="width: 150px;"/>
                                <h1>${toNormalizedName(pokemon2.nome)} tem ${pokemon2.base_stats}
                            </div>
                        </div>
                        <h1>${toNormalizedName(pokemon1.nome)} tem ${Math.abs(pokemon1.base_stats - pokemon2.base_stats)} pontos de status a mais!</h1>
                    </div>`;
    } else if (pokemon1.base_stats === pokemon2.base_stats) {
        titulo = `${toNormalizedName(pokemon1.nome)} tem a mesma quantidade de status que ${toNormalizedName(pokemon2.nome)}`;
        mensagem = `
                    <div style="display: flex; justify-content: center;flex-direction: column;">
                        <div style="display: flex;gap: 20px;">
                            <img src="${pokemon1.img}" alt="" style="width: 150px;"/>
                            <img src="img/igual.svg" alt="sinal" style="width: 100px;"/>
                            <img src="${pokemon2.img}" alt="" style="width: 150px;"/>
                        </div>
                        <h1>Estes Pokémons tem ${pokemon1.base_stats}💪💪</h1>
                    </div>`;
    } else {
        titulo = `${toNormalizedName(pokemon2.nome)} é mais forte 💪💪`;
        mensagem = `
                    <div style="display: flex; justify-content: center;flex-direction: column;">
                        <div style="display: flex;gap: 20px;">
                            <div>
                                <img src="${pokemon2.img}" alt="" style="width: 150px;"/>
                                <h1>${toNormalizedName(pokemon2.nome)} tem ${pokemon2.base_stats}
                            </div>
                            <img src="img/maior-que.svg" alt="sinal" style="width: 100px;"/>
                            <div>
                                <img src="${pokemon1.img}" alt="" style="width: 150px;"/>
                                <h1>${toNormalizedName(pokemon1.nome)} tem ${pokemon1.base_stats}
                            </div>
                        </div>
                        <h1>O ${toNormalizedName(pokemon2.nome)} tem ${Math.abs(pokemon1.base_stats - pokemon2.base_stats)} pontos de status a mais!</h1>
                    </div>`;
    }
    Swal.fire({
        title: titulo,
        html: mensagem,
    });
}

async function ComparaRecebe1() {
    let pokeNomeList = await carregaNomes();
    let pokeNomeListNormal = pokeNomeList.map(e=> toNormalizedName(e));
    let idPoke = new URL(window.location.href).searchParams.get("idPoke");
    let pokePesquisado = await buscaInfo(parseInt(idPoke));
    await Swal.fire({
        title: `Selecione o Pokémon para comparar com ${toNormalizedName(pokePesquisado.nome)}`,
        html: `
            <div style="display: flex; justify-content: space-around; align-items: center;">
                <img src="${pokePesquisado.img}"/>
                <img src="img/vs.svg"/>
                <img src="img/interrogacao.svg" style="width: 100px;"/>
            </div>`,
        input: "select",
        inputOptions: pokeNomeListNormal,
        inputPlaceholder: "Selecione o Pokémon",
        showCancelButton: true,
    }).then(async (nomeComparacao) => {
        let PokeComparacao = await buscaInfo(
            pokeNomeList[nomeComparacao.value]
        );
        await compararPokemon(pokePesquisado, PokeComparacao);
    });
}

async function comparaRecebe2() {
    let pokeNomeList = await carregaNomes();
    let pokeNomeListNormal = pokeNomeList.map(e=> toNormalizedName(e));
    let pokemon1;
    let pokemon2;
    await Swal.fire({
        title: "Selecione o primeiro Pokémon",
        icon: "question",
        input: "select",
        inputPlaceholder: "Selecione o primeiro Pokémon",
        inputOptions: pokeNomeListNormal,
        inputAttributes: {
            autocapitalize: "off",
        },
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonText: "Próximo",
        allowOutsideClick: false,
    }).then(async (primeiroResult) => {
        if (primeiroResult && primeiroResult.value !== undefined) {
            pokemon1 = await buscaInfo(pokeNomeList[primeiroResult.value]);
            await Swal.fire({
                title: "Selecione o segundo Pokémon",
                html: `<div style="display: flex; justify-content: space-around; align-items: center;">
                                <img src="${pokemon1.img}" style = "width: 150px;"/>
                                <img src="img/vs.svg" style="width: 100px;"/>
                                <img src="img/interrogacao.svg" style="width: 100px;"/>
                            </div>`,
                input: "select",
                inputPlaceholder: "Selecione o segundo Pokémon",
                inputOptions: pokeNomeListNormal,
                inputAttributes: {
                    autocapitalize: "off",
                },
                showCancelButton: true,
                cancelButtonText: "Cancelar",
                confirmButtonText: "Comparar",
                allowOutsideClick: false,
            }).then(async (segundoResult) => {
                pokemon2 = await buscaInfo(pokeNomeList[segundoResult.value]);
                await compararPokemon(pokemon1, pokemon2);
            });
        }
    });
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
function toNormalizedName(str){
    return str.split("-").map(a => toTitleCase(a)).join(" ")
}