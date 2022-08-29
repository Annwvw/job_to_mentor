function addWithDelay(group1 = 101, group2 = 202, group3 = 303...) {
  const values = [group1, group2, group3...];
  const isNegativeExist = values.some((x) => x < 0);
  if (!isNegativeExist) {
    const sum = values.reduce((a, b) => a + b, 0);
    return new Promise((resolve) => setTimeout(() => resolve(sum), 1000));
  } else {
    return Promise.reject('Error! Some parameter is a negative number!');
  }
}

addWithDelay().then((res) => console.log(res));
