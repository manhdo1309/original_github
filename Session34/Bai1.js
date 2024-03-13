let ul = document.createElement("ul");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");

li1.innerHTML = "List item number 1";
li2.innerHTML = "List item number 2";
li3.innerHTML = "List item number 3";

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

document.body.appendChild(ul);

