//Multiple type of print value
// var a = "World"; //es-5 version
// var b = "Hello " + a;
// var c = " Whats app"; // add new var and value
// var b = "Hello " + a + c;
// console.log(b);

// var a = "World"; //es-6 version
// var b = "Hello " + a;
// var c = " Whats app"; // add new var and value
// var b = `Hello ${a} ${c}`;
// console.log(b);

// let user = "Avinash"
// let mark = 50;
// let status = `Hi ${user} you have passed and your mark is ${mark}%`
// console.log(status);

// function checkVal(fname, lname){
//     return`Hi ${fname}  and your last name is ${lname}`
// }

// let hello = `Your details are ${checkVal('Avinash', 'Tiwari')}`
// console.log(checkVal('Avinash', 'Tiwari'))
// console.log(hello)

//Arrow Function

// function hello(name){ //es-5 
//     console.log(`hii Avinash ${name}`);
// }

// hello("Tiwari");

// let helloo = function helloo(){ //es-56
//     console.log(`hii Avinash ${name}`);
// }
// console.log(helloo);

let hellooo = (nname) => { //es-6
    return `hii Avinash ${nname}`;
}
console.log(hellooo("Tiwari"));