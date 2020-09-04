function returnEven(num) {
  let newArr = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      newArr.push(num[i]);
    } else {
      continue;
    }
  }
  return newArr;
}
