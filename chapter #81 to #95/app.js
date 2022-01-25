// // // =================&&-operator-with-different-values-======

// var a1 = "cat" && "Dog";      // true && true returns "Dog"
// var a2 = false && "Cat";      //false && true  returns false
// var a3 = "Cat" && false;      //t     && f     returns  false
// var a4 = ' '   && false;     // f     && f  returns       " "
// var a5 = false && ' ';       //f       && f retunrs false
// var a6 = 0     && 1;        // f      &&   t   returns   0
// var a7 = 1     &&  false;   // t && f returns false
// var a8 = true  && {};       // t && f returns false
// var a9 = false && {};       // f  && t return fasle
// var a10 = "Cat"&& (3==4);   //t  && f return false
// var a11 = "Cat"&& 0;        //t  && false return 0
// var a12 = undefined && 'Cat'; // f && t return undefined

// alert(a1);
// alert(a2);
// alert(a3);
// alert(a4);
// alert(a5);
// alert(a6);
// alert(a7);
// alert(a8);
// alert(a9);
// alert(a10);
// alert(a11);
// alert(a12);

// =================||-operator-with-different-values-======

// var a1 = "cat" || "Dog";      // true && true returns "Cat"
// var a2 = false || "Cat";      //false && true  returns "Cat"
// var a3 = "Cat" || false;      //t     && f     returns  "Cat"
// var a4 = ' '   || false;     // f     && f  returns      false
// var a5 = false || ' ';       //f       && f retunrs false
// var a6 = 0     || 1;        // f      &&   t   returns   1
// var a7 = 1     ||  false;   // t && f returns 1
// var a8 = true  || {};       // t && t returns true
// var a9 = false || {};       // f  && t return {}
// var a10 = "Cat"|| (3==4);   //t  && f return "Cat"
// var a11 = "Cat" || 0;        //t  && false return "cat"
// var a12 = undefined || 'Cat'; // f && t returns "Cat"

// alert(a1);
// alert(a2);
// alert(a3);
// alert(a4);
// alert(a5);
// alert(a6);
// alert(a7);
// alert(a8);
// alert(a9);
// alert(a10);
// alert(a11);
// alert(a12);

// =================For-loop-=================================================

/*for(var i = 0 ; i <= 5; i++){        //first value is initialization and 2nd value is condition and third value is increment or decrement
console.log(i);
}*/
// for(var j= 10 ; j>0 ; j--){
// console.log(j);
// }

//  for( ; ; ){                         //infinite loop
//      document.write(i);

//  }
// =========table-making========
// var num =parseInt(+prompt("enter your number and see its table"));

// for(var i=1; i<=10; i++){
// console.log(num  +  " x "  + i + " = " +(num*i )+ "\n" )
// }

// =============================break==========================

// console.log("code before loop");

// for(var z = 3; z<=10; z++){
//     if(z == 7){
//         break;                                 //break ka keyword jahan laga hota he wahan code ko break karwa deta he or age barhne nhi deta
//     }
//     console.log("Z = "+z);
// }

// console.log("code after loop");

// =============================continue==========================
// console.log("code before loop");

// for(var z = 3; z<=10; z++){
//     if(z == 7){
//         continue;                                 //continue ka keyword jahan laga hota he sirf os condition per code ko break karega or oske baad wale code ko run karwaega
//     }
//     console.log("Z = "+z);
// }

// console.log("code after loop");

// // =======================task-for-finding-prime-number================================

// var num = parseInt(+prompt("Enter your number and find that it is a prime number ?"));

// for (var i = 2; i <= 10; i++) {
//   var result = num % i;
//   document.write("the remainder is " + result);
//   if (result == 0) {
//     document.write(" so this number is not a prime number = " + num);
//     break;
//   }
// }
