function addWithDelay(...values) {
  const isNegativeExist = values.some((x) => x < 0);
  if (!isNegativeExist) {
    const sum = values.reduce((a, b) => a + b, 0);
    return new Promise((resolve) => setTimeout(() => resolve(sum), 1000));
  } else {
    return Promise.reject('Error! Some parameter is a negative number!');
  }
}

addWithDelay(3, 7, 9).then((res) => console.log(res));
