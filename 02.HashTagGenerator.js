//!=======================================================
//!       Problem : Make  Hash Tag Generator
//!=======================================================

//? Input any string that will be HashTag Like `we need better education system` = "#WeNeedBetterEducationSystem"
//? And if the string is more than 200 char and empty return false

//solve-1:

const hashTag = (str) => {
  //if the string is more than 50 char and empty return false
  if (str.length > 50 || str.trim().length === 0) {
    return false;
  }

  let string = str
    .split(" ")
    .map((currentElement) =>
      currentElement.replace(currentElement[0], currentElement[0].toUpperCase())
    );

  //just adding # and joining the string together
  result = `#${string.join("")}`;
  return result;
};

console.log(hashTag("i love coding this my life"));

//solve-2:
const hashTag2 = (str) => {
  //if the string is more than 200 char and empty return false
  if (str.length > 50 || str.trim().length === 0) {
    return false;
  }

  let string = str
    .split(" ")
    .map(
      (currentElement) =>
        currentElement.charAt(0).toUpperCase() + currentElement.slice(1)
    );

  //just adding # and joining the string together
  result = `#${string.join("")}`;
  return result;
};

console.log(hashTag2("i love coding this my life2"));
