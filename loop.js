//While Loop

var a= 1;

// while(a <= 10){
//     console.log( a+ ' Hello');
//     a=a+1;
// }

// while(a >= 1){
//     console.log( a+ ' Hello');
//     a=a-1;
// }

// do{
//     console.log(a + " Hello");
//     a++
// }while(a <= 10)

// for(let i = 0; i < 10; i++){
//     if(i == 2){
//         console.log(i + " This is for loop using continue");
//         continue; //using for skip run for next i value
//     }
//     console.log(i + " This is for loop");
// }

//Find Even & Odd numbers

// for (let i = 1; i < 10; i++) {
//    if(i % 2 == 0){ // find even num
//     console.log(i + " This is even number");
//    }

//    if(i % 2 != 0){ //find odd num
//     console.log(i + " This is odd number");
//    }
    
// }

//Nested Loop

// for(var a = 1; a <= 100; a=a+10){ // Using multiple loop inside in one loop
//     for(var b=a; b < a+10; b++){
//         console.log(b);
//     }
//     console.log('<br>');
// }

for(var i=1; i<5; i++){
    for(var j=1; j < 5; j++){
        console.log(j + " ");
    }
    console.log('<br>');
}