const input = ["apple", "orange", "mango", "papaya", "lemon","lmn"];
const reduceFun=(acc,s)=>(s.length in acc ? ({...acc,[s.length]:acc[s.length]+1}) : ({...acc,[s.length]:1}))
//name obj in acc

// console.log(input.reduce(reduceFun,{}))
//acc is empty obj
//first checks if my string length is there or not, then updatees the prev value and add+1
//if not initialise to 1

// const filterVowels= (str)=>str.includes("a") || str.includes("e") || str.includes("i") || str.includes("o") || str.includes("u")
// var re = /[aeiou]/gi;
// const filterVowels=(str)=>re.test(str)
const getVowelStrings = str => str.match(/[aeiou]/gi);
// console.log(input.filter(filterVowels,[]))
// console.log(input.filter(getVowelStrings,[]))

const myFunc=(items,value)=> ([...items,{[value]:value.length}])//[value] as dynamic key
// console.log(input.reduce(myFunc,[]))

const increment=num=>num+1;
const square=num=>num*num;
const mult=num=>num*4;
const myReducer=(acc,value)=>value(acc)
const compF=(...rest)=>(num)=>rest.reduce(myReducer,num)//rest is an arr, so we vil use reduce
const incrementSquare=compF(increment,square,mult)
console.log(incrementSquare(2))


