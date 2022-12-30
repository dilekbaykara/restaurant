import { contact } from "./pages/contact"
import { home } from "./pages/home"
import { menu } from "./pages/menu"
import "./style.css"
import background from "./images/background.jpg"



var content = document.getElementById("content")

content.style.backgroundImage = `url("${background}")`;
console.log(background)

var tabs = document.createElement("div")
tabs.classList.add("tabs")




var homePageContents = home()
var menuPageContents = menu()
var contactPageContents = contact()

var pageContent = document.createElement("div")

var homePageTab = document.createElement("div")
var menuPageTab = document.createElement("div")
var contactPageTab = document.createElement("div")

homePageTab.innerText = "Home"
menuPageTab.innerText = "Menu"
contactPageTab.innerText = "Contact"

tabs.appendChild(homePageTab)

tabs.appendChild(menuPageTab)

tabs.appendChild(contactPageTab)

content.appendChild(tabs)
content.appendChild(pageContent)

pageContent.appendChild(homePageContents)



homePageTab.addEventListener("click", () => {
  pageContent.innerHTML = ""
  pageContent.appendChild(homePageContents)
})

menuPageTab.addEventListener("click", () => {
  pageContent.innerHTML = ""
  pageContent.appendChild(menuPageContents)
})

contactPageTab.addEventListener("click", () => {
  pageContent.innerHTML = ""
  pageContent.appendChild(contactPageContents)
})
