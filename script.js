
//pour initier les nombres de l'api
onInit();

async function onInit() {
    const countPeople = await getData('https://swapi.dev/api/people');
    showCount(countPeople,'.nbrPeople')
    const countVehicles = await getData('https://swapi.dev/api/vehicles');
    showCount(countVehicles,'.nbrVehicles')
    const countPlanets = await getData('https://swapi.dev/api/planets');
    showCount(countPlanets,'.nbrPlanets')
}

async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.count;
};

function showCount(count,classCard){
    let element = document.querySelector(classCard);
    element.textContent = count;
    
}

//pour mettre la date actuelle
const today = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = today.toLocaleDateString('fr-FR', options);
let elementDate = document.querySelector('.date');
elementDate.textContent = formattedDate;


