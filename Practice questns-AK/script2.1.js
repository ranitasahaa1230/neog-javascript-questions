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
// console.log(arrp.reduce(myReducerp,1))

const arr9 = [
	{
		name: "Jay",
		age: 60
	},
	{
		name: "Gloria",
		age: 36
	},
	{
		name: "Manny",
		age: 16
	},
	{
		name: "Joe",
		age: 9
	}
]
const myname=((acc,name)=> (acc+name.age))
// console.log(arr9.reduce(myname,0))

const arrn = ["You", "all", "are", "rockstars"];
const myKeys=(arrn)=>arrn.reduce((acc,value,idx)=>({...arrn,[idx]:value}),{})
// console.log(myKeys(arrn))
const myKeys1=((acc,value,idx)=>({...acc,[idx]:value}))
// console.log(arrn.reduce(myKeys1,{}))
const a1=(arrnn)=>({...arrnn})
  // console.log(a1(arrn))


const arrObj = [
	{
		name: "Apple"
	},
	{
		name: "Mango"
	},
	{
		name: "Potato"
	},
	{
		name: "Guava"
	},
	{
		name: "Capsicum"
	}
]
const arrObj2=((acc)=> (acc.name.length > 5 ? {...acc,type:"vegetable"} : {...acc,type:"fruit"}))
const arrObj3=((acc,cval)=> (cval.name.length > 5 ? [...acc,{...cval,type:"vegetable"}] : [...acc,{...cval,type:"fruit"}]))
// console.log(arrObj.map(arrObj2,[]))
// console.log(arrObj.reduce(arrObj3,[]))

const inventory = [
  {name: 'fans', quantity: 3},
  {name: 'chimneys', quantity: 0},
  {name: 'bulbs', quantity: 5},
  {name: 'stove', quantity: 1}    
];

// console.log(inventory.reduce(myKeyy,{}))

const arrj = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"]
// console.log(arrj.join("-"))

const inputt=224345687;
const insertHyphenBetweenNumsWithReduce = numAsString => numAsString.split('').reduce((acc, currentNum) => )

console.log(insertHyphenBetweenNumsWithReduce('' + inputt))

const caps=["neogrammer", "neoG"]
// console.log(caps[1].toUpperCase())

const Vowels="neoG";
// const convetToUpperLowerCase=str=>str.split('').map((char)=>char==="a" || char==="e" || char==="i" || char==="o" || char==="u" ? char.toUpperCase() : 
// char.toLowerCase()).join("")
const convetToUpperLowerCase=string=>string.split('').map((str)=>str.includes("a") || str.includes("e") || str.includes("i") || str.includes("o") || str.includes("u") ? str.toUpperCase() :  
str.toLowerCase()).join("")
// console.log(convetToUpperLowerCase(Vowels))

const str = "Violet"
// console.log(str.split("").join("-"))

const input = [
  ['a', 'b', 'c'],
  ['c', 'd', 'e'],
  ['e', 'd', 'f'],
];
const flat=numArray=>numArray.reduce((acc,cval)=>[...acc,...cval],[])
// console.log(flat(input))

const input2 = [
  ['a', 'b', 'c'],
  ['c', 'd', 'e'],
  ['e', 'd', 'f'],
];
const getNumOccurences=(inpu)=>flat2(inpu).reduce((acc,cval)=>({...acc, [cval]:cval in acc ? acc[cval]+1 : 1}),{})
const flat2=numArray=>numArray.reduce((acc,cval)=>[...acc,...cval],[])
//[
//   'a', 'b', 'c',
//   'c', 'd', 'e',
//   'e', 'd', 'f'
// ]
// console.log(getNumOccurences(input))

