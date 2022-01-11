// 1.Given a and b, your function should return the value of a^b
// Input: power(2,3) ––> Output: 8
// const power=(a,b) => Math.pow(a,b);
// const res=(power(2,3));
// console.log(res);
// ------------------------------------------------------

// 2. Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80
// const areaOfHexagon = n => (3*Math.sqrt(3)*(n*n))/2;
// console.log(areaOfHexagon(10).toFixed(2));
// ---------------------------------------------------------------------

// 3. Given a sentence, your functions should return the number of words in the sentence.
// Example:
// Input: noOfWords(We are neoGrammers) ––> Output: 3

// const noOfWords=n=>{return n.match(/(\w+)/g).length}
// console.log(noOfWords("We are neoGrammers"));
// ------------------------------------------------------------------------------
// const noOfWords=n=>{return n.split(' ').length}; //take gap b/w ' '
// console.log(noOfWords("We are neoGrammers"));
// --------------------------------------------------------------

// 4. Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMin(3,5) ––> Output: 3
// Input: findMin(3,5,9,1) ––> Output: 1
// (Hint: Lookup rest parameters in JavaScript)

// const findMin=(arr,...args)=> Math.min(arr,...args);
// console.log(findMin(3,5));
// console.log(findMin(3,5,9,1)); //if params exceeds, then NAN will be output
// ---------------------------------------------------------------------------------------------

// 5. Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMax(3,5) ––> Output: 5
// Input: findMax(3,5,9,1) ––> Output: 9
// (Hint: Lookup rest parameters in JavaScript)

// const findMax=(arr,...args)=> Math.max(arr,...args);
// console.log(findMax(3,5));
// console.log(findMax(3,5,9,1));
// --------------------------------------------------------------------------

// 6. Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle

const typeOfTriangle = (x, y, z) => {
    const sum = x + y + z;
    if (sum === 180 && x > 0 && x > 0 && x > 0) {
      if (x === y && y === z && z === x) {
        console.log("Equilateral triangle");
      } else if (x === y || y === z || z === x) {
        console.log("Isosceles triangle");
      } else {
        console.log("Scalene triangle");
      }
    } else {
      console.log("Not a valid triangle");
    }
    return sum;
  };
  
  typeOfTriangle(40, 40, 100);
  
  // function typeOfTriangle(x,y,z){
  //     const sum=x+y+z;
  //     if(sum === 180 && x > 0 && x > 0 && x > 0){
  //         if(x===y && y===z && z===x){
  //             console.log("Equilateral triangle")
  //         }else if(x === y || y === z || z === x){
  //             console.log("Isosceles triangle")
  //         }else{
  //             console.log("Scalene triangle")
  //         }
  //     }
  //     else{
  //         console.log("Not a valid triangle");
  //     }
  // }
  
  // typeOfTriangle(30,60,90)
  