const seconds = () => {
  let now = new Date();
  const nowYear = now.getFullYear();
  const nowMonth = now.getMonth();
  const nowDate = now.getDate();
  let startOfToday = new Date(nowYear, nowMonth, nowDate, 0, 0, 0, 0);
  let dif = (now.getTime() - startOfToday.getTime()) / 1000;
  return dif;
};

console.log(seconds());
