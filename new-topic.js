//copy refrance value;
// var a=[1,2,3,4,5,6]; // this array
// var b =a;
// b.pop();
// console.log(b);
// console.log(a);

// //using spread operator 

// var c = [...a]; // remove only 
// c.pop();
// console.log(c);
// console.log(a);

// var obj = {name:"Avinash"};
// var d = {...obj};
// console.log(d);

// //truly and falsey value

// //falsey value : 0, NaN, null, undifine

// if(1){
//     console.log('true');
// }else{
//     console.log('false');
// }

// //foreach

// var x=[1,2,3,4,5,6,7,8,9,18,28,665,44,3,2345];

// x.forEach(function(val){
//     console.log(val+2);
// });


//callback function
// setTimeout(function(){
//     console.log('Helloo');
// }, 2000);

// //first class function using as value or var 

// var a= function(){
//     return 'Hii';
// }
// console.log(a);

// console.log(function(){ 'Hey';});

// function abcd(a){
//     a();
// }
// abcd(function abcd(){ console.log('Lorem Ipsum');});

//array index
// var a = [1,2,3,4];
// a[-1]=2;
// console.log(a);

//check array used isArray();

//iife => immediately invoked function expression

// var ans = (function(){
//     var privateVal = 12;
//     return{
//         getter: function(){
//             console.log(privateVal);
//         },
//         setter: function(val){
//             privateVal=val;
//         }
//     }
// })()

// console.log(ans.setter(24));
// console.log(ans.getter());

//Local scope and global scope

// var a=2; // global scope
// function abcd(){
//     var a= 2; //local scope
// }

//call apply bind => you have a function and object and you run the function and 'this' value will chnage window obj to trigger 
//an other obj use this call apply bind

// function abcd(val, val1, val2){
//     console.log(this, val, val1, val2);
// }

// var obj = {name:"Avinash"}
// //abcd.call(obj); // this is call
// //abcd.call(obj, 1, 2, 3);
// //abcd.apply(obj, [1,2,3]); // this is apply

// var bindedfunc = abcd.bind(obj, 1 ,3, 5); // this is bind basily this use for eventListner in javascript
// bindedfunc();

//Basically change this value window obj to difine value so use call/apply/bind and bind mostly use in reactJS

//pure and impure function

//same value and same return pure function and same value but return defrant value it's call impure function

function abcd(a){ // this impure function
    return Math.random() * a;
}

var x = abcd(2);
var b = abcd(2);
console.log(x);
console.log(b);

function xyz(a,b){
    return a*b;
}

var z = xyz(2,3);
var r = xyz(2,3);
console.log(z);
console.log(r);

