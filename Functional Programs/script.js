const nini={mother:"Rita",age:30};
const rinti={...nini,age:nini.age-4};
// console.log(rinti);
// nini===rinti;//false

// const colors=["red","blue","orange","green","yellow"];
// const Coolors=[...colors,"brown","black"];
// console.log(Coolors);

// const myBirthday=(person)=>({...person,age:person.age+1});
// const rintiAfterAge=myBirthday(rinti);
// console.log(rintiAfterAge);

const nos=[1,7,8,10,45,99,70];
// const moreThanTen=(num)=>num>10;
// console.log(nos.filter(moreThanTen));

// const nosPlus=nos.map(num=>num+2);
// console.log(nosPlus);

const arr=[1,3,5,99,11,12];
// const sumLessTen=arr.reduce((acc,cval)=>{
//     cVal=acc+cval;
//     if(cval<10)
//         return cVal;
//     else
//         return acc;
// },0)
// console.log(sumLessTen);

const arr1=[1,3,5,2,22,11,9];
const oddSum=(sum,num)=>num%2===0 ? sum: sum+num;
// console.log(arr1.reduce(oddSum,0));

const reduceObj=(oddEvenObj,num)=>num%2===0 ? {...oddEvenObj,even:oddEvenObj.even+num} :{...oddEvenObj,odd:oddEvenObj.odd+num};
const oddEvenObj={even:0,odd:0}
// console.log(reduceObj(oddEvenObj,2))
// console.log(reduceObj(oddEvenObj,3))
console.log(arr1.reduce(reduceObj,oddEvenObj));