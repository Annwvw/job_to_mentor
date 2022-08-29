const task1 = () => {
  const random10 = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * 100)
  );
  const biggest3 = random10.sort((a, b) => a - b).slice(-3);

  return biggest3.reduce((a, b) => a * b, 1);
};

console.log(task1());
