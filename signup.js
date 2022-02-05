//DOM Accessing
let firstNameById = document.getElementById("first_name");
console.log(firstNameById);

let lastNameById = document.getElementById("last_name");
console.log(lastNameById);

// let firstNameByClassName = document.getElementsByClassName("input--style-4")[0];
// console.log(firstNameByClassName);

// let firstNameByName = document.getElementsByName("first_name")[0];
// console.log(firstNameByName);

// let firstNameBySelectorId = document.querySelector('#first_name');

// console.log(firstNameBySelectorId)

// let firstNameBySelectorClass = document.querySelector('.input--style-4');
// console.log(firstNameBySelectorClass);

// let firstNameBySelectorName = document.querySelector('[name="first_name"]');
// console.log(firstNameBySelectorName);

// let firstNameBySelectorInputName = document.querySelector("[input[name=first_name]");
// console.log(firstNameBySelectorInputName);

// let firstNameBySelectorAllClass = document.querySelectorAll('.input--style-4')[0];
// console.log(firstNameBySelectorAllClass);

// getElementsByClassName =>Array.from (HTML Collection) . arrayFunc()
// getElementsByName => NodeList
// querySelectorAll => NodeList


//property vs. attribute

// console.log(firstNameById.getAttribute("id"));
// console.log(firstNameById.getAttribute("class"));
// firstNameById.setAttribute("class", "redColorClass");
// firstNameById.setAttribute("type", "radio");

// innerHTML, innerTEXT, TextContent, (input => value)

let headerDiv = document.getElementById("headerId");
// console.log("innerHTML =>", headerDiv.innerHTML);
// console.log("innerText =>", headerDiv.innerText);
// console.log("textContent =>", headerDiv.textContent);

firstNameById.value = "Mehmet Emin";

// firstNameById.setAttribute("value", "Mehmet Emin")

lastNameById.value = "Bulbul";

let fullNameById = document.getElementById("full_name");
console.log(fullNameById);

fullNameById.value = (firstNameById.value + lastNameById.value);

let emailNameById = document.getElementById("email");
console.log(emailNameById);

emailNameById.value = "eminbulbul@example.com";

//create logo element

let logo = document.createElement("img");
logo.setAttribute("src", "img/logo.png");
logo.setAttribute("class", "headerLogo");

headerDiv.appendChild(logo);






// Ders ici kodlarimiz hocanin yadiklari







// DOM Accessing
// let firstNameById = document.getElementById("first_name");
// console.log(firstNameById);

// let lastNameById = document.getElementById("last_name");
// console.log(lastNameById);

// let firstNameByClassName = document.getElementsByClassName("input--style-4")[0];
// console.log(firstNameByClassName);

// let firstNameByName = document.getElementsByName("first_name")[0];
// console.log(firstNameByName);

// let firstNameBySelectorId = document.querySelector("#first_name");
// console.log(firstNameBySelectorId);

// let firstNameBySelectorClass = document.querySelector(".input--style-4");
// window.console.log(firstNameBySelectorClass);

// let firstNameBySelectorName = document.querySelector("[name='first_name']");
// console.log(firstNameBySelectorName);

// let firstNameBySelectorInputName = document.querySelector("input[name=first_name]");
// console.log(firstNameBySelectorInputName);

// let firstNameBySelectorAllClass = document.querySelectorAll(".input--style-4")[0];
// window.console.log(firstNameBySelectorAllClass);

// getElementsByClassName => Array.from(HTMLCollection).arrayFunc()
// getElementsByName => NodeList.arrayFunc()
// querySelectorAll => NodeList.arrayFunc()

// property vs. attribute

// console.log(firstNameById.getAttribute("id"));
// console.log(firstNameById.getAttribute("class"));
// firstNameById.setAttribute("class", "redColorClass");
// firstNameById.setAttribute("type", "radio");

//innerHTML, innerText, textContent, (input=>value)
// let headerDiv = document.getElementById("headerId");
// console.log("innerHTML=>", headerDiv.innerHTML);
// console.log("innerText=>", headerDiv.innerText);
// console.log("textContent=>", headerDiv.textContent);

// firstNameById.value = "Ryan";
// firstNameById.setAttribute("value", "Ryan")
// lastNameById.value = "Daniel";

// // 🔥🔥🔥🔥🔥 FULL NAME(camelcase =>RYAN DANIEL) and E-MAIL(lovercase => ryan.daniel@clarusway.com) CHALLENGE  🔥🔥🔥🔥🔥

// let fullName = document.querySelector("#full_name");
// fullName.value = `${firstNameById.value.toUpperCase()} ${lastNameById.value.toUpperCase()}`;

// let email = document.getElementById("email");
// email.value = `${firstNameById.value.toLowerCase()}.${lastNameById.value.toLowerCase()}@cw.com`;

//create logo element
// let headerDiv = document.getElementById("headerId");
// let logo = document.createElement("img");
// console.log(logo);
// logo.setAttribute("src", "img/logo.png");
// logo.setAttribute("class", "headerLogo");

// headerDiv.append(logo); 
// headerDiv.appendChild(logo); 
// headerDiv.innerHTML += '<img src="img/logo.png" alt="Bank logo" class="nav__logo" id="logo" />';