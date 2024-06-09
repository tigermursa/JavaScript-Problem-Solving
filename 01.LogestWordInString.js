//!=======================================================
//!     Problem : Find the Longest word in a String
//!=======================================================

//? Q: Write a function find Longest word that takes a string as input and returns the longest word in the string. If there are
//? multiple longest words, return the first one encountered.

//* Constraints:
//? The input string may contain alphabetic characters, digits, spaces, and punctuation.
//? The input string is non-empty.
//? The input string may contain multiple words separated by spaces.

//* Note:
//? If the input string is empty or contains only whitespace, the function should return an false.
//? The function should ignore leading and trailing whitespace when determining the longest word.

// Solve-1:

const findLongestWord = (str) => {
  //If the input string is empty or contains only whitespace, the function should return an false
  if (str.trim().length === 0) {
    return false;
  }
  // Converting the string to array then comparing
  const strArr = str.split(" ").sort((a, b) => a.length - b.length);
  return strArr.at(-1); //? The last element of the array
};

//console.log(findLongestWord("Zoo Dog Universal Ball Cat Apple TheHellISThat"));

// const myArr = ['a', 'b', 'c', 'd'];
// console.log(myArr.at(-1));

// Solve-2: using reducer (recommended)

const longestWord = (str) => {
  if (str.trim().length === 0) {
    return false;
  }

  const strArr = str.split(" ");
  const result = strArr.reduce(
    (acc, crt) => (crt.length > acc.length ? crt : acc),
    ""
  );
  return result;
};

console.log(longestWord("University HELLO Bangladesh "));
