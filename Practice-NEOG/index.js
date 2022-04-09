const arrOfNumbers = [3, 6, 10, 8, 2, 5, 13, 15]
const arr=arrOfNumbers.filter((num)=>num<=8)
// console.log(arr)

const arrOfWords = ["neoG", "is", "family", "love", "hackathon", "camping"]
const arr1=arrOfWords.filter((word)=>word.length<=5)
// console.log(arr1);

const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        eye_color: 'orange',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        eye_color: 'blue',
        gender: 'male',
    },
];

const arr2=characters.reduce((acc,cval)=>(cval.gender === 'male' ? ([...acc,{...cval}]) : acc),[])
// console.log(arr2)

const arr3=characters.filter((char)=>char.height>170)
// console.log(arr3)

const arr4=characters.filter((char)=>char.height>180).map((names)=>names.name)
// console.log(arr4)

const characters2 = [
    {
    name: 'Luke Skywalker',
    height: 172,
    mass: 77,
    eye_color: 'blue',
    gender: 'male',
    },
    {
    name: 'Darth Vader',
    height: 202,
    mass: 136,
    eye_color: 'yellow',
    gender: 'male',
    },
    {
    name: 'Leia Organa',
    height: 150,
    mass: 49,
    eye_color: 'brown',
    gender: 'female',
    },
    {
    name: 'Anakin Skywalker',
    height: 188,
    mass: 84,
    eye_color: 'blue',
    gender: 'male',
    },
    ];
    const char=characters2.every((ch)=>ch.height<=200)
    console.log(char) //false

    const char2=characters2.some((ch)=>ch.eye_color==='blue')
    // console.log(char2) //true

    const char3=characters2.find((ch)=>ch.eye_color==='blue')
    // console.log(char3)
