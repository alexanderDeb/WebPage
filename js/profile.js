if (
  localStorage.getItem("username") != undefined &&
  localStorage.getItem("username") != "" &&
  localStorage.getItem("password") != undefined &&
  localStorage.getItem("password") != ""
) {
  const DOM = document.querySelector("#app");
  const Container = document.createElement("div");
  const ProfileImage = document.createElement("img");
  const Nombre = document.createElement("h3");

  Nombre.appendChild(
    document.createTextNode(`Bienvenido: ${localStorage.getItem("username")}`)
  );
  ProfileImage.src =
    "https://www.mirringo.com.co/portals/mirringo/contenidos/caracteristicas-gatos-criollos-razas/img-interior-1-diferencia-gatos-min.jpg?ver=2022-05-19-103924-297";
  Container.appendChild(ProfileImage);
  Container.appendChild(Nombre);
  DOM.appendChild(Container);
  DOM.setAttribute("class", "ContainerProfileUser");
  Container.setAttribute("class", "cardProfile");
} else {
}
