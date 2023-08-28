//---------------------------------promise---------------------------------------
// let complete = false; //first test case

// let prom = new Promise( function (res, rej){
//     if(complete){
//         res("Hi i am resolve");
//     }else{
//         rej("Hi i am reject");
//     }
// })

//console.log(prom(true));

// function prom(complete){ //second test case .then/.catch function
//     return new Promise( function (res, rej){
//             if(complete){
//                 res("Hi i am resolve");
//             }else{
//                 rej("Hi i am reject");
//             }
//         })
// }

// let onfulfit = (result) => {
//     console.log(result);
// }

// let rejfulfit = (error) => {
//     console.log(error);
// }

// prom(true).then(onfulfit);
// prom(false).catch(rejfulfit);

// function prom(complete){ //third test case using setTimeout
//     return new Promise( function (res, rej){
//     console.log("Fetching Data Please wait");
//         setTimeout(() => {
//             if(complete){
//                 res("Hi i am resolve");
//             }else{
//                 rej("Hi i am reject");
//             }
//         }, 2000)
//     })
// }

// let onfulfit = (result) => {
//     console.log(result);
// }

// let rejfulfit = (error) => {
//     console.log(error);
// }

// prom(true).then(onfulfit);
// prom(false).catch(rejfulfit);
// prom(true).then((result) => {
//     console.log(result);
// }).catch((error) => {
//         console.log(error);
//     });

// function prom(a,b){ //forth test case using setTimeout calculation and assign var
//     return new Promise( function (res, rej){
//     console.log("Fetching Data Please wait");
//     var c = a/b;
//         setTimeout(() => {
//             if(a,b){
//                 res(`Hi i am resolve ${c}`);
//             }else{
//                 rej("Hi i am reject");
//             }
//         }, 2000)
//     })
// }

// prom(5,2).then((result) => {
//     console.log(result);
// }).catch((error) => {
//         console.log(error);
// });


// function prom(){ //fifth test case ajax call
//     return new Promise( function (res, rej){
//     console.log("Fetching Data Please wait");
//         setTimeout(() => {
//            $.get("https://jsonplaceholder.typicode.com/posts", (data) =>{
//             console.log(data);
//            })
//         }, 2000)
//     })
// }

// prom().then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });        


//----------------------------------Promise All-----------------------------
let p1 = new Promise((resolve, reject) => {
    //if(complete){
        resolve("Hi i am resolve");
    // }else{
    //     reject("Hi i am reject");
    // }
});

let p2 = new Promise((resolve, reject) => {
    //if(complete){
        resolve("Hi i am p2 resolve");
    // }else{
    //     reject("Hi i am p2 reject");
    // }
});

Promise.all([p1.p2]).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});

