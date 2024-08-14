const repeatString = function (yourString, repitions) {
  let stringArr = [];
  let reps = repitions;
  if (reps < 0) {
    reps = "ERROR";
    return reps;
  } else {
    reps = repitions;
  }

  for (i = 0; i < reps; i++) {
    stringArr.push(yourString);
  }
  let newString = stringArr.join("");
  console.log(newString);
  return newString;
};

// Do not edit below this line
module.exports = repeatString;
