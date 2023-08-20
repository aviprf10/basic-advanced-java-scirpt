var elements;

//1. querySelector(): using return a value for get first elements and if define same class using multiple time but get and return first class value only
// elements=document.querySelector("#header").innerHTML="<h1>Hello World</h1>";
// console.log(elements);

// elements=document.querySelector("#content").getAttribute("class");
// console.log(elements);

// elements=document.querySelector(".list"); //return first match call
// console.log(elements);

// elements=document.getElementsByClassName("list"); // return all class value find class name
// console.log(elements);

//2. querySelectorAll(): using for return  id/class method value and difne same class multiple time using then return all class value
// elements=document.querySelectorAll(".list"); // return all class value find class name
// console.log(elements);

// elements=document.querySelectorAll(".list")[1]; // return praticuller index value find class name
// console.log(elements);

// elements=document.querySelectorAll(".list")[1].innerHTML; // return praticuller index html value find class name
// console.log(elements);

// elements=document.querySelectorAll("ul")[0].innerHTML; // return praticuller tag  html value find class name
// console.log(elements);

// elements=document.querySelectorAll("ul")[0].innerHTML; // return praticuller tag  html value find class name
// console.log(elements);

// elements=document.querySelectorAll("#header h1")[0]; // return class/id value
// console.log(elements);

// elements=document.getElementById("header").parentElement; // return parent tag call and method
// console.log(elements);

// elements=document.body.parentElement; // return body perent
// console.log(elements);

// elements=document.getElementById("header").parentNode; // return only tag
// console.log(elements);

// elements=document.getElementById("header").children[0]; // return child tag/ return child class/method/id and tag and return particuller index
// console.log(elements);

// elements=document.getElementById("header").childNodes[0]; // return child tag/ return child class/method/id and tag and return particuller index
// console.log(elements);

// elements=document.getElementById("header").firstChild; // return first child element and value
// console.log(elements);

// elements=document.getElementById("header").firstElementChild.innerHTML; // return last child element and value
// console.log(elements);

// elements=document.getElementById("content").nextSibling; // return a simmler sbiling id/class 
// console.log(elements);

// elements=document.getElementById("content").nextElementSibling; // return last tag element and value
// console.log(elements);

elements=document.getElementById("content").previousSibling; // return a simmler sbiling id/class 
console.log(elements);

elements=document.getElementById("content").previousElementSibling; // return last tag element and value
console.log(elements);

