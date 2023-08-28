//customize assign function parms REST OPERATOR
// function sum(name, ...arg){
//     console.log(`Hello ${name} : `);
//     let sum =0;
//     for(let i in arg){
//         sum +=arg[i];
//     }

//     // console.log(name);
//     console.log(sum);
// }
// sum('Avinash Tiwari', 10, 20,40, 60)
// sum('Raj Tiwari', 10, 20)

//SPREAD OPERATOR
// function sum(name, ...arg){
//     console.log(`Hello ${name} : `);
//     let sum =0;
//     for(let i in arg){
//         sum +=arg[i];
//     }

//     // console.log(name);
//     console.log(sum);
// }
// var arr=[10, 20,40, 60]
// var arry=[10, 20]
// sum('Avinash Tiwari', ...arr)
// sum('Raj Tiwari', ...arry)

// var obj1={
//     name:"Avinash Tiwari",
//     age:23,
//     email:"avinash@gmail.com"
// };

// var obj2={
//     city:"Mumbai",
//     country:"india"
// };

// var final = {...obj1, ...obj2};
// console.log(final);

//Object Literals multiple type define obj and custumization also list of exmplae
//1.
// var obj={
//     name:"Avinash"
// }
// console.log(obj);

//2.

// let n = "name";
// let obj={
//     [n]:"Avinash",
//     course:"Java Script"
// }
// console.log(obj);


// let n = "stu";
// let obj={
//     [n + "name"]:"Avinash",
//     course:"Java Script",
//     details:function(){
//         return `Hello ${this.stuname} and your course ${this.course}`
//     }
// }
// console.log(obj);
// console.log(obj.details());

let n = "stu";
let obj={
    [n + "name"]:"Avinash",
    course:"Java Script",
    // details(){
    //     return `Hello ${this.stuname} and your course ${this.course}`
    // },
    'detail show'(){
        return `Hello ${this.stuname} and your course ${this.course}`
    }
}
console.log(obj);
// console.log(obj['details']());
console.log(obj['detail show']());
