// 1.Given an array, your function should return the length of the array.
// Example:
// Input: arrayLength([1,5,3,7,8]) ––> Output: 5

// const arrayLength=arr=>arr.length;
// console.log(arrayLength([1,5,3,7,8]))
// ------------------------------------------------------------------------------------

// 2.Given an array and an item, your function should return the index at which the item is present.
// Example:
// Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2

// const indexOf=(arr,k)=>arr.indexOf(k)
// console.log(indexOf([1,6,3,5,8,9], 3))
//--------------------------------------------------------------------------------------

//3. Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
// Example:
// Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]

// const replace=(arr,i,k)=>{
//     const replaceArr=arr.map(item=>{
//         if(item===i){
//             return k;
//         }else
//         {
//             return item;
//         }
//     });
//     return replaceArr
// }
// console.log(replace([1,5,3,5,6,8], 5, 10))
// ------------------------------------------------------------------------------------------------------

//4. Given two arrays, your function should return single merged array.
// Example:
// Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]

// const mergedArr=(arr1,arr2)=>[...arr1,...arr2];
// console.log(mergedArr([1,3,5], [2,4,6]));
// //---------------------------------------------------------------------------------------------

// 5. Given a string and an index, your function should return the character present at that index in the string.
// Example:
// Input: charAt("neoGcamp", 4) ––> Output: c

const charAt=(str,i)=>
console.log(charAt("neoGcamp", 4))

// 6. Given two dates, your function should return which one comes before the other.
// Example:
// Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021