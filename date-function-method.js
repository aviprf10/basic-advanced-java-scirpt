//Using for date related query use this functions getting multiple value in date
var now = new Date();

//1. toDateString(): return only date with day
//console.log(now.toDateString());

//2. getDate(): return only date 
//console.log(now.getDate());

//3. getFullYear(): return only year
//console.log(now.getFullYear());

//4. getMonth(): return only month
//console.log(now.getMonth());

//5. getHours(): return only hour
//console.log(now.getHours());

//6. getMinuts(): return only minuts
//console.log(now.getMinutes());

//7. getSeconds(): return only seconds
//console.log(now.getSeconds());

//8. getMilliseconds(): return only mili seconds
//console.log(now.getMilliseconds());

//9. setDate(): used for set and change a date
// now.setDate('20');
// console.log(now)

//10. setFullYear(): used for set and change a  year
// now.setFullYear('2020');
// console.log(now)

//11. setMonth(): used for set and change a month
// now.setMonth(0);
// console.log(now)

//12. setHours(): used for set and change a hour
now.setHours(11);
console.log(now)