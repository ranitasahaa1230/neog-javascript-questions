// const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];
// const modifiedArr=arr.map(num=>num%2===0 ? num+1 : num);
// console.log(modifiedArr);
//map returns a new array always

const arr = [
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
// Your output should be: 121 /*** 60+36+16+9 ***/

// const sumOfAge=arr.reduce((acc,cval)=>acc+cval.age,0)
// const sumOfAge=arr.reduce((acc,cval)=>{
//     return acc=acc+cval.age;
// },0)

// console.log(sumOfAge)

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
  ];
  
  
//   Your output should be: ['Tanay', 'Tanvi']
//   const familyCycle=family.filter(num=>{
//       if(num.haveCycle)
//       return num.name;
//   })
// console.log(familyCycle);
const familyCycle=family.reduce((acc,cval)=>{
    if(cval.haveCycle){
        return cval.name
    }
})
console.log(familyCycle);







// family.reduce((acc, member) => member.haveCycle ? [...acc, member.name] : acc, [])

// const newFam = family.filter(obj => obj.haveCycle === true).map(el => el.name)
// Filter + map => reduce
// for false condition it should return something


// family.reduce((acc,member) => member.haveCycle ? acc.push(member.name) : acc,[])

// && operator returns 1st or 2nd operand depending on 1st operand true or false

// const arr = ["You", "all", "are", "rockstars"];

// Your output should be:
// {'0': "You", '1': "all", '2': "are", '3': "rockstars"}
arr.reduce((acc,curr,index) => {
    acc[index] = curr
    return acc
},{})//Dynamic key=>[]

// {...arr}

const arr4 = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"]


// Your output should be: 
// Violet-Indigo-Blue-Green-Yellow-Orange-Red

// console.log(arr4.join("-"))
// console.log(arr4.join(''))
const arr5="violet";
// console.log(arr5.split('').join('-'))
// console.log([...arr5].join("-"))

const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'e'],
    ['e', 'd', 'f'],
  ];
//   Your output should be: ['a', 'b', 'c', 'c', 'd', 'e', 'e', 'd', 'f']
// no input.flat()
const reduceM=input.reduce((acc,cval)=>([...arr,...cval]),0)
console.log(reduceM)

//reduce imp
//map,filter,reduce,spread
//split,join,flat









