//Using for num value and calculate for esy way
var a=99;
//1. Number(): used for  convert to number data type and check true/false then function return 1/0
//var a=true/false; //this srting value return 1/0
//var a="99 88";
//console.log(Number(a));

//2. parseInt(): used for consvert a number check true/false then function return NaN and return without dacimal value and not return string value
//var a="99 88";
//var a="9.999";
//var a=true/false;;
//var a="9 Hello";
//console.log(parseInt(a));

//3. parseFloat(): used same work parseInt it's diffrnt only return dacimal value
//var a="99 88";
//var a="9.999";
//var a=true/false;;
//var a="9 Hello";
//console.log(parseFloat(a));

//4. isFinite(): used for check value is finite then return true and return false
// var a = -1 + "hi";
//console.log(isFinite(a));

//5. isInteger(): used for check a value is int or not and return true/false
//var a = 1;
// var a = "99";
// var a = -99;
// var a = 1.5;
// console.log(Number.isInteger(a));

//6. toFixed(): used for print a dacimal after doted value difined a diplay value count and add 000 auto num. convert tot dacimal value
// var a = 4.5678;
// console.log(a.toFixed(3));

//7. toPrecision(): used for dacimal value digit but after doted value greter then 5 then consider 6 and less then 5 consider 4 retunr value
var a = 45.456;
console.log(a.toPrecision(4))
