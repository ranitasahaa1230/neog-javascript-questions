//ak func, tanay func, react prac=>4
//auth dsh +rec,//2
//async defer,polyill,//2
//bind call apply

//map
const num = [1, 2, 3, 4];
// const multThree=num.map((nums, i ,arr)=>nums*3)
// console.log(multThree);

//Polyfill
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    //this refers to parent arr//num
    temp.push(cb(this[i], i, this));///curr el,index,arr
  }
  return temp;
};
const multThree = num.myMap((nums, i, arr) => nums * 3);
// console.log(multThree);

//filter
// const filterThree=num.filter((nums)=>nums>2)
// console.log(filterThree)

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]); //this[i] is the curr element, this is the curr arr=>num here
  }
  return temp;
};
const filterThree = num.myFilter((nums) => nums > 2);
// console.log(filterThree)

//reduce
// const reduceThree=num.reduce((acc,cval)=>acc+cval,0)
// console.log(reduceThree)

Array.prototype.myReduce = function (cb, initialValue) {
  //cb take 4 things
  let acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i]; //if anything inside acc then, if not we will assign it
    //if initialvvalue not given then firstelement as initial value nd curr value
    //is the 2nd elemnt
  }
  return acc;
};
const reduceThree = num.myReduce((acc, cval) => acc + cval, 0);
// console.log(reduceThree)

//map vs foreach
const numss = [1, 5, 78, 2];
const numMap = numss.map((num) => {
  return num + 3;
});
// console.log(numMap)

// const numFor=numss.forEach((num)=>{//1 foreach wont return anything
//     return num+3
// })
// console.log(numFor)
const numFor = numss.forEach((num, i) => {
  numss[i] = num + 3;
});
// console.log(numss)//works only on modified arr
// console.log(numFor, numss)
//no chaining

//output questn
let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Ankush", rollNumber: 15, marks: 69 },
  { name: "Priyash", rollNumber: 16, marks: 35 },
  { name: "Amab", rollNumber: 7, marks: 55 },
];

const capitalStudents = students.map((num) => num.name.toUpperCase());
// console.log(capitalStudents)

let names = [];
for (let i = 0; i < students.length; i++) {
  names.push(students[i].name.toUpperCase());
}
// console.log(names)
// -----------------------------------
const filteredMoreThan60 = students.filter((num) => num.marks > 60);
// console.log(filteredMoreThan60)

//more than 60 marks and roll number greater than 15
const filteredRoll = students.filter(
  (num) => num.marks > 60 && num.rollNumber > 15
);
// console.log(filteredRoll)

//sum of marks
const reduceSum = students.reduce((acc, cval) => acc + cval.marks, 0);
// console.log(reduceSum)

//return only names who scored more than 60
const st = students.filter((num) => num.marks > 60).map((num) => num.name);
// console.log(st)

const totalMarks = students
  .map((num) => (num.marks < 60 ? { ...num, marks: num.marks + 20 } : num))
  .filter((num) => num.marks > 60)
  .reduce((acc, curr) => acc + curr.marks, 0);
// const reduceSumm=mapStudents.reduce((acc,cval)=>acc+cval.marks,0)
// const sums=reduceSumm.reduce((acc,cval)=>(cval.marks>60 ?(acc+cval.marks) : acc),0)
// console.log(totalMarks);

// let output =students.reduce((acc,curr,i,arr)=>{

//     if(curr.marks<60){
//     curr.marks+=20;
//     }
//     // console.log(newMarks)
//     if(curr.marks>60 ){
//      acc=acc+curr.marks
//     }
//     return acc;
// },0)
// console.log(output);
