//code and function run line by line call syn and same time multileple code and function run call asyn
//list of asyn and know this code syn or asyn
    //    setTimeout
    //    setInterval
    //    Promise
    //    axios
    //    XMLHttpRequest 
    //    fetch

//ASYN.JS:- same time run code or callback/function called it's asyn.js
//Event Loop:- Task completed in side stuck and side stuck task move to main stuck id called eventloop ("side stuck main jo task complete ho gaya hai event loop usse main stuck main lekar aata hai") 

// console.log('hi'); //syn code
// console.log('helloo');//syn code
// setTimeout(function(){ //Asyn code
//     console.log('lorem Ipsum');
// }, 0);
// console.log('Heloo World');//syn code

//sent request func async 
    // fetch
    // axios
    // Promise
    // setInterval
    // setTimeout

//get response
    // then catch
    // callbacks
    // async await    

//callback function run your code in particuller time after run the code get resonse called callback function 

//setTimeout(callbackfunction, settimemillisecond);
// setTimeout(function(){
//     console.log('Hii');
// }, 1000);

//Promise function used for reject and resolve get user promise if get resolveq useing .then function and if return rejcet call .catch function
// var ans = new Promise((res, rej)=>{
//     if(false){
//         return res();
//     }else{
//         return rej();
//     }
// })

// ans 
//     .then(function(){
//         console.log("it's right statment");
//     })
//     .catch(function(){
//         console.log("it's wrong statment");
//     })

// var ans = new Promise((res, rej)=>{
//     var n = Math.random()+10;
//     if(n > 5){
//         return res(n);
//     }else{
//         return rej(n);
//     }
// })

// ans 
//     .then(function(data){
//         console.log(data +" it's right statment");
//     })
//     .catch(function(data){
//         console.log(data + " it's wrong statment");
//     })

//async:- write a async code called async can do uses promises in async code. 
//if get ans. use then if then ingore so use aysnc await can do

// function abcd(){ // this isthen
//     fetch('https://randomuser.me/api/')
//     .then(function (row){
//         return row.json();
//     })
//     .then(function(data){
//         console.log(data);
//         console.log(data.results[0].email); // console the email id
//     })
// }

// abcd();

//if you add async code so you useing await. don't have any idea response when will come
async function abcd(){ // this isthen
   let row = await fetch('https://randomuser.me/api/');
   let data = await row.json();
    console.log(data.results[0].email);
    
}

abcd();
