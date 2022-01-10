// Selectors
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");
const heroList = document.querySelector(".hero-list");

// Event Listeners
searchBtn.addEventListener("click", loadHeroes);

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
      <li class="hero col-sm-3">
        <img src="${hero.image.url}" class="hero-img">
        <h2>${hero.name}</h2>
        <h4>${hero.biography['full-name']}</h4>
      </li>
    `;
  }).join();

  heroList.innerHTML = htmlString;

}
