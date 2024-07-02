//!=======================================================
//!       Problem : Count Occurrences Of Character
//!=======================================================

//Expected console.log(countChar("wow","w")); // output : 2

const countChar = (word, char) => {
  word = word.toLowerCase();
  char = char.toLowerCase();

  const totalCount = word.split("").reduce((acc, crt) => {
    if (crt === char) {
      acc++;
    }
    return acc;
  }, 0);

  return totalCount;
};

console.log(countChar("Chocococal", "c"));
