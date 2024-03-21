let card = document.getElementById("card");
let load = document.getElementById("load");
let searchValue = document.getElementById("searchValue");
let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", getCard);
let data;
async function getCard() {
  card.classList.add("none");
  data = await fetch(`https://api.github.com/users/${searchValue.value}`);
  if (data.ok) {
    data = await data.json();
    load.classList.add("none");
    generateCard()
  } else {
    console.log("Не найдено");
    load.classList.remove('none')
  }
}
function generateCard() {
  console.log(data);
  card.innerHTML = `
    <img src="${data.avatar_url}" />
    <h4>${data.login}</h4>
    <p>${data.bio}</p>
    <nav>
      <div>
        <i class="fas fa-map-marker-smile"></i>
        <span>${data.location}</span>
      </div>
      <div>
        <i class="fas fa-heart"></i>
        <span>${data.followers}</span>
      </div>
      <div>
        <i class="fas fa-star"></i>
        <span>${data.following}</span>
      </div>
      <div>
        <i class="fas fa-palette"></i>
        <span>${data.public_repos}</span>
      </div>
  </nav>
  <a href="${data.html_url}">Перейти</a>`;
  card.classList.remove("none");

}
