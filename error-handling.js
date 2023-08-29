//Error handling in JavaScript is the process of dealing with errors that occur during the execution of a JavaScript program. 
//Errors can be caused by a variety of factors, such as syntax errors, runtime errors, and logical errors.

// try {
//    var a= "Helloo";
//    console.log(a); 
//    dsfds;
//    console.log("Hello World")
// } catch (error) {
//     console.log("error ouccered");
//     console.log(error.name); //error type
//     console.log(error.message); //error real message
//     console.log(error.stack); //overall message
// }

try {
    //var a = "Hi; // syntex error missing "
    //let json ={"Name:"avinash", "email":"test@email.com"} //unexpected error
    console.log(json);
} catch (error) {
    if(error instanceof ReferenceError){
        console.log("Referance error");
    }else if(error instanceof TypeError){
        console.log("Type error");
    }else{
        console.log("unknow error");
    }
}

