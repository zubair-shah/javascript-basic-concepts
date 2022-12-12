// ===================learning-objects=============
//  var plan1 = {
//      name: "Basic",
//      price: 3.99,
//      space: 100,
//      transfer: 1000,
//      pages: 10,
//      discountMonths: [6, 7]
//      };

// function calcannual(){
//     var discPrice = plan1.price
//     var date = new Date();
//     var thisMonth = date.getMonth()

//     for (let i = 0; i < discountMonths.length; i++) {
//       if (plan1.discountMonths[i] === thisMonth) {
//           discPrice = plan1.price * .8
//           break;
//       }
        
//     }
//     return discPrice * 12
// }    

// var annualPrice = calcannual()
// console.log(annualPrice)



// // ==================objects-method=============
// var plan1 = {
//     name: "Basic",
//     price: 3.99,
//     space: 100,
//     transfer: 1000,
//     pages: 10,
//     discountMonths: [6, 7],
//     calcannual: function (){
//         var discPrice = this.price
//         var date = new Date();
//         var thisMonth = date.getMonth()
     
//         for (let i = 0; i < discountMonths.length; i++) {
//           if (this.discountMonths[i] === thisMonth) {
//               discPrice = this.price * .8
//               break;
//           }
            
//         }
//         return discPrice * 12
//      }    
//     };


//     //This is how you'd call the method.
// var annualPrice = plan1.calcannual(.85)
// console.log(annualPrice)
    
// ================object-constructor==================


function Plan(name,price,page,space,transfer){
    this.name = name;
    this.page= page;
    this.price=price;
    this.transfer = transfer;
    this.space = space;

}

var plan1 = new Plan("Basic" , 3.99 , 10 , 100, 1000 )
var plan2 = new Plan("standard" , 5.99, 500, 5000, 50 )
var plan3 = new Plan("Professional" , 9.99, 2000, 20000, 500 )


console.log(plan1)
console.log(plan2)
console.log(plan3)

// ===================Constructors for methods====================