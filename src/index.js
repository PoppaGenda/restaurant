import appendHome from "./home";
import appendContact from "./contactUs";
import appendMenu from "./menu";
import clearDisplay from './clearDisplay';

const content = document.getElementById("content");

//creating background
const body = document.createElement("div");
body.setAttribute = ("id", "body");
body.style = "background-color:rgb(87, 90, 90);width:100vw;height:100vh;";
content.appendChild(body);
//creating header
const header = document.createElement("div");
header.setAttribute = ("id", "header");
header.style =
  " display: grid;grid-template-columns: 1fr 1fr;background-color: rgb(21, 21, 21);font-weight: bold;border:1px solid black;width:100vw;height:10vh;position:absolute;top:0";
content.appendChild(header);

//creating logo inside header
const logo = document.createElement("div");
logo.setAttribute = ("id", "logo");
logo.textContent = "Pizza Poppa";
logo.style =
  "display:flex;align-items:center;margin-left:30px;color:white;font-size: 50px;";
header.appendChild(logo);

//creating the buttons
const tabs = document.createElement("div");
tabs.setAttribute("id", "tabs");
tabs.style =
  " display: flex;align-items: center;justify-content: space-around;";
header.appendChild(tabs);

//creating tabs

//hometab
const hometab = document.createElement("div");
hometab.textContent = "Home";
hometab.style =
  "  display:flex;align-items:center;justify-content:center; width:200px;height: 50px;border-radius: 10px;color:aliceblue;font-size: 24px;font-weight: bold;background-color: rgb(87, 90, 90) ";
hometab.setAttribute = ("id", "hometab");
tabs.appendChild(hometab);

//Menu
const menutab = document.createElement("div");
menutab.textContent = "Menu";
menutab.style =
  "  display:flex;align-items:center;justify-content:center; width:200px;height: 50px;border-radius: 10px;color:aliceblue;font-size: 24px;font-weight: bold;background-color: rgb(87, 90, 90) ";
menutab.setAttribute = ("id", "menutab");
tabs.appendChild(menutab);

//contact
//hometab
const contab = document.createElement("div");
contab.textContent = "Contact US";
contab.style =
  "  display:flex;align-items:center;justify-content:center; width:200px;height: 50px;border-radius: 10px;color:aliceblue;font-size: 24px;font-weight: bold;background-color: rgb(87, 90, 90) ";
contab.setAttribute = ("id", "contab");

tabs.appendChild(contab);

//creating container below header
const container = document.createElement("div");
container.setAttribute = ("id", "container");
container.style =
  "background-color:rgb(87, 90, 90);width:100vw;height:100vh;position:relative;";
body.appendChild(container);

//creating translucent displayport within container
const display = document.createElement("div");
display.setAttribute = ("id", "display");
display.style =
  "background-color:white;opacity:0.5;width:auto;height:auto;position:absolute;left:200px;top:200px;";

container.appendChild(display);


//adding eventlisterners:hometab,menutab,contab





hometab.addEventListener("click", () => {
  clearDisplay(display)
appendHome(display);
  

});


menutab.addEventListener("click", () => {
  
  clearDisplay(display)
  appendMenu(display);
});

contab.addEventListener("click", () => {
  clearDisplay(display)
  appendContact(display);

});
// 