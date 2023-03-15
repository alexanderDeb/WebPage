const API_URL = "https://rickandmortyapi.com/api/character?page=41";

// aqui se esta tomando el div principal del index.html
const DOM = document.querySelector("#app");
// aqui se esta creando un nodo de tipo <div>
const Container = document.createElement("div");

const ContainerNavDom = document.createElement("nav");
let TituloNav = document.createElement("h1");
let contentGen = document.createElement("div");
let ContentNav = document.createElement("button");
let Icon = document.createElement("i");
let ContentNav2 = document.createElement("a");
let ContainerPages = document.createElement("div");
let PagesSelector = document.createElement("footer");
var IndexPage = [1, 2, 3, 4, 5];

if (
  localStorage.getItem("username") != undefined &&
  localStorage.getItem("username") != "" &&
  localStorage.getItem("password") != undefined &&
  localStorage.getItem("password") != ""
) {
  document.querySelector("title").textContent = "Dashboard";
  fetch(`${API_URL}`).then(response => response.json()).then(Data => {
    const intervalo = Data.results;
    console.log(Data);
    intervalo.forEach(x => {
      let element = document.createElement("p");
      let image = document.createElement("img");
      let Div = document.createElement("a");
      image.src = `${x.image}`;
      element.appendChild(document.createTextNode(`${x.name}`));
      Div.appendChild(element);
      Div.appendChild(image);
      Container.appendChild(Div);
      Div.setAttribute("class", "card");
      Div.setAttribute("href", `./usuario.html?id=${x.id}`);
    });
    ContentNav2.setAttribute("href", "./profile.html");
    ContentNav2.setAttribute("class", "Link");
    TituloNav.appendChild(document.createTextNode("AC"));
    TituloNav.setAttribute("class", "titulonav");
    ContentNav.appendChild(Icon);
    ContainerNavDom.appendChild(TituloNav);
    ContentNav2.appendChild(
      document.createTextNode(`${localStorage.getItem("username")}`)
    );
    contentGen.appendChild(ContentNav2);
    contentGen.appendChild(ContentNav);
    ContainerNavDom.appendChild(contentGen);
    DOM.appendChild(ContainerNavDom);
    DOM.appendChild(Container);
    Icon.setAttribute("class", "bx bx-log-out bx-md");
    contentGen.setAttribute("class", "LogoutDiv");
    Container.setAttribute("class", "container");
    ContainerNavDom.setAttribute("class", "navbar");
    ContentNav.setAttribute("id", "logout");
    ContentNav.setAttribute("class", "logoutButton");
    document.getElementById("logout").onclick = function() {
      localStorage.clear();
      location.reload();
    };
    IndexPage.map(x => {
      let pages = document.createElement("a");
      pages.appendChild(document.createTextNode(x));
      ContainerPages.appendChild(pages);
      pages.setAttribute("id",`${x}`)
    });
    PagesSelector.appendChild(ContainerPages);
    DOM.appendChild(PagesSelector);
    ContainerPages.setAttribute("class", "containerpages");
    ContainerPages.setAttribute("id", "paginacion");
    console.log(document.getElementById('1').id)
  });
} else {
  document.querySelector("title").textContent = "Login";
  let Form = document.createElement("form");
  let InputUsername = document.createElement("input");
  let LabelUsername = document.createElement("label");
  let InputPass = document.createElement("input");
  let LabelPass = document.createElement("label");
  let Button = document.createElement("button");
  let Titulo = document.createElement("h1");
  Button.appendChild(document.createTextNode("Ingresar"));
  LabelUsername.appendChild(document.createTextNode("username"));
  LabelPass.appendChild(document.createTextNode("Password"));
  Titulo.appendChild(document.createTextNode("Login"));
  Form.appendChild(Titulo);
  Form.appendChild(LabelUsername);
  Form.appendChild(InputUsername);
  Form.appendChild(LabelPass);
  Form.appendChild(InputPass);
  Form.appendChild(Button);
  Container.appendChild(Form);
  DOM.appendChild(Container);
  Button.setAttribute("id", "button");
  InputPass.setAttribute("id", "pass");
  InputPass.setAttribute("type", "password");
  InputUsername.setAttribute("id", "user");
  Form.setAttribute("class", "loginCard");
  Container.setAttribute("class", "containerLogin");
  Button.setAttribute("class", "buttonLogin");
  InputPass.setAttribute("class", "inputLogin");
  InputUsername.setAttribute("class", "inputLogin");
  document.getElementById("button").onclick = function() {
    const pass = document.getElementById("pass").value;
    const user = document.getElementById("user").value;
    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);
    console.log(typeof localStorage.getItem("username"));
  };
}
