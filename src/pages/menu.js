export function menu() {

    var h1 = document.createElement("h1");
    var h2 = document.createElement("h2");
    var page = document.createElement("div");
    page.classList.add("menu")


  page.appendChild(
    createMenuItem(
      "Spaghetti",
      "manila clam, calamari, baby leek, garlic, peperoncino"
    )
  );
  page.appendChild(
    createMenuItem(
      "Gnocchetti",
      "shrimp, chili, rosemary oil"
    )
  );
  page.appendChild(
    createMenuItem(
      "Fusilli",
      "red wine braised octopus, bone marrow"
    )
  );
  page.appendChild(
    createMenuItem(
      "Casarecce",
      "bolognese, parmigiano"
    )
  );
  page.appendChild(
    createMenuItem(
      "Pansotti",
      "ricotta ravioli, basil-arugula pesto, pine nut"
    )
  );


  return page;

  

    //page.appendChild(h1);
    //page.appendChild(h1);
    //page.appendChild(h2);
  
    //h1.innerText = "Brine - Menu";


  }

  function createMenuItem(title,description){
    const menuItem = document.createElement('div')
    const h1 = document.createElement('h1')
    const h2 = document.createElement('h2')
    menuItem.appendChild(h1)
    menuItem.appendChild(h2)
    h1.innerText = title
    h2.innerText = description
    return menuItem
  }
  
