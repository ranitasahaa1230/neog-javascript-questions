1.  Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
    Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
    Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.
    ```
    const encodeString = (s, num) => {
    let charcode = 0;
    let result = "";
    for (let i = 0; i < s.length; i++) {
      charcode = s[i].charCodeAt() + num;
      result += String.fromCharCode(charcode);
    }
    return result;
    };
    console.log(encodeString("neogcampy", 2));
    ```
-------------------------------------------------------------------------------------------------------------

2. Given a sentence, return a sentence with first letter of all words as capital.
   Example:
   Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers

   ````
   const toSentenceCase = (str) => str.split(" ").map((item) => item[0].toUpperCase() + item.slice(1)).join(' ');
   console.log(toSentenceCase("we are neoGrammers"));
    ```
- Another Approach
     ```
  `const toSentenceCase = sentence => { const words = sentence.split(' '); return words .map(word => { return word[0].toUpperCase() + word.slice(1); }) .join(' '); }; 
  console.log(toSentenceCase('we are neoGrammers')); 
    ```
----------------------------------------------------------------------------------------------------------------
3. Given an array of numbers, your function should return an array in the ascending order.
     Example:
     Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]
     ```
     const sortArray=(arr)=>console.log(arr.sort((a,b)=>a-b))
     console.log(sortArray([100,83,32,9,45,61]))
    ```
----------------------------------------------------------------------------------------------------------------

4.  Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
     Example:
     Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen
```
const reversseCharactersOfWord=(str)=>str.split(" ").map((item)=>item.split("").reverse().join('')).join(' ');
console.log(reversseCharactersOfWord("we are neoGrammers"));

const reverseCharactersOfWord = str => {
const words = str.split(' ');
return words
.map(word => {
return word.split('').reverse().join('');
})
.join(' ');
};
console.log(reverseCharactersOfWord("we are neoGrammers"));
```
----------------------------------------------------------------------------------------------------------------
