export function contact() {
    var img = document.createElement("img");
    img.src = "../images/map.png"
    var h1 = document.createElement("h1");
    var page = document.createElement("div");
    var h2 = document.createElement("h2");
    var h3 = document.createElement("h3");

   
    page.appendChild(h1);
    page.appendChild(img);
    h1.innerText = "Brine - Contact";
    page.appendChild(h2);
    h2.innerText = "240 Central Park South New York, NY 10019"
    page.appendChild(h3);
    h3.innerText = "212-582-5100"
  
    return page;
  }
  
