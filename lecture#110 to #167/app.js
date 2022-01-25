// =======================Array-with-loop============
// let foods = ["Orange","apple","Mango"];

// for (let i = 0; i < foods.length; i++) {    //we can access array item with loop 
//     console.log(foods[i]);
    
// }
//  let foods = [12,45,66,77];

//  for (let i = 0; i < foods.length; i++) { 
//      console.log(foods[i]);
    
// }

    // let foods = [12,45,66,77];

    // for (let i = 0; i < foods.length; i++) { 
    //    foods[i]= foods[i] * 2;
    
    // }
    // for (let j = 0; j < foods.length; j++) {
    //     console.log(foods[j])
        
    // }


// let foods = [];

// for (let i = 0; i <7; i++) { 
//    foods[i]= i * 2;
//    console.log(foods)
   
// }
// for (let j = 0; j < foods.length; j++) {
//     console.log(foods[j])
    
// }

// ========================search-task-array-===========================

// var array = [33,55,664,34,567,998,34,65,78,665,23,45,67,87,56,45];
// var input = parseInt(prompt("Enter your number and find it "));
// var found = false;
// for (var i = 0; i < array.length; i++) {
//     if (array[i] ===input) {
//         console.log("found your input " + input + " and index " + i + " are matched");
//         found = true;
//         break;
//     }

    
// }
// if (!found) {
//     console.log("Not Found");
// }



// ================Array-splice-method===============

// var array = ['pizza','burger','banana'];

// array.splice(0  ,0,'makkhan','roti');    //array.splice se ham kisi bhi index per element add karwa skte hen or delet bhi karskte he
//                                          // braket me pehli value ka matlab os index per add karwana he or dosri value ka matlab os index ke age se jitna delet karna he 
// console.log(array);

// var array1 = ['pizza','burger','banana'];
// console.log(array1);
// array1.splice(1,2,"makhni")
// console.log(array1);

// ================Array-slice-method===============

// agar hame array se kisi index ko pik karna he to ham slice ka method use karenge
// var foods = ["pizza","burger","snaks","apple","mango","banana"]
// console.log(foods);
// var arr = foods.slice(2,4);   //it pick from snaks to the apple and assign it in arr variable and there is no effect on orignal array
// console.log(arr);
// console.log(foods);


// =====================Other-functions-for-array=================
// filter();
// indexOf();
// find();
// lastIndexOf();
// map();
// reverse();
// sort();
// and others

// ==============string================

// var a = '';   //empty string

// //for chacking index of charecters use .length

// var b = "john";
// console.log(b.length);

// ==============escape-charecters===============

// var a = "Hello \"world\" ";
// var b = "Hello\nworld";
// var c = "Hello\tworld";

// console.log(a);
// console.log(b);
// console.log(c);

// ==================toLowerCase====toUpperCase=============

// var food = "Pizza";
// var input = prompt("enter your food");

// if (food.toLowerCase() === input.toLowerCase()) {
//     console.log("Matched")
// }
// else {
//   console.log("Not Matched")
// }

// =====================slice-with-string===================
// var a = "Hello world";
// console.log(a.slice(2,7));
// console.log(a.slice(-7,-2));

// ====================IndexOf-and-lastIndexOf==============
// var a = "To be or not to be";

// console.log("Length ="+a.length);   

// var b = a.indexOf("be");   //indexOf se ham charecter ka index maloom karte he shuru se
// console.log(b)

// var b = a.indexOf("be",10); //yahan per ye 10 wen index ke bad se charecter find karna shuru karega
// console.log(b)

// var b = a.lastIndexOf("be"); //lastIndexOf se ham charecter ka index maloom karte he akhir se
// console.log(b)

// var b = a.lastIndexOf("be",10); //yahan per ye index counting last se start hogi or 10 wen index ke bad se charecter find karna shuru karega
// console.log(b)

// ==========================charAt====================
// ye function string me mojood charecter ko return karta he 
//  var str = "to be or not to be";
//  console.log(str.charAt(4));   // return = e

//  =====================replace===============
// ye function string me mojood value ko replace kar ke duplicate bana kar return karta he yani orignal
// string wese hi rahega or os ka 1 new copy hojaega

// var str = "To be or not to be";
// var b = str.replace(/to/ig,"hello"); //yahan i ka matlab ke word capital ho ya small ho sb ko uthao or g 
//   console.log(b);
//   console.log(str);                  //G ka matlab poore string me jahan jahan ye word he sb ko uthao


// =====================split-function========================
// split ka function string me mojood charecters ko array me convert kardeta he respect to the passing of arguments in curley braces
var a = "to be or not to be";
var b = a.split(" ");
console.log(b);

