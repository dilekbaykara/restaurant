export function home() {
  var h1 = document.createElement("h1");
  var page = document.createElement("div");

  page.appendChild(h1);
  h1.innerText = "Brine - A Seafood Restaurant";

  return page;
}
