var a = 10; //global variable

function abc(){
    var b=5; // local variable

    console.log(a);
    console.log(b);
}

abc();
console.log(a);