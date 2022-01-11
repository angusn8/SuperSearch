// Selectors
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");
const searchForm = document.querySelector("#search-form");
const heroList = document.querySelector(".hero-list");

// Event Listeners
searchBtn.addEventListener("click", loadHeroes);
searchForm.addEventListener("submit", loadHeroes);

// Functions
async function loadHeroes() {
  
  const hero = searchInput.value;
  
  if (hero != "") {
    const url = `https://polar-sierra-18874.herokuapp.com/https://superheroapi.com/api/351214476841314/search/${hero}`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
    displayHeroes(data.results);
  }

}

function displayHeroes(heroes) {

  const htmlString = heroes.map((hero) => {
    return `
      <li class="hero col-md-4">
        <img src="${hero.image.url}" class="hero-img">
        <h2>${hero.name}</h2>
        <h4 class="hero-subtext">Full Name: ${hero.biography['full-name']}</h4>
        <h4 class="hero-subtext">Publisher: ${hero.biography['publisher']}</h4>
      </li>
    `;
  }).join("");

  heroList.innerHTML = htmlString;

}
