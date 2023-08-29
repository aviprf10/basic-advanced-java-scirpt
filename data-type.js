//var a = "Hello World"; //string
//var a = 1234; //num
//var a=12.343; //number
//var a = true; //boolean
//var a = "true"; //string
//var a = ["firstname","test", "lastname","Demo"]; //object
//var a = {"fname":"test", "lname":"demo"}; // object
//var a = undefined; //undefined
//var a = null; //null
var a = Symbol("hello"); // using unique value and symbol not using in array or for/foreach loop and console normal so symbol valur printed but if using json symbol value not printed
var b = Symbol("hello"); // getting false
//console.log(a.description);
console.log(a.toString());