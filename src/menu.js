export default function appendMenu(value) {
    value.appendChild(menu);
    
    
  }
  //creating menu display
  const menu = document.createElement("div");
  menu.setAttribute = ("id", "menu");
  menu.style =
    "width:1200px;height:800px;position:absolute;top:150px;left: 350px;background-color: red; ";
  content.appendChild(menu);
  
  //   creating menu items
  // menu item1
  const item1 = document.createElement("div");
  item1.setAttribute = ("id", "item1");
  item1.style =
    "display:grid;grid-template-columns:1.5fr 2.5fr;width:80%;height:200px;background-color: rgb(181, 175, 175);opacity:1;margin:50px;margin-left:80px; ";
  
  menu.appendChild(item1);
  //adding image
  const image1 = document.createElement("img");
  image1.src = "./pizza.jpg";
  image1.style = "width: 70%;height: 100%;";
  item1.appendChild(image1);
  //adding data
  const data1 = document.createElement("div");
  
  data1.textContent =
    "food is amazing have a try and enjoy our meal.Please pay the bill on time cause Poppa dislikes people who dont pay their bills on time. Thank you for having food at poppas";
  item1.appendChild(data1);
  
  // menu item2
  const item2 = document.createElement("div");
  item2.setAttribute = ("id", "item2");
  item2.style =
    "display:grid;grid-template-columns:1.5fr 2.5fr;width:80%;height:200px;background-color: rgb(181, 175, 175);opacity:1;margin:50px;margin-left:80px; ";
  
  menu.appendChild(item2);
  //adding image
  const image2 = document.createElement("img");
  image2.src = "./desert.jpg";
  image2.style = "width: 70%;height: 100%;";
  item2.appendChild(image2);
  //adding data
  const data2 = document.createElement("div");
  data2.textContent = "Calories:200px";
  data2.textContent =
    "food is amazing have a try and enjoy our meal.Please pay the bill on time cause Poppa dislikes people who dont pay their bills on time. Thank you for having food at poppas";
  item2.appendChild(data2);
  
  // menu item3
  const item3 = document.createElement("div");
  item3.setAttribute = ("id", "item3");
  item3.style =
    "display:grid;grid-template-columns:1.5fr 2.5fr;width:80%;height:200px;background-color: rgb(181, 175, 175);opacity:1;margin:50px;margin-left:80px; ";
  
  menu.appendChild(item3);
  //adding image
  const image3 = document.createElement("img");
  image3.src = "./beverage.jpg";
  image3.style = "width: 70%;height: 100%;";
  item3.appendChild(image3);
  //adding data
  const data3 = document.createElement("div");
  data3.textContent = "Calories:200px";
  data3.textContent =
    "food is amazing have a try and enjoy our meal.Please pay the bill on time cause Poppa dislikes people who dont pay their bills on time. Thank you for having food at poppas";
  item3.appendChild(data3);
  // 