//1. createElemnt(): useing for add tag in document (HTMl page and add html tag)
//var elementstag=document.createElement("p");
//console.log(elementstag);

//2. createTextNode(): using for text/peragraph in document (HTML page added text)
//var elementsvalue=document.createTextNode("Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ");
//console.log(elementsvalue);

//3. createComment(): using for comment peragraph and tag also
// elements=document.createComment("Lorem Ipsum comment ");
// console.log(elements);

//4. appendChild(): using for attech text in tag and print value
// var res = elementstag.appendChild(elementsvalue);
// document.getElementById("headline").appendChild(elementsvalue);
// console.log(res);

//5. insertBefore(): useing for add before text or define a index then print for text/elements
//var res = elementstag.appendChild(elementsvalue);
var target = document.getElementById("headline");
//target.insertBefore(elementstag, target.childNodes[0]);

//6. insertAdjacentElement(): using for text and in begin with append 
//target.insertAdjacentElement('afterbegin', elementstag); //afterbegin is postion for print a value

//7. insertAdjacentHTML(): using for add or print text in begin last any postion  and using html tag
// var newElements="<h2>Hi this is my first java script course</h2>";
// target.insertAdjacentHTML('afterend', newElements); //afterend is postion for print a value
// console.log(newElements);

//8. insertAdjacentText(): Using for add or print only text 
// var newElements="Hi this is my first java script course";
// target.insertAdjacentText('beforebegin', newElements); //beforebegin is postion for print 
// console.log(newElements);

//9. Contains(): Find out key/value/id/class if find out the value return true or don't findout return false
var findelemnt = document.getElementById("abcd");
// var find = target.contains(findelemnt);
// console.log(find);

//10. hasAttribute(): find the aatribute for target class/id/elements match or find out the value return true an other return false
// var find = target.hasAttribute("class"); //find class/id/elemnts
// console.log(find);

//11. hasChildNodes():  find out a child node under the id/class/element. if find out any class/id/elemnt/tag then return true an other wise return false 
// var find = target.hasChildNodes('class'); //if any space, enter key any value. have count this
// console.log(find);

//12. isEqualNode //find out the value same  and with tag/id/class/node/elemnt. and match value and find out return true other wise return false this us case sanstive method
var target1 = document.getElementById('list1').children[1];
var target2 = document.getElementById('list2').children[1];
var find = target1.isEqualNode(target2);
console.log(find);