// functions of String;

// charCodeaAt();        match()              substr()
// concat();             repeat()             trim()
// endswith();           search()             starswith()
// includes()            substring()          replace()
function sizeIncreas(){
    document.getElementById('button').style.display="inline-block";
    document.getElementById('demo').style.cssText= "color:pink;font-size:50px";
}
function decrease(){
    document.getElementById('button').style.display="none";
    document.getElementById('demo').style.cssText="font-size:10px;color:black;margin-top:200px";
}


// =====================Math-function========================
// functions of String;

// Math.round();  ye function numbers ko round karne ke lia kam ata he   
// var average = (15 + 23 + 39) / 3; //25.666
// var roundAverage = Math.round(average) ; // 26 
// console.log(average);
// console.log(roundAverage);

// Math.ceil();  ye function numbers ko nearest intiger tk round of  karne ke lia kam ata he  agar 4.1 hoga to ose 5 kardega 
// yani hamesha upper side me round of karega

// var average = (15 + 23 + 39) / 3; //25.666
// var roundAverage = Math.ceil(average) ; // 26 
// console.log(average);
// console.log(roundAverage);

// Math.floor();  ye function numbers ko nearest heighest intiger tk round of karne ke lia kam ata he  agar 4.4 hoga to ose 4 kardega 
// yani hamesha lower side me round of karega
// var average = (15 + 23 + 39) / 3; //25.666
// var roundAverage = Math.floor(average) ; // 25 
// console.log(average);
// console.log(roundAverage);

// =====================Math.random function========================

// ye function ham os time use karte hen jb hame koi is type ki game banani hoti he jis me user koi number select karega or wo randomly uth kar aega

// var num = Math.random();
// var num1 = (num * 10 ) + 1;
// var dice = Math.floor(num1);
// console.log(dice);
//  var a = Math.sin(90)
//  console.log(a)
// ============================different-function-of-math-==============================
// Math.pow();            Math.tan()
// Math.sqrt();           Math.sign()
// Math.min();            Math.abs();
// Math.sin();             Math.log();

// ======================toFixed function ============

// var average = (15 + 23 + 39) / 3;
// var avg = average.toFixed(3);
// console.log(avg);


// =====================Date-Object-=====================
// var date = new Date();
// console.log(date);
//.set attribute se ham date ko apne mutabiq set karwa sakte he 
// var newDate = date.setFullYear(2021);
// console.log(newDate);
//.get  se ham date me se kuch bhi get karwa sakte he

// agar ham charahe hen ke day jo he wo numeric me na ae balke likha wa ae to oske liye app days ka array bana len or phr array se get karwa len

// var date1 = new Date("january 25 2021 09:01:33");
// var date2 = new Date("june 09 2021 02:03:33");
// console.log(date1);
// console.log(date2);

    // var daysDiff = date2 - date1;
    // console.log(daysDiff);

// var timeInday = 24 * 60 * 60 * 1000 ;
// console.log(timeInday);

// var remainDay = "Remaining Days " + daysDiff / timeInday;
// console.log(remainDay);

// =======================functions-=======================
//ye 1 block of code hote he jahan ham apna code likh kar rakh dete hen or ose bar bar use karakte hen

// function math(a , b){  //jb ham function declare karte hen to round bracket me jo ham lihkte he ose parameter kehte hen

//     console.log(a + b);
// }

// math(12 , 15); //or jb ham os function ko call karwate he or input pas karte hen to ise ham arguments kehte hen

// math(12 , 28);
// math(12 , 14);
// math(12);

// 

// =======================local vs global variable ==============

// body ke andar jitna variable banalen wo global hota he ose ham kahi se bhi access karsakte hen 
// or agar function ke andar hoga to wo golbal nhi hoga balke ose sirf function ke andar hi access kiya 
// jasakta he 

// function ke andar bhi agar variable var ke keyword ke baghair banaya jae to ye bhi global variable 
// hoga 
// var a;
//  a = 7;
//    function sum(){
//          b = 7 ;
//          a = b + 1;

//    }
//    console.log("A before = " +a)
//    console.log("B before = " +a)
//    sum();
// console.log("A after = "+a)
// console.log("B = "+b)

// ========================function-expression================

// var square =  function square(num){return num*num};
// var b = square(4);
// console.log(b);


// ==============function-hoisting--===============
// is ka matlab ye he ke jo bhi variable declare hoa hoga runtime ke waqt javascript 
// ka engine sare declaration ko top per le aega yahi waja he ke ham normal ko function ko pehle call karsakte he bad me bna skte He



















