// Selectors
const searchInput = document.querySelector(".search-input");
const searchForm = document.querySelector("#search-form");

// Event Listeners
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

async function displayHeroes() {
  
}
