const URL = "https://api.jikan.moe/v3/search/anime?q=";

const form = document.querySelector("#form");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const input = form.querySelector("#input");
  const data = await getAnime(input.value);
  const anime = data.results;

  updateUI(anime);
});

window.addEventListener("click", e => {
  if (e.target.classList.contains("detailsAnime")) {
    console.log("ok");
  }
});

function getAnime(anime) {
  return fetch(`${URL}${anime}`).then(res => res.json());
}

function updateUI(animeData) {
  let Cards = "";
  animeData.forEach(a => (Cards += showCard(a)));
  const container = document.querySelector("main.container");

  container.innerHTML = Cards;
}

function showCard(data) {
  const { title, score, image_url, url } = data;
  return `<div class="card">
            <a href="${url}">
              <img
                class="card__image"
                src="${image_url}" alt="poster"
              />
              <div class="card__content">
                <div class="card__title">${title}</div>
                <div class="card__rate">${score}</div>
              </div>
            </a>
          </div>`;
}
