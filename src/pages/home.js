import main from "../images/main.png"
export function home() {
  var imgHome = document.createElement("img");
  imgHome.src = main
  var h1 = document.createElement("h1");
  var page = document.createElement("div");

  page.appendChild(h1);
  h1.innerText = "Brine - A Seafood Restaurant";
  page.appendChild(imgHome);

  return page;
}
