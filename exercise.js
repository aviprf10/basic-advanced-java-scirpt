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

//3. How to check value is array or object in javaScript

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
// function strAlphabaticOrder(str){
//     return str.split("").sort();
// } 
// console.log(strAlphabaticOrder("apple"));
// console.log(strAlphabaticOrder("Avinash"));

//10. Write a javascript function that accept a string as a perameter and convert to first letter in each word of the srting in upper case
// function strUppercase(str){
//     var allstr = str.split(" ").map(function(word){
//         return word.charAt(0).toUpperCase() + word.substring(1);
//     })
//     return allstr.join(" ");
// }

// console.log(strUppercase("hello world and hi avinash tiwari"))

//11. Write a javascript function to get the number of occurrences of each letter in spicfied  string ? 
// function occurrences(str){
//     var occurrences = {};
//     str.split("").forEach(function(elm){
//         if(occurrences.hasOwnProperty(elm) === false){
//             occurrences[elm] = 1;
//         }else{
//             occurrences[elm]++;
//         }
       
//     })
//     return occurrences;
// }

// console.log(occurrences('helloo world'));

//12. How to array sum without defult function ?
// var arr = [1,2,44,56,6,7,8];

// var sum = 0;

// for(var i = 0; i < arr.length; i++){ // using for loop
//     sum = sum + arr[i];
// }
// console.log(sum);
 
// arr.forEach(function(elm){ // using foreach loop
//     return sum = sum + elm;

// })
// console.log(sum);

//13. how to in array of number and string, only add those members which are not string ?
// var arr=['hiii', 1, 4, 5, 'Hello world', 'hahs'];
// var sum=0;
// arr.forEach(function(elm){
//     if(typeof elm === 'number'){
//         sum = sum+elm;
//     }
// })

// console.log(sum);

//14. How to loop an array of objects and remove all objects which don't have gender value male
// var arr=[
//     { name:"Harsh", gender:"Male"},
//     { name:"Harshta", gender:"female"},
//     { name:"Avi", gender:"Male"},
//     { name:"raje", gender:"Male"},
//     { name:"asha", gender:"female"},
//     { name:"rohni", gender:"Male"}
// ]
// var nearr = arr.filter(function(elem){ //get record this logic male
//     return elem.gender === 'Male';
// })
// console.log(nearr);

// var count=0;
// var srf = arr.forEach(function(elem){ //get count this logic male
//     if(elem.gender === 'Male') return count++;
// })
// console.log(count);

// for(var j = 0; j < arr.length; j++){
//     if(arr[j] !== 'Male'){
//         arr.splice(j, 1);
//     }
// }

// console.log(arr);

//15. Write a javascript function how to clone a array ?
// function cloneArr(arr){
//     //return [... arr]; //sprid opertor
//     // var newArr = [];
//     // arr.forEach(function(elm){ //foreach used and push value new arr varible
//     //     newArr.push(elm);
//     // });
//     // return newArr;
//    return arr.map(function(e){ //map used and return element
//         return e;
//     })
// }

// var a = [1,2,3,4,5,6,7];
// console.log(cloneArr(a));

//16. Write a javascript function which accepts an argument and return the type 
//Note: there are six possible value that typeof return : obj, boolen, function, number, string and undefine
// function typeTeller(elem){
//     return typeof elem;
// }
// var a = [1,2,3,'r','t'];
// var b = {name:"Avinash"};
// var c = "hello";
// var d = 1231;
// var e = true;
// var f = function(){

// }
// var g = undefined;
// console.log(typeTeller(a));
// console.log(typeTeller(b));
// console.log(typeTeller(c));
// console.log(typeTeller(d));
// console.log(typeTeller(e));
// console.log(typeTeller(f));
// console.log(typeTeller(g));

//17. Write a javascript function get the first element of an array. Passing a perameter 'n' will return first 'n' elements of the array
// function recvedArr(arr, n=1){
//     if(n <= arr.length){
//         for(var i = 0; i < n; i++){
//             console.log(arr[i]);
//         }
//     }else{
//         console.log("No elements");
//     }
// }

// recvedArr([1,2,3,5,6,7,8],5);

//18. Write a javascript function get the last element of an array. Passing a perameter 'n' will return last 'n' elements of the array
// function recvedArr(arr, n=1){
//     if(n <= arr.length){
//         for(var i = 0; i < n; i++){
//             console.log(arr[arr.length - 1 - i]);
//         }
//     }else{
//         console.log("No elements");
//     }
// }

// recvedArr([1,2,3,5,6,7,8],3); // print last 3 value

//19. Write a javascript program to find most frequant item of an array ("sabse jayad baar value ya most frequant value")
// function freq(arr){
//     var freq = {};
//     arr.forEach(function(elem){
//         if(freq.hasOwnProperty(elem)) freq[elem]++;
//         else freq[elem]=1;
//     })
//     var ans = Object.keys(freq).reduce(function(acc, num){
//         return freq[acc] > freq[num] ? acc:num;
//     })
//     console.log(ans);
// }

// freq([1,2,3,4,5,2,3,4,5,6,2,7,5,3,2]);

//20. Write a javascript program to suffel an array "value randm ho jaye"
// function suffelArr(arr){
//     var totalSuffelArea = arr.length;
//     while(totalSuffelArea > 0){
//         totalSuffelArea--;
//         var indexTobechaged = Math.floor(Math.random() * totalSuffelArea);
//         var temp = arr[totalSuffelArea];
//         arr[totalSuffelArea] = arr[indexTobechaged];
//         arr[indexTobechaged] = temp;
//     }

//     return arr;
// }

// console.log(suffelArr([1,2,3,4,5,6,7,33,543,666]));

//21. Write a javascript program to compute to union of two arrays
//sample data:
// consle.log(union([1,2,3], [100, 54, 67]));
//Ans:=[1,2,3,100,54,67];
function union(arr1, arr2){
    // return arr1.concat(arr2);
    return [...new Set(arr1.concat(arr2))];
}
console.log(union([1,2,3,4,66,11], [1,2,33,55,66,11]));
