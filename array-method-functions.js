//array function use basicly esy access and modifiy array
//List of array function/method
var a = ['Lorem', 'Ipsum', 'Demo', 'john', 'Ipsum']; 

//1. Sort():- used for array sorting Asc order for variticle form
//a.sort();
//console.log(a.sort());

//2. Reverse():- used for array desc order for varticle form
//console.log(a.reverse());

//3. POP():- Remove a last array value used this function
// a.pop();

//4. PUSH():- Add a last value in array used this function
// a.push('Helloo');
// a.push('Any');

//5. SHIFT():- Remove a first array value  used this function
//a.shift();

//6. UNSHIFT(): Add a first array value used this function
//a.unshift('DDD');

//7. CONCAT(): Add multiple array value use concat used this function
// var b = ["Raju", "syam"];
// var c = ["Ankit", "Akhil"];
// var d = b.concat(a,c);

//8. JOIN(): use for multiple array convert to single value use this function
//var b = ["Raju", "syam"];
//var c = ["Ankit", "Akhil"];
//var d = b.concat(a,c);
//var e =d.join(" - ");

//9. SLICE(): Get a value in array and u difne a index name get the value used this function
//var b =a.slice(1, 3);

//10. SPLICE(): Add a value in array with difine index wise and not create a new array used exits array use this function 
//a.splice(1,0,"Helloo", "World"); // difine index postion after add this value
//a.splice(1, 2, "Helloo"); // Remove a difne a index array value first value add after index new value second delete this index value and add value
//a.splice(1, 2); // remove 2 and 3 array value

//11. isArray(): check varible type it's array or not used this array function if passed string num. or other data type return false and used array return true
//var b = Array.isArray(a);
// a=10;
// if(Array.isArray(a) == true)
// {
//     console.log("This is data type array");
// }else{
//     console.log("This not array");
// }

//12. indexOf(): get value index used this function search value in array first to last
//var b = a.indexOf("Ipsum", 2);
//var b = a.indexOf("dd", 2);
//var b = a.indexOf("Ipsum");

//13. lastIndexOf():  get a last matching value index this function search value last to first
//var b = a.lastIndexOf("Demo", 2);

//14. includes(): find a value in array or check a value in array avaible or not use this function this a case sanstive value same to same metch then return ture
//var b = a.includes("Demo"); got true
//var b = a.includes("demo"); got false becouse case sanstive

//15. some(): find out and mathed and condtion waised check value using some and some check only one value if match or condtion wise match then return ture
// var ages = [10, 5, 30, 40, 5];
// var d = ages.some(checkvalue); // define a function for condtion
// function checkvalue(ages)
// {
//     return ages >= 18;
// }

//16. every():  find out a value in array check every array and return true first to last array search and check matched value and check condtion. all value check or constion true then return true other wise false
// var ages = [100, 50, 30, 40, 50];
// var d = ages.every(checkvalue); // define a function for condtion test and passed all value
// function checkvalue(ages)
// {
//     return ages >= 18;
// }

//17. find(): search a value in condtion wise and match any first value then return a value and not checked all value
// var ages = [5, 50, 30, 40, 50];
// var d = ages.find(checkvalue); // define a function for condtion test and passed all value
// function checkvalue(ages)
// {
//     return ages >= 18;
// }

//18. findIndex(): this function value same find function but deffrent is this function return index not return a value
// var ages = [5, 10, 30, 40, 50];
// var d = ages.findIndex(checkvalue); // define a function for condtion test and passed all value
// function checkvalue(ages)
// {
//     return ages >= 18;
// }

//19. filter(): Search all value condtion wise and match array value then return a new array
// var ages = [5, 10, 30, 40, 50];
// var d = ages.filter(checkvalue); // define a function for condtion test and passed all value
// function checkvalue(ages)
// {
//     return ages >= 18;
// }

//20. toString(): Array convert to srting use this and after convert not wokred any array function/method
//var b =a.toString();

//21. valueOf(): this function work same tostring function but this functon return a same array and value
//var b =a.valueOf();

//22. fill(): used fo all array value replace a fill value and return a fill value
//var b =a.fill('abcd'); if passed empty and not any fill value return undefined value every array value

//23. foreach(): used for print a array value if array have a multiple value
// a.forEach(element => {
//     console.log(element); 
// });

// a.forEach(function(value,index) {
//     console.log(index + ': ' + value); 
// });

// a.forEach(loop);

// function loop(value,index) {
//     console.log(index + ': ' + value); 
// }

//24. MAP(): used for calculation and return a new array 
//var b = [10, 20, 5, 40];
var b = [
    { fName:'ram', lName:'hi' },
    { fName:'raju', lName:'Hello' },
    { fName:'rg', lName:'World' },
];
var c = b.map(test);
console.log(c);

function test(x){
    return x.fName + ' ' + x.lName;
}

