function outlier(arr) {
  let resultsEven = arr.filter((elem) => {
    if (elem % 2 === 0) return elem;
  }); //Find all even numbers
  let resultsOdd = arr.filter((elem) => {
    if (elem % 2) return elem;
  }); //Find all out numbers
  console.log(resultsEven);
  console.log(resultsOdd);
  if (resultsEven.length > resultsOdd.length) {
    console.log(`The outlier is: ${resultsOdd}`);
  } else {
    console.log(`The outlier is: ${resultsEven}`);
  }
}

outlier([2, 4, 0, 100, 4, 11, 2602, 36]);
outlier([160, 3, 1719, 19, 11, 13, -21]);
