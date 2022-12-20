import { contact } from "./pages/contact"
import { home } from "./pages/home"
import { menu } from "./pages/menu"
import "./style.css"

var content = document.getElementById("content")
var homePageContents = home()
var menuPageContents = menu()
var contactPageContents = contact()
var tabs = document.createElement("div")
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
