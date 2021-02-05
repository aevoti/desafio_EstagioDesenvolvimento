//Communication backend API and external API
const inputSearch = document.getElementById('search')
const buttonSearch = document.getElementById('buttonSearch')
const table = document.getElementById('table')

renderTable()

buttonSearch.onclick = ev => {

    ev.preventDefault()

    //Search treatment 
    const inputValue = inputSearch.value
    const regex = /[@!#$%^&*¨()\\`´{}^~,.;?'":;<>|_=+-[\]\/0-9]/g
    //1ºSpecials caracteres
    if (!inputValue) {
        alert("Preencha o campo")
        return
    }
    //2ºEmpity search
    if (regex.test(inputValue) || inputValue.length < 3) {
        alert("Campo inválido")
        return
    }
    //3ºMany clicks
    buttonSearch.disabled = true
    setTimeout(function () {
        buttonSearch.disabled = false
    }, 1500)

    //Verify if localStorage/dataStorage is empity. If doesn't get the last element id and set id + 1. If does set id = 1
    let dataStorage = JSON.parse(localStorage.getItem('weatherInformation')) || []
    if (dataStorage.length == 0) {
        this.idGen = 1
    } else this.idGen = JSON.parse(localStorage.getItem('weatherInformation')).pop().id + 1

    //Consuming back-end API 
    const url = `http://localhost:4567/city/?query=${inputSearch.value}`        //.catch(alert('Houve algum problema com o servidor'))
    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            const obj = {
                id: idGen,
                name: data.location.name,
                temperature: data.current.temperature,
                humidity: data.current.humidity,
                airSpeed: data.current.wind_speed,
                date: new Date().toLocaleString('pt-BR', {
                    month: 'numeric',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric'
                }),
                weather: data.current.weather_icons
            }
            
            //Update the card and save at localStorage
            informations(obj)

            //When search the city, insert in HTML the city
            addInformation(obj)
        }).catch(() => {
            alert('Erro de conexão com o servidor')
        })
}

const city = document.getElementById('cityContent')
const temperature = document.getElementById('temperatureContent')
const weatherIcon = document.getElementById('weatherIcon')
const humidity = document.getElementById('humidity')
const speed = document.getElementById('speed')

//Renders the table with all data from localStorage
function renderTable() {
    //If there's no information at localstorage, return [], if does attach in dataStorage
    const informationLocalStoraga = localStorage.getItem('weatherInformation') ?
        JSON.parse(localStorage.getItem('weatherInformation')) : []
    informationLocalStoraga.forEach(w => addInformation(w))
}

//Update the card and save at localStorage
const informations = data => {
    //Modify the card weather
    city.innerHTML = data.name
    temperature.innerHTML = `${data.temperature}°C`
    weatherIcon.src = data.weather
    humidity.innerHTML = `${data.humidity}%`
    speed.innerHTML = `${data.airSpeed}km/h`
    inputSearch.value = ''

    //Saving  weather's informations at localStorage   
    const weatherInformation = {
        'id': data.id,
        'name': data.name,
        'temperature': data.temperature,
        'humidity': data.humidity,
        'airSpeed': data.airSpeed,
        'date': data.date
    }

    //If there's no information at localstorage, return [], if does attach in dataStorage
    let dataStorage = JSON.parse(localStorage.getItem('weatherInformation')) || []
    dataStorage.push(weatherInformation)
    localStorage.setItem('weatherInformation', JSON.stringify(dataStorage))
    this.contidtion = true
}

//Create the table in HTML
function addInformation(wt) {
    const row = document.createElement('tr')
    row.innerHTML = `
    <td>${wt.id}</td> 
    <td>${wt.name}</td> 
    <td>${wt.temperature}°C</td>     
    <td>${wt.humidity}%</td> 
    <td>${wt.airSpeed}km/h</td> 
    <td>${wt.date}</td>     
    <button id="delete">x</button>`
    table.appendChild(row)
}

//Remove item from table and localstorage
table.onclick = e => {
    //Only remove if click especifically on delete bottom
    if (e.target.textContent == 'x') {
        e.target.parentElement.remove()
        removeItemLocalStorage(e.target.parentNode.cells)
    }

}

function removeItemLocalStorage(data) {
    let dataStorage = JSON.parse(localStorage.getItem('weatherInformation')) || []
    const idComparasion = data[0].textContent

    for (let i = 0; i < dataStorage.length; i++) {
        if (dataStorage[i].id == idComparasion) {
            dataStorage.splice(i, 1)
            localStorage.setItem('weatherInformation', JSON.stringify(dataStorage))
            return
        }
    }
}

//styling CSS. Keep mark the tagMenu from navBar
window.addEventListener("hashchange", (x) => {

    const oldURL = x.oldURL.split('#')[1]
    const newURL = x.newURL.split('#')[1]


    const oldMenu = document.querySelector(`.menu a[href='#${oldURL}']`)
    const newMenu = document.querySelector(`.menu a[href='#${newURL}']`)

    oldMenu.classList.remove('selected')
    newMenu.classList.add('selected')
})