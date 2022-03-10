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
// console.log(incrementSquare(2))

const numbers = [18, 24, 1, 56, 74, 89, 37, 22];
const myReduce=num=>num.reduce((acc,cval)=> (cval%2 !==0 ? acc+cval : acc),0)
// console.log(myReduce(numbers))

const myReducers=num=>num.reduce((acc,cval,idx)=>( idx%2 !==0 ? acc+cval : acc ),0)
// console.log(myReducers(numbers))
// const sumNumbersAtOddIndices = numbers => numbers.filter((num,index) => index % 2 !== 0).reduce((accumulator, currentValue) =>
//  accumulator + currentValue);
//             const numbers = [18, 24, 1, 56, 74, 89, 37, 22];
//             console.log(sumNumbersAtOddIndices(numbers));


const myReducee=num=>num.reduce((acc,cval)=>(cval > acc ? cval : acc),0)
// console.log(myReducee(numbers))

const numbers2 = [10, 24, 1, 56, 70, 85, 37, 20];
const myReducee10=num=>num.filter((acc)=> acc%10===0)
// console.log(myReducee10(numbers2))

const myReduceeIn=num=>num.map((acc)=>( acc%2===0 ? acc-1:acc+1))
// console.log(myReduceeIn(numbers2))

const myReduceeInSum=num=>num.reduce((acc,cval)=>cval%2===0 ? ({...acc,even:acc.even+cval}) : ({...acc,odd:acc.odd+cval}),{even:0,odd:0})
// console.log(myReduceeInSum(numbers2))

const myReduceeInSum2=(acc,cval)=>cval%2===0 ? {...acc,even:acc.even+cval} : {...acc,odd:acc.odd+cval}
// console.log(numbers2.reduce(myReduceeInSum2,{even:0,odd:0}))

// Return object with sum of odd and even numbers separately
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const myReduceeInObjm=(num)=>num.reduce((acc,cval)=> (cval.length in acc ? ({...acc,[cval.length]:acc[cval.length]+1}) : ({...acc,[cval.length]:1})),{})
// console.log(myReduceeInObjm(words))


// const numLengthArray = words.reduce((accumulator, currentValue) => accumulator[currentValue.length] ? {...accumulator, [currentValue.length] : accumulator[currentValue.length]+1} :  {...accumulator, [currentValue.length]: 1 }, {});
//             console.log(numLengthArray);


const wordsWithVowel = words.filter(word => word.includes('a') || word.includes('e') || word.includes('i') || word.includes('o') || word.includes('u'))
            // console.log(wordsWithVowel);

            const filterFunction = word => word.includes('a') || word.includes('e') || word.includes('i') || word.includes('o') || word.includes('u');
            const filterWordsWithVowel = words => words.filter(filterFunction);
            // console.log(filterWordsWithVowel(words));

const numLengthArr=num=>num.map((acc)=>({key:acc, value:acc.length}))
// console.log(numLengthArr(words));

// Write your own reduce using for loop
const arr=[18, 24, 1, 56, 74, 89, 37, 22]
const arrreduce=num=>num.reduce((acc,cval)=>acc+cval)
// console.log(arrreduce(arr,0))

const reduceUsingFor=arr1=>{
    let acc=0;
    for(let b of arr1){
        acc+=b;
    }
    return acc;
}
console.log(reduceUsingFor([18, 24, 1, 56, 74, 89, 37, 22]));

// const reduceUsingFor = array => {
//     let accumulator = 0;
//     for(let a of array) {
//         accumulator += a;
//     }
//     return accumulator;
// } 
// console.log(reduceUsingFor([18, 24, 1, 56, 74, 89, 37, 22]));