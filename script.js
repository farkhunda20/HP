const url = "https://hp-api.herokuapp.com/api/characters";
const searchURL = "https://hp-api.herokuapp.com/api/character/";

async function getData(url) {
  const resp = await fetch(url);
  const repData = await resp.json();
  console.log(repData);
  displayCharacters(repData);

  // displayCharacters(repData);
}

getData(url);

const images = [
  "promo-sorting-1f5f62bff85b151c14a6ede793804547.png",
  "sorting-hat-312-3695f533f1d364dfc11246bb36a8c579.png",
  "harry.jpg",
  "548a9010b546255d4a8ac93d19bdec5f.jpg",
  "precious_wand___asset_series_by_manystoriesnotime_dfrbbpl-375w.jpg",
];

const imageConatainer = document.querySelector(".images-container");
const diamondImg = document.querySelector(".diamond-img");
const sectionTwo = document.querySelector(".section-two");
const form = document.querySelector("form");
const input = document.querySelector("input");
const search = document.querySelector("#search-ch");

function randomImage() {
  const randomNumber = Math.floor(Math.random() * images.length);
  const randomImage = images[randomNumber];
  diamondImg.src = `images/${randomImage}`;
}

window.setInterval(randomImage, 3000);

function displayCharacters(data) {
  data.slice(0, 26).forEach((character) => {
    const charContainer = document.createElement("div");
    charContainer.classList.add("char-conatiner");
    charContainer.innerHTML = `
    <img src="${character.image}" alt="">
    <div class="name">${character.name}</div>
    `;

    sectionTwo.appendChild(charContainer);

    charContainer.addEventListener("click", () => {
      sectionTwo.innerHTML = "";
      const charInfo = document.createElement("div");
      charInfo.classList.add("char-info");

      charInfo.innerHTML = `
        
      <img src="${character.image}" alt="" />
      <h4>Name: ${character.name}</h4>
      <h4>actor name: ${character.actor}</h4>
      <h4>House:${character.house}</h4>
      <h4>patronus: ${character.patronus}</h4>
  
      `;
      sectionTwo.appendChild(charInfo);
    });
  });
}

search.addEventListener("click", (e) => {
  e.preventDefault();
  const searchTerm = input.value;
  if (searchTerm) {
    getData(searchURL + searchTerm);
  }
});
