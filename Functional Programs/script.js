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

const nosPlus=nos.map(num=>num+2);
console.log(nosPlus);

