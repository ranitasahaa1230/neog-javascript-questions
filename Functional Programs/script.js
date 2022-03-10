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
// console.log(arr1.reduce(reduceObj,oddEvenObj));

const add=(n1)=>n2=>n1+n2;
// console.log(add(4,2));
const four=add(4,2);
// console.log(four);
// console.log(four(3))

const getYourName=name=>msg=>console.log(`Hi ${name}, send your ${msg}`);
// const ranitaLogger=getYourName("ranita");
// const log=ranitaLogger("good work");

const getName=msg=>`Ranita says ${msg}`;
const getID=msg=>`ID:243 :: ${msg}`;
const composeF=msg=>getID(getName(msg));
// console.log(getID("welcomee"));
// console.log(composeF("welcome"));


//we;come
//---------------------------------------------------------------------------------------------------
const ran={mother:"Rita",age:22}
const ninii={...ran,age:ran.age+8}
// console.log(ninii)

const colors=["red","blue","orange","green","yellow"];
// console.log([...colors,"ag","bl"])

const Birthday=person=>({...person,age:person.age+1})
// console.log(Birthday(ran))

const noss=[1,7,8,10,45,99,70];
const nosless10=num=>num<10
// console.log(nos.filter(nosless10))
// console.log(noss.map(item=>item+2))

const noss1=[1,7,8,10,45,99,70];
const nossmap=noss1.map(item=>({value:item}))
// console.log(nossmap)

const arr5=[1,3,5,2,22,11,9];
const sumReduce=(sum,num)=>num<10 ? (sum+num)  : (sum)
// console.log(arr5.reduce(sumReduce,0))

const oddNos=(sum,num)=>num%2!==0 ? (sum+num) : (sum)//acc,cval=>cval condn=>true sum;false acc
// console.log(arr5.reduce(oddNos,0))
// console.log(oddNos(2,4))

const oddR=(oddEvenObj2,num)=>num%2 ===0 ? ({...oddEvenObj2,even:oddEvenObj2.even+num}) :({...oddEvenObj2, odd:oddEvenObj2.odd+num})
// console.log(arr5.reduce(oddR,{even:0,odd:0}))

const giveYourName=(name)=>(msg)=>`Hi ${name}, your ${msg}`
const Tanaysays=giveYourName("tanay")
// console.log(Tanaysays("awesome"))

const compN=(msg)=>`hi ${msg} give me food`
const compId=(msg)=>`id is 12345 :: ${msg}`
const compF=(msg)=>compId(compN(msg))
// console.log(compF("awesome besttttttttt"))

