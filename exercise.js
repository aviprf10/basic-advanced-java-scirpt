//1. How to reverse String in javascript ?

// var str = "Avinash Tiwari"; // this is string

// var saveStr = str.split(" ").map(function(word){ //split str to array and map return a new array
//    return word.split("").reverse().join(""); // word got new array and split convert nothing and reverse convert a reverse array and join array convert to reverse word
   
// })
// console.log(saveStr.join(" ")); // saveStr return array and join array conver to str


//2.  How to reverse Array in javascript ?
// var arr = [1, 4, 5, 6, 7, 8];
// var saveArr = arr.reverse()
// console.log(saveArr);

//2. How to check value is array or object in javaScript

// function checkArray(elm){
//     return Array.isArray(elm);
// }

// console.log(checkArray([]));
// console.log(checkArray({}));

// console.log(checkArray([1,2,3]));
// console.log(checkArray({name:"Avinash"}));

//4. How to empty an array in javascript? | do not use reset an array or new array | do loop through to pop each value
// var arr = [1,2,3,4,5,6,7];
// arr.length=0; //array is empty
// console.log(arr);

//5. How would you check if number is a integer ?  | if not use any function
// var a=23;
// //console.log(Number.isInteger(a)); //checking by function
// if(a % 1 === 0){
//     console.log("integer");
// }else{
//     console.log("Not integer");
// }

//6. How to make duplicate array ?
// var arr = [1,2,3,4,5,6]; //exmp[1,2,3,4,5,1,2,3,4,5]

// function duplicateArr(a){
//     return a.concat(a);
// }
// var b = duplicateArr(arr);
// console.log(b);

//7. Write a javascript function reverse a number ? | without using function
// function reverseNum(num){
//     //return num.toString().split("").reverse().join(""); // this is return string  if you check so + 4 then return 124
//     return Number(num.toString().split("").reverse().join("")); // this is return num  if you check so + 4 then return 25
// }
// console.log(reverseNum(12));

// function reverseNum(num){ // without using any function reverse num
//     var rev=0;
//     while(num > 0){
//         var rem = num%10;
//         rev = rev*10+rem;
//         num = Math.floor(num/10);
        
//     }
//     return rev;
// }
// console.log(reverseNum(12345))

//8. Write a javascript function that check whether a passed string is palindrome or not
// function stringPalchecker(str){
//     var s = str.split("").reverse().join("");
//     return s ===str;
// }

// console.log(stringPalchecker("lool"));
// console.log(stringPalchecker("loop"));

//9. Write a javascript function that return a passed string with letters in alphabetical order ? 
 




