// 1. var aloo = 1;
// if (aloo == 1) {
//    var a = 2;
//    console.log(a);
// }
// console.log(aloo);

//ES6
// const aloo=1;
// if(aloo){
//     const a=2;
//     console.log(a);
// }
// console.log(aloo);
// ------------------------------------------------------------------

// 2. var multiply = function(x, y) {
//     return x * y;
//   };
// console.log(multiply(2,3))

//ES6
// const multiply=(x,y)=>x*y;
// console.log(multiply(2,3))
// ----------------------------------------------------------------------

// var customer = {
//     name: "Bhaalo"
//   };
//   var card = {
//     amount: 20,
//     product: "Aaalo",
//     unitprice: 50
//   };
//   var message = "Hello " + customer.name + " wants to buy " + card.amount +" " + card.product + " for price of " + card.unitprice + " per piece"
//   console.log(message)

  //ES6
//   const customer = {
//     name: "Bhaalo"
//   };
//   const card = {
//     amount: 20,
//     product: "Aaalo",
//     unitprice: 50
//   };
//   const message=`Hello ${customer.name} wants to buy ${card.amount} ${card.product} for price of ${card.unitprice} per piece`;
//   console.log(message)
// -----------------------------------------------------------------------------------------------------------------------------

// var Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"],
// CEO = Neog[0],
// Mentor = Neog[2];

//ES6
// const [CEO,Mentor] = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"];
// ----------------------------------------------------------------------------------------------------------

// var arr = ["MA", "TA", "PA", "CA"];
// var firstName = arr[0];
// var surname = arr[1];
// console.log(firstName);
// console.log(surname);

//ES6
// const [firstName, surname] = ["MA", "TA", "PA", "CA"];
// console.log(`${firstName}`);
// console.log(surname);
// --------------------------------------------------------------------------------------------

// var Aaloo = "Tasty";
// var Bhaloo = "Cute";
// var Obj = {
//   Aaloo: Aaloo,
//   Bhaloo: Bhaloo
// };

//ES6
// const Aaloo = "Tasty";
// const Bhaloo = "Cute";
// const Obj = {
//   Aaloo,  //shorthand prop
//   Bhaloo
// };
// console.log(Obj)
// ------------------------------------------------------------------

// var a = 5;
// var b = 10;
// console.log("Fifteen is ".concat(a + b, " and n0t ").concat(2 * a + b, "."));

//ES6
// const a = 5;
// const b = 10;
// console.log(`Fifteen is ${a + b} and not ${2*a+b}.`);
// --------------------------------------------------------------------------

// var arithmeticsObj = {
//     sum: function sum(num1, num2) {
//       return num1 + num2;
//     },
//     multiply: function multiply(num1, num2) {
//       return num1 * num2;
//     }
//   };

//ES6 
// const arithmeticsObj={
//     sum:(n1,n2)=>n1+n2,
//     multiply:(n1,n2)=>n1*n2
//   }
//   console.log(arithmeticsObj.sum(2,3))
//   console.log(arithmeticsObj.multiply(2,3))
//   -----------------------------------------------------------------------------------

// var avengers = {
//     operation: "Assemble",
//     members: [
//       {
//         ironMan: "Tony Stark"
//       },
//       {
//         captainAmerica: "Steve Rogers"
//       },
//       {
//         blackWidow: "Natasha Romanoff"
//       }
//     ]
//   };
//   var operation = avengers.operation,
//     members = avengers.members;

//ES6
// const avengers = {
//     operation: "Assemble",
//     members: [
//       {
//         ironMan: "Tony Stark"
//       },
//       {
//         captainAmerica: "Steve Rogers"
//       },
//       {
//         blackWidow: "Natasha Romanoff"
//       }
//     ]
//   };
//   const [operation,members] = avengers;
//   ---------------------------------------------------------------------------------------------

// const packIt = (...args) => console.log(args)
// packIt(1,2,3,5,5)

//ES5
// function packIt(args){
//     console.log(args)
// }
// packIt(1,2,3,5,5)
// ----------------------------------------------------------------------

//output
// const hello = () => "Hello"
// const welcome = () => "Welcome"
// const [Hello = hello(), Welcome = welcome()] = ["Namaste"];
// console.log(Hello, Welcome) //Namaste Welcome
// ---------------------------------------------------------------------------

//output
const obj = {
    aloo : 1,
    bhallo : 2
}

const {c : aloo = [2,3,4].push(5), aloo} = obj 

console.log(aloo) //err
//error on line 15 because when we extract c from obj it was renamed as aloo 
// and has default value of 4 ([2,3,4].push(5) returns the updated length of the array) 
// And redeclaring a const variable again will cause an error.


