const maxWeight = {
  apple: 50,
  watermalon: 250,
  peach: 75,
  orange: 15,
  nuts: 33,
};

const sortable = Object.fromEntries(
  Object.entries(maxWeight).sort(([, min], [, max]) => max - min)
);

console.log(sortable);
