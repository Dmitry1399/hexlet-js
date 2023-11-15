import _ from 'lodash';

const getStringInObj = (str) => {
  const result = {};
   for (let word of str.toLowerCase()) {
     result[word] = (result[word] ?? 0) + 1;
     
   }
   return result;
 }
 
 
 const qwe = (str, word) => {
   const wordsOfStr = getStringInObj(str);
   console.log(wordsOfStr)
   const wordsOfWord = getStringInObj(word);
   console.log(wordsOfWord)
   
   const keys = Object.keys(wordsOfWord);
   console.log(keys) 
   
   for (const key of keys) {
    console.log( `${wordsOfStr[key]},,,,,,${wordsOfWord[key]}`);
    if (!Object.hasOwn(wordsOfStr, key) || wordsOfStr[key] < wordsOfWord[key]) {
      
      return false;
    }
   }
   return true;
 }

 //scrabble('scriptingjava', 'JavaScript'); // true
console.log(qwe('scriptingjava', 'JavaScript'))


