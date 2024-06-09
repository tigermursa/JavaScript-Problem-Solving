//=======================================================
//     Problem : Hash Tag Generator
//=======================================================
console.log("5");
//? Note:
// If input string is more then 24 char & empty return invalid input
// word's first latter will be Capital

// Solve-1:

const hashTagGenerator = (text) => {
  if (text.length > 24 || text.trim().length === 0) {
    return " invalid input";
  }

  text = text.trim().split(" ");
  text = text.map(
    (current) =>
      // 1.using replace
      // current.replace(current[0], current[0].toUpperCase())
      // 2.using charAt
      current.charAt(0).toUpperCase() + current.slice(1)
  );
  text = `#${text.join("")}`;
  return text;
};

const text = "free gaza";

const result = hashTagGenerator(text);

console.log(result); //#FreeGaza
