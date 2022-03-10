const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];
const arr2=arr.map((num)=>num%2 ===0 ? (num+1) : num)
// console.log(arr2)
const family = [
    {
      name    : 'Tanay',
      haveCycle : true
    },
    {
      name     : 'Akanksha',
      haveCycle : false
    },
    {
      name     : 'Tanvi',
      haveCycle : true
    },
      {
      name     : 'Kanak',
      haveCycle : false
    }
  ]
const myReduce=(acc,cval)=> (cval.haveCycle ? ([...acc,cval.name]) : ([...acc]))
// console.log(family.reduce(myReduce,[]))

const arr3 = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];
const arr5=arr3.filter((arr)=>arr<=8 && arr%2===0)
// console.log(arr5)

const arr6 = ["eat", "sleep", "repeat", "code"];
const arr7=arr6.filter((arr)=>arr.length>5)
// console.log(arr7)

const arr8 = [1, 2, 3, 58, 5, 6, 62, 8, 70];
const myReducer=((sum,value)=>value>50 ? (sum+value) : (sum))
// console.log(arr8.reduce(myReducer,0))

const arrp = [1, 2, 3, 7, 5, 6, 8, 9];
const myReducerp=((prod,value) =>value%2===0 ? (prod*value) : (prod))
console.log(arrp.reduce(myReducerp,0))

