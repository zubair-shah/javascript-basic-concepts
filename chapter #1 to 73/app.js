//variables

// var age = 45;
// var nationality = "pakistani";
// var feepaid = true;

// alert(age);
// console.log(feepaid);
// console.log(nationality);

// // // after changing age variable
// age = 4000;
// console.log(age);


// Data types
// variables for numbers
// var age = 45;
// age = 44;
// var c = 10;
// var d = c + age;
// alert(d);

// // variables for string
// var nationality = "yes it's pakistani";
// alert(nationality);

// // variables for boolean
//     var feepaid = true; 
//     alert(feepaid);
    
// // variables for undefined
// var a ;
// // undefined
// console.log(a);

// var name = 'zubair';
// name = undefined;
// console.log(name) ;

// // variables for null
// // null means nothing

// var name = null;

// var nationality = "mark";
// nationality = null;
// console.log(nationality);

// differnece between null and undefined;

// undefine ka matlab ase variables jo intetelize to hogaen hen but on ke pas 
// koi value nhi he javascript khud ose undefine dedega or null  ka matlab jo value assign ki gai he wo null he yani nothing khali 

// ham apne data types ko kabhi bhi change karsakte hen 

// typeof operator hame data type check karne ke lia dia gya he 

// var age = 45;
// var nationality = "pakistani";
// var feepaid = true;

//  console.log(typeof age);
// console.log(typeof feepaid);
// console.log(typeof nationality);

// computer programme list of instruction kehlati hen or sirf 1 instruction statements kehlati hen 
  

// var age = 45;  statement 1
// var nationality = "pakistani"; statement 2
// var feepaid = true; statement 3;


// javascript me ham 2 tarah se apne staement ko seperate karsakte ; laga kar or line change karke bhi he or 


// Expression 

// a + b;
// 4 / 2;
// var a = 3 ;
// a * 5;

// allowed and ligel names
// var age = 50 ;
// var agr2 = 50 ;
// var $age = 50 ;
//  var _age = 50;
//  var firstname = 50;
//  var FirstName = 50;
//  var my$wor_ld  = 50;
//  console.log(_age)
//  console.log($age)
//  console.log(firstname)
//  console.log(my$wor_ld)

// reserved keywords of javascript
// we can not use these words in our statments because these words are the part of javascript language

// arithemetic operator
//  var a , b;
//  a=2;b=3;
//  var c = a+b;
//  console.log(c);
//  var c = a-b;
//  console.log(c);
//  var c = a*b;
//  console.log(c);
//  var c = a/b ;
//  console.log(c);
//  var c = a%b;
//  console.log(c);
//  var c = a**b;
//  console.log(c);

// assignment operators

// a += 5 barabar he a = a + 5 ke

// javascript follows BODMAS rule for mathematical expression 

// urinery operator
// ++ --

// var a = 4 ;
// var b = a++;  is ka matlb a me 1 add kardo lekin b me a ki purani value he rahegi
// var c = ++a;  or is me pehle +1 hoga or phr dono ko new value assign hogi joke 5 hogi


// string concatination

// var a = "6" + 2; //62
// var b = 3 + "6";  //36
// var c = "Hello" + 2; //Hello 2
// var d = 2 + "Hello"; //2 Hello
// var e = " Hello " + 3 + 4; //  Hello 34
// var f = 3 + 4 + "Hello"; //7 Hello
// var g = "Hello" + (3 + 4); //hello 7
// alert(a);
// alert(b);
// alert(c);
// alert(d);
// alert(e);
// alert(f);
// alert(g);
 
//  prompt

// promp me hm jo bhi lete he wo string ke tor pe ata he 

// var name1 = prompt("what is your name ?")
// console.log(name1);

// agar user ne input nhi diya to wo value null hogi

// agar hame apne user se input me number lena hoto to parseint me lenge wo string ko number me convert kardega
// or agar user se decimal me number lena ho to parseFloat use karenge ye decimal ko number me convert kardega or ham number bhi use karsakte hen

//  var age = prompt("what is your age"); //5

// var num = 5;
// var sum = parseInt(age) + num;
// console.log(sum)  // 10
// var sum1 = Number(age) + num;
// console.log(sum1);

// comparision operator 
// == or === equality chak karta he lekin === datatype bhi chack karta he or ye hi recomended he 

// var a = 3;
// console.log(a == "3")  //return true
// console.log( a === "3" ) //return false because 3 is string


// javasscript logical operators
// and operators && , or operaotr || 
//  && operator ye check karta he ke sari value true hen ya nhi  agar nhi to end result false aega 

// var a = 60;
// var b = a > 50 && a < 70;
// alert(b);                           // return true

// var c = 60;
// var d = c > 50 && c < 60;                  
// alert(d);                         // return false

// || operator ye check karta he ke condition me koi 1 bhi agar true ho to end result true hota he or sare false hon to end reslt false hota he

// var e = 60;
// var f = e > 50 || e < 70;
// alert(f);                           // return true

// var g = 20;
// var h = g > 50 || g < 10;         //false         
// alert(h);  

// not operator !
// var a = 60;
// var b = !(a < 50);
// alert(b);       //return true



// var c =   80;
// var d = !(c > 50 );
//  alert(d);    //return false

//  var a = 60 ;
//  var b = a < 100;
//  var c = !b;
//  var d = !(a <  100);

//  var e = !true;

//  console.log("A = "+a);
//  console.log("B = "+b);
//  console.log("C = "+c);
//  console.log("D = "+d);
//  console.log("E = "+e);


// && and || ko shortcerkit bhi kehte hen is lia ke agar && ke case me result false mil gya to wo age nhi jata Balke wahi par end result false show 
// kardeta he isi tarha || ke case me he 



// var a = +prompt("Enter a number ");
// if (a >= 2000 && a <= 3200 ){
// var b = (a*5) % 7 ;
// if ( b > 0  ){
//   alert("not multiple")
//   document.write(b)

// }
// else{
//   alert("multiple")
//   document.write(b)
// }     
// }











