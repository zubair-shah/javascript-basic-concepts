/////////////Length of array==///////////////

// var array1 = ["ayan","mujeeb","sadaqat","shahmeer","zubair"];
// console.log(array1.length);   // ye hame pori length return karta he lekin hamare length me index ki value 1 se shoro hoti he is lia wo hi hoga


////////push-function///////////

// var foods = [];
// foods.push("apple");
// foods.push("banana");
// foods.push("Mango","Orange")
// console.log(foods);

// var foods = [];
// foods.push(prompt("enter your first food"));
// foods.push(prompt("enter your second food"));
// foods.push(prompt("enter your third food"));
// console.log(foods);

// there are three ways for creating and managing data structures by array
// Random access (kahi bhi put karo or kahi se bhi delet karo)
// Stack (First In First out)
// Queue (first in first out)


// ===================Nested Loops=================

//ye bhi 1 loop he he jo dosre loop ke andar hota he

// console.log("Before Outer loop")
// for (var i =1; i<4 ; i++){

//     for(var j =1; j<3; j++){
//              console.log("I = " + i + " j =" + j)
//     }
// }

// console.log("after outer loop")

// ============stack=====
// push se ham array ke last me data add karsakte he or
// pop se ham array ke last se data delet karsakte hen
// var foods = [];
// foods.push(prompt("enter your first food"));
// foods.push(prompt("enter your second food"));
// foods.push(prompt("enter your third food"));
// console.log(foods);
// console.log(foods.length);
// foods.push("Mango");

// var a1 = foods.pop();
// console.log(foods);

// =================Queue===============
// yahan per bhi wesa hi hota he sirf farq itna ke data add or remove first se hoga
// 0 index se array ko remove karne ke lia shift ka istemal karte he 
// or add karne ke lia ham unshift use karte hen

// var foods = [];
// foods.push("first food");
// foods.push("second food");
// foods.push("third food");
// console.log(foods);
// foods.unshift("sandwich")
// console.log(foods);
// foods.shift();
// console.log(foods);
