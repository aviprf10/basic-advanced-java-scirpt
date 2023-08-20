// var a={ // this static object
//     fName:"Ram",
//     lName:"Jai",
//     email:"ram@gmail.com",
//     age:10,
//     fevMovie:['Dhom', 'Hum', 'Marvel'],
//     salary:function(){
//         return 25000;
//     },
//     fullname:function(){ // this is object method/function
//         return this.fName +' '+ this.lName
//     },
//     location:{ // this is a object with priperties
//         city:"Mumbai",
//         state:"maha",
//         country:"India"
//     }

// }

// console.log(a);
// console.log(a['fName']);
// console.log(a.lName);
// console.log(a.fevMovie[1]);
// console.log(a.salary());
// console.log(a.fullname());
// console.log(a.location.country);

// var person = new Object();
// person.fName="Jai shree";
// person.lName="Ram";
// person.email="ram@gmail.com";

// console.log(person);
// console.log(person.fName);
// console.log(person['lName']);

//Array of object
// var student = []; // called array

// var student=[
//     {name:'Ram', age:20, email:'ram@gmail.com'},
//     {name:'syam', age:20, email:'syam@gmail.com'},
//     {name:'mohan', age:20, email:'mohan@gmail.com'},
//     {name:'rohan', age:20, email:'rohan@gmail.com'},
// ];

// for(var i = 0; i < student.length; i++){
//     console.log('Name '+ student[i].name + ' - Age '+ student[i].age+ ' - Email '+ student[i].email);
// }

//Const Variable with Array & Objects

// const a={ // const not allow to same varible name and override method
//     name:'ram',
//     age:10
// }

// // a={
// //     name:'syam',
// //     age:5
// // }
// //a['name'] = 'syam'; // const allow only over ride array index value
// a.name = 'syam'; // defrant type of over ride a value
// a.age=34; //
// const a=[10, 20, 30];
// a[0]=20;
// console.log(a)

var obj = {
    fName:"Techknow",
    Lname:"Digi",
    Age:30,
    email:'digi@gmail.com'
}

for(var key in obj){
    console.log(key + ' : ' +obj[key]);
}
