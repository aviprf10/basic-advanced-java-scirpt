var arr = [10,20,30,40,50]; // called to array
var starr = ['Lorem', 'Ipsum', 'Demo', 'john']; //called to string array
var anyrr = ['10','Lorem', 'Ipsum', 'Demo', 'john', null, true]; //called to string array
var arrmethod = new Array(); //called constrtor type
var a = [
    ['Lorem', 10, 'male', 'B.com'],
    ['Ipsum', 20, 'male', 'Bsc'],
    ['Hello', 30, 'female', 'btech'],
    ['Hii', 15, 'male', 'BE'],
    ['Welcome', 50, 'female', 'MCA']
];
//console.log(arr[2]); // print a particuller value

// for(var i = 0; i < arr.length; i++){ // print all array value
//     console.log(arr[i]);
// }

// var sum = 0;
// for(var i = 0; i < arr.length; i++){  // all value sum
//     sum = sum+arr[i]
   
// }
// console.log(sum);

// for(var i = 0; i < starr.length; i++){ // print all array value
//     console.log(starr[i]);
// }

// for(var i = 0; i < anyrr.length; i++){ // print all type array value
//     console.log(anyrr[i]);
// }

// arrmethod[0]=10;
// arrmethod[1]="Hello";
// arrmethod[2]="Lorem";
// arrmethod[3]=true;
// arrmethod[4]=null;

// for(var i = 0; i < 6; i++){ // i run 5 element but define 4 so last element print a undefined
//     console.log(arrmethod[i]);
// }

//console.log(a.length);
for(var i=0; i < a.length; i++)
{
    for(var j = 0; j < a[i].length; j++){
        console.log("Index" + j + "##");
        console.log(a[0][j] + " ");
    }
    console.log('<br>');
}