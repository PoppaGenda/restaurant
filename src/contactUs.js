export default function appendContact(value) {
    value.appendChild(contact);
    
  }
  
  //creating contact display
  const contact = document.createElement("div");
  contact.setAttribute("id", "contact");
  contact.style =
    "display:grid;grid-template-columns:1fr 3fr;width:1200px;height:600px;background-color:rgb(87, 90, 90) ;border: 1px solid black;position:absolute;top:250px;left:450px; ";
  content.appendChild(contact);
  //adding sidebard details
  const listDiv = document.createElement("div");
  contact.appendChild(listDiv);
  //adding list in listDIv
  const list = document.createElement("ul");
  list.style =
    "list-style-type:none;display:flex;flex-direction:column;gap:20px;;justify-content:center;font-size:32px;color:white;";
  listDiv.appendChild(list);
  //adding list elements
  //list item1
  const listitem1 = document.createElement("li");
  listitem1.textContent = "Contact No:123-345-6789";
  listitem1.style = "word-wrap:break-word";
  list.appendChild(listitem1);
  //list item2
  const listitem2 = document.createElement("li");
  listitem2.textContent = "Address:Pizza Poppa,123 Street,Poppa Corner,New york";
  listitem2.style = "word-wrap:break-word";
  list.appendChild(listitem2);
  //list item3
  const listitem3 = document.createElement("li");
  listitem3.textContent = "Email:oppopa@poppa.com";
  listitem3.style = "word-wrap:break-word";
  list.appendChild(listitem3);
  
  //adding image in another div
  const map = document.createElement("div");
  contact.appendChild(map);
  //adding image
  const image = document.createElement("img");
  image.src = "./map.png";
  image.style = "width:80%;height:80%;margin:40px";
  map.appendChild(image);
  // 