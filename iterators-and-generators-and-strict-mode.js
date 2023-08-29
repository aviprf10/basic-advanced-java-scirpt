//---------------------Iterators----------------------
//iterator is an object that allows you to traverse over a sequence of values. 
//Iterators are defined by the Iterator protocol, which consists of the following methods:
//next(): This method returns the next value in the sequence.
//done(): This method returns a boolean value indicating whether the iteration is complete.

// let number = [100, 200, 300, 400, "helloo"];
// let iter = number[Symbol.iterator]();
// // console.log(iter.next());
// // console.log(iter.next().value);
// // console.log(iter.next().done);

// let result = iter.next();
// while(!result.done){
//     console.log(result.value);
//     result = iter.next();
// }


//--------------------Generators--------------------
//This function generates a sequence of numbers from 0 to 9. 
//The yield keyword is used to return a value from the generator function.

// function *generaterit(){
//     console.log("First Message");
//     yield 'Yield no. 1';
//     console.log("Second Message");
//     yield 'Yield no. 2';
//     yield 'Yield no. 3';
//     yield 'Yield no. 4';
// }

// let a = generaterit();
// console.log(a.next());
// console.log(a.next());
// a.next();
// console.log(a.next());

// function *generaterit(){
//     //let result = yield;
//     let result = (yield)*10;
//     console.log(`this is generate yield value ${result}`);
// }

// let a = generaterit();
// a.next();
// a.next(500);


//-----------------------------------Strict Mode----------------------------
//Strict mode in JavaScript is a way to make your code more secure and reliable. 
//It does this by enforcing stricter rules on how code can be written.

// "use strict";
// a=10;
// console.log(a);

// function test(){
//     //"use strict";
//     b=20;
// }

// test();

function test(a, b, c){
    "use strict";
    console.log(a + b + c);
}
test(10, 20, 30);

