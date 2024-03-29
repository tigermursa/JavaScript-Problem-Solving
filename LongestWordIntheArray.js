//=======================================================
//     Problem : Find the Longest word in a String
//=======================================================

//? Note:
// If input string empty or only space then return invalid input

// Solve-1: solving without using reduce
const text = "feel the  code from your  heart of javaScript";

const longestString = (string) => {
  if (string.trim().length === 0) {
    return "invalid input";
  }

  word = string.split(" ").sort((a, b) => a.length - b.length);
  //   return word[word.length - 1]; // old way
  return word.at(-1);
};

const result = longestString(text);

console.log(result);

// Solve-2: solving  using reduce

const longestString2 = (string) => {
  if (string.trim().length === 0) {
    return "invalid input";
  }

  word = string.split(" ");
  const result = word.reduce(
    (acc, crt) => (crt.length > acc.length ? crt : acc),
    " "
  );
  return result;
};

const result2 = longestString2(text);

console.log("using reduce :", result2);
