const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];
const arr2=arr.map((num)=>num%2===0 ? num+1 : num)
// console.log(arr2)

const arr1 = [
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
const arr3=arr1.reduce((acc,cval)=>cval.age+acc,0)
// console.log(arr3)
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
  const arr4=family.reduce((acc,cval)=>(cval.haveCycle ? [...acc,cval.name] : [...acc]), [])
//   console.log(arr4)

const arr5 = ["You", "all", "are", "rockstars"];
const arr7=arr5.reduce((acc,cval,currentIndex)=>({...acc,[currentIndex]:cval}),{})
// console.log(arr7)

const arr8='ranita';
// console.log([...arr8].join('-'))
// console.log(arr8.split('').join('-'))

const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'e'],
    ['e', 'd', 'f'],
  ];
const input1=input.reduce((acc,cval)=>[...acc,...cval],[])
const inp2=input.flat()
// console.log(inp2);
