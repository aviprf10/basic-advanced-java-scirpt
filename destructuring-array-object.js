//customize array 
//old method
//  let user = ["Avinash Tiwari", 23];
//  console.log(user[0]);
//  console.log(user[1]);

// new method
// let user = ["Avinash Tiwari", 20,"Mumbai", ["male", 23333]];
//  //let [name, city, age, [gender, salary]] = user
//  let [name, ...args] = user
//  console.log(name);
//  console.log(args);
//  console.log(city);
//  console.log(age);
//  console.log(gender);
//  console.log(salary);


//OBJECT

let user = {
    name:"Avinash Tiwari",
    age:25
}

let{name, age}=user
console.log(name)
console.log(age)