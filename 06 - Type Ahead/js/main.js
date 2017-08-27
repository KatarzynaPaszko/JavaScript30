const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let cities=[];

fetch(endpoint).then(elem => elem.json())
               .then(element => cities.push(...element));


function findMatches (wordToMatch, cities) {
  return cities.filter(place => {

    let regularExp = new RegExp(wordToMatch, "gi");
    return place.city.match(regularExp) || place.state.match(regularExp);
  })
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches (){
  const matchArray = findMatches(this.value, cities);
  let html = matchArray.map(elem => {
    let regex = new RegExp(this.value, "gi");
    let cityName = elem.city.replace(regex, `<span class='hl'>${this.value}</span>`);
    let stateName = elem.state.replace(regex, `<span class='hl'>${this.value}</span>`);
    return `
    <li>
      <span class="name">${cityName}, ${stateName}</span>
      <span class="population">${numberWithCommas(elem.population)}</span>
    </li>`
  }).join("");
  suggestions.innerHTML=html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
