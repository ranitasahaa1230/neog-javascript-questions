// Write a program to input 2 numbers and display the sum of the numbers to the console.
const a1=20;
const b="40";
// const sum=(a1)+Number(b);
// console.log(`Sum is ${sum}`)

// Write a JavaScript program to calculate the simple interest given P,R,T with the given formula. 
// Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest
const P=100;
const R=0.06;
const T=2;
const SI = (P * T * R) / 100;
// console.log(`SI is ${SI}`)

// Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.
const m=10, v=12;
const KE=0.5 * m * v * v;
// console.log(`KE is ${KE}`)

// Write a program to convert Fahrenheit to Celsius. For Fahrenheit to Celsius conversion use: C = (F - 32) * 5/9 'F' and 'C' 
// are the temperatures on the Fahrenheit scale and Celsius scale respectively.
const F=56;
const C = (F - 32) * 5/9 
// console.log(C)

// Calculate the area, perimeter of a square of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.
const a=4;
const area=a*a;
const perimt=4*a;
const SurfaceArea= 6*a*a;
const volume=a*a*a;
// console.log(area, perimt, SurfaceArea, volume)

// Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.
// const CP = 1500, SP = 2000;
const CP = 3125, SP = 1125;
// if(SP>CP){
//     console.log(`Profit is ${SP-CP}`)
// }else{
//     console.log(`Loss is ${CP-SP}`)

// }

// Write a program to calculate sum of N natural digits, as input by the users?
let n=100;
let sum=0;
for(let i=1;i<=n;i++){
     sum=sum+i
}
// console.log(sum)

// Write a Program to Print N Odd Number in Descending Order.
// const n1=7; 
// for(let i=n1;i>=0;i--){
//     if(i%2!==0){
//         const desc=i;
//         console.log(desc)
//     }
// }



