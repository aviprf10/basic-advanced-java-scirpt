
//Class, Object, Method(function), Properties(VAR, LET, CONST)
// class hello{
//     message(){
//         console.log("Hi Avinash");
//     }

//     sum(s){
//         console.log("Hi Avinash sum " + s);
//     }
// }
// let a = new hello();
// console.log(a.message());
// console.log(a.sum("a s d d"));

// class student{
//     constructor(name){
//         this.sname = name;
//         console.log("Hi i am a constructor function");
//     }

//     studentdetails(){
//         console.log("Hi i am a sudent details function");
//     }

//     hello(){
//         console.log("Hi i am a " + this.sname);
//     }

//     static namee(){ 
//         console.log("i am static function");

//     }
// }

// let a = new student("Avinash Tiwari")
// console.log(a.studentdetails());
// //a.name = "Avinash Tiwari";
// a.hello()
// student.namee(); //called direct not used any obj

//INHERITANCE

class employee{
    constructor(name){
        this.empname = name;
        console.log("i am employee onstractor function");
    }

    info(){
        console.log("i am info employee " + this.empname);
    }


}

class mangaers extends employee{
    
    info(){
        super.info()
        console.log("i am info manager " + this.empname);
    }

}

let a = new mangaers("Avi");
a.info()
//console.log(a);