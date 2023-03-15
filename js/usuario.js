const paramURL = window.location.search;
const parametrosURL = new URLSearchParams(paramURL);
const usuario = parametrosURL.get("id");

const API_URL = "https://rickandmortyapi.com/api/character/";

const Container = document.createElement("div");

const DOM = document.querySelector("#app");

if (
  localStorage.getItem("username") != undefined &&
  localStorage.getItem("username") != "" &&
  localStorage.getItem("password") != undefined &&
  localStorage.getItem("password") != ""
) {
  fetch(`${API_URL}${usuario}`).then(response => response.json()).then(Data => {
    let image = document.createElement("img");
    let Div = document.createElement("div");
    let Name = document.createElement("h1");
    let gender = document.createElement("p");
    let Specie = document.createElement("p");
    let Status = document.createElement("p");
    let Locate = document.createElement("p");
    let Origin = document.createElement("p");
    Specie.appendChild(
      document.createTextNode(`Es de espcie: ${Data.species}`)
    );
    Locate.appendChild(
      document.createTextNode(`Vive en: ${Data.location.name}`)
    );
    gender.appendChild(document.createTextNode(`Es de genero: ${Data.gender}`));
    Origin.appendChild(
      document.createTextNode(`Nacio en: ${Data.origin.name}`)
    );
    Status.appendChild(
      document.createTextNode(`Su estatus es de: ${Data.status}`)
    );
    Name.appendChild(document.createTextNode(`${Data.name}`));
    image.src = `${Data.image}`;
    console.log(Data);
    Container.appendChild(image);
    Div.appendChild(Name);
    Div.appendChild(gender);
    Div.appendChild(Specie);
    Div.appendChild(Status);
    Div.appendChild(Locate);
    Div.appendChild(Origin);
    Container.appendChild(Div);
    DOM.appendChild(Container);
    image.setAttribute("class", "imagen");
    Container.setAttribute("class", "cardUser");
    DOM.setAttribute("class", "containerUser");
  });
} else {
  document.location.href = "./index.html";
}
