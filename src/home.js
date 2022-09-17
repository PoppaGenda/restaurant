export default function appendHome(value) {
    value.appendChild(home);
    
  }
  
  //creating Home display
  const home = document.createElement("div");
  home.setAttribute("id", "home");
  home.style =
    "width:1200px;height:600px;background-color:rgb(87, 90, 90) ;border: 1px solid black;position:absolute;top:250px;left:450px; ";
  content.appendChild(home);
  
  //adding only name
  const name1 = document.createElement("div");
  name1.textContent = "PIZZA POPPA";
  name1.style =
    "font-size:150px;font-weight:bold;color:white;display:flex;margin-top:200px;justify-content:center";
  home.appendChild(name1);
  // 