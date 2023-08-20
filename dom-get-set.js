var elements;
/// ------------------ GET METHOD ---------------------
//elements=document.getElementsByTagName('p'); // console all p tag
//elements=document.getElementsByTagName('h1'); console all h1 tag
//elements=document.getElementsByClassName('container'); console  container class
//elements=document; //console all document tag and page
//elements=document.body; //console all document tag and page

//1. innertext :return a id/class value
//elements=document.getElementById("header").innerText;
//elements=document.getElementById("content").innerText;

//2. innerHTML: return a value with tag
//elements=document.getElementById("content").innerHTML;

//3. getAttribute return a attribute value mean's return a id by class name
//elements=document.getElementById("content").getAttribute("class");

//4. getAttribute(): return find attribute name value
//elements=document.getElementById("content").getAttribute("style");
// elements=document.getElementById("content").getAttribute("onClick");

// function abcd(){
//   alert('hii');
// }

//5. getAttributeNode(): return find attribute name value and properties
//elements=document.getElementById("content").getAttributeNode("style").value;

//6. get Attribute return all value in array format
//elements=document.getElementById("content").attributes;
//elements=document.getElementById("content").attributes[3].value; //return a particuller properties value
// elements=document.getElementById("content").attributes[2].name; //return a particuller properties name
// console.log(elements);



//------------------------------ SET METHOD ----------------------------

//1. innerText : set a text only if set with tag that's print with tag
//elements=document.getElementById("header").innerText="<h1>Test Element</h1>";

//2. innerHTML : set a text with tag a print only value
// elements=document.getElementById("header").innerHTML;
// console.log(elements);

// elements=document.getElementById("header").innerHTML="<h1>Test Element</h1>";

//3. setAttribute() :  setAttribute for document html tag and class/id also
// elements=document.getElementById("content").setAttribute("class", "xyx"); //set a new class
// console.log(elements);

// elements=document.getElementById("content").getAttribute("class");
// console.log(elements);

// elements=document.getElementById("header").setAttribute("style", "color:green; font-weight:bold");
// console.log(elements);

// elements=document.getElementById("content").getAttribute("class");
// console.log(elements);

//4. attributes() : set a value particuller properties
// elements=document.getElementById("content").attributes[2].value = "border:3px solid green; padding:10px;";
// console.log(elements);

//5. removeAttribute() : remove a properties value also
elements=document.getElementById("header").removeAttribute('style');
console.log(elements);