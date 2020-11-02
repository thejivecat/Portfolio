---
title: JavaScript Toy Problems
date: "2020-10-27"
tags: [datastructures, algorithms, JavaScript]
description: Some algorithms and data structures I've worked on using JavaScript
---

<a href="https://github.com/thejivecat/Coderbyte-Challenges" target="_blank"><h2>Coderbyte Challenges</h2></a>

##Easy 

### AB Check
Have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false. 

<pre>
  <code>
  function ABCheck(str) { 
    for (let i = 0; i < str.length - 4; i++) {
      if (str[i] === 'a' && str[i+4] === 'b') {
        return true;
      }
      if (str[i] === 'b' && str[i+4] === 'a') {
        return true;
      }
    }
    return false;
}
  </code>
</pre>
### Additive Persistence
Have the function AdditivePersistence(num) take the num parameter being passed which will always be a positive integer and return its additive persistence which is the number of times you must add the digits in num until you reach a single digit. For example: if num is 2718 then your program should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.
<pre>
  <code>
  function AdditivePersistence(num) { 
    let count = 0;
    const recurse = (n) => {
      if (n < 10) {
        return count;
      }
      let newNum = n.toString().split('').map(el => Number(el)).reduce((acc, cur) => acc + cur);
      if (newNum < 10) {
        count++;
        return count;
      } else if (newNum >= 10) {
        count++;
        return recurse(newNum);
      }
    }
    return recurse(num);
}
  </code>
</pre>
### Arith Geo
Have the function ArithGeo(arr) take the array of numbers stored in arr and return the string 
"Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric 
pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the 
difference between each of the numbers is consistent, where as in a geometric sequence, each term after the 
first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: 
[2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered, and no array will 
contain all the same elements.
<pre>
  <code>
  function ArithGeo(arr) { 
    let difference = arr[1] - arr[0];
    let ratio = arr[1] / arr[0];
    let arith = true;
    let geometric = true;
    for (let i = 1; i < arr.length - 1; i++) {
      if (arr[i+1] - arr[i] !== difference) {
        arith = false;
      }
      if (arr[i+1] / arr[i] !== ratio) {
        geometric = false;
      }
    }
    if (arith) return "Arithmetic";
    if (geometric) return "Geometric";
    return -1;
}
  </code>
</pre>
### Palindrome
Have the function Palindrome(str) take the str parameter being passed and return the string true if 
the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the 
string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part 
of the string.
<pre>
  <code>
  function Palindrome(str) { 
    let copyStr = str.replace(/ /g,'');
    let revStr = copyStr.split('').reverse().join('');
    if (copyStr === revStr) {
      return true;
    }
    return false;
}
  </code>
</pre>
### Letter Count
Have the function LetterCountI(str) take the str parameter being 
passed and return the first word with the greatest number of 
repeated letters. For example: "Today, is the greatest day ever!" 
should return greatest because it has 2 e's (and 2 t's) and it comes 
before ever which also has 2 e's. If there are no words with 
repeating letters return -1. Words will be separated by spaces.
<pre>
  <code>
  function LetterCountI(str) { 
    //take each word
    //tally up repeating chars in each word
    //return word with most repeating chars
    let words = str.split(' ');
    let result = '';
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let wordSet = new Set(word);
      if (wordSet.size < word.length && word.length > result.length) {
        result = word;
      }
    }
    return result === '' ? -1 : result;
}
  </code>
</pre>
### Letter Changes
Have the function LetterChanges(str) take the str parameter being passed and modify it using the 
following algorithm. Replace every letter in the string with the letter following it in the alphabet 
(ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and 
finally return this modified string.
<pre>
  <code>
function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}
function LetterChanges(str) { 
  let shiftedString = '';
  for (let i = 0; i < str.length; i++) {
    let letter = str[i]
    if (letter === 'z') {
      shiftedString += 'a';
    } else if (letter === ' ') {
      shiftedString += ' ';
    } else if (isLetter(letter)) {
      let updatedCharCode = letter.charCodeAt(0) + 1;
      shiftedString += String.fromCharCode(updatedCharCode).toLowerCase();
    } else {
      shiftedString += letter;
    }
  }
  let result = '';
  for (let i = 0; i < shiftedString.length; i++) {
    if (shiftedString[i] === 'a' || shiftedString[i] === 'e' || shiftedString[i] === 'i' || shiftedString[i] === 'o' || shiftedString[i] === 'u') {
      result += shiftedString[i].toUpperCase();
    } else {
      result += shiftedString[i];
    }
  }
  return result; 
}
  </code>
</pre>
## Medium

### Longest Increasing Sequence
Have the function LongestIncreasingSequence(arr) take the array of positive integers stored in arr and return the length of the longest increasing subsequence (LIS). A LIS is a subset of the original list where the numbers are in sorted order, from lowest to highest, and are in increasing order. The sequence does not need to be contiguous or unique, and there can be several different subsequences. For example: if arr is [4, 3, 5, 1, 6] then a possible LIS is [3, 5, 6], and another is [1, 6]. For this input, your program should return 3 because that is the length of the longest increasing subsequence.
<pre>
  <code>
function LongestIncreasingSequence(arr) { 
  if (arr.length === 1) {
    return 1;
  }
  let sequences = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let sequence = [arr[i]];
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] > sequence[sequence.length-1]) {
        sequence.push(arr[j]);
      }
    }
    sequences.push(sequence);
  }
  console.log(sequences, 'sequences');
  let lengths = sequences.map(sequence => sequence.length);

  return Math.max(...lengths);
}
  </code>
</pre>
### Prime Time
Have the function PrimeTime(num) take the num parameter being passed and return the string true if 
the parameter is a prime number, otherwise return the string false. The range will be between 1 and 
2^16.
<pre>
  <code>
function PrimeTime(num) { 
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
  </code>
</pre>
### Run Length
Have the function RunLength(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols.
<pre>
  <code>
function RunLength(str) { 
    let strArr = str.split('');
    let tempArr = []; //keep track of counts as they are determined
    let count = 1;

    for (let i = 0; i < strArr.length; i++) {
      if (strArr[i] == strArr[i + 1]) {
        count++;
      } else {
        tempArr.push(count + strArr[i]);
        count = 1;
      }
    }
    return tempArr.join('');
}
  </code>
</pre>

<a href="https://github.com/thejivecat/Toy-Problems" target="_blank"><h2>Toy Problems Repository</h2></a>

<!-- 
<pre>
  <code>
  </code>
</pre>
<pre>
  <code>
  </code>
</pre>
<pre>
  <code>
  </code>
</pre>
<pre>
  <code>
  </code>
</pre>
<pre>
  <code>
  </code>
</pre>
<pre>
  <code>
  </code>
</pre>
<pre>
  <code>
  </code>
</pre>
<pre>
  <code>
  </code>
</pre>
<pre>
  <code>
  </code>
</pre>
<pre>
  <code>
  </code>
</pre>
<pre>
  <code>
  </code>
</pre>
<pre>
  <code>
  </code>
</pre>
<pre>
  <code>
  </code>
</pre>
<pre>
  <code>
  </code>
</pre>
<pre>
  <code>
  </code>
</pre>
<pre>
  <code>
  </code>
</pre>
<pre>
  <code>
  </code>
</pre>
<pre>
  <code>
  </code>
</pre>
<pre>
  <code>
  </code>
</pre>
<pre>
  <code>
  </code>
</pre>
<pre>
  <code>
  </code>
</pre> -->


