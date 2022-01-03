//3. Arrow function with more than one statement.
const arrowFunction2 = (a, b) => {
  let info = `ArrowFunction3 ${a} ${b}     `;
  console.log(info);
  return info;
};

arrowFunction2("3", "arrow3");

// 4.

const seriesList = (list) => {
  list.forEach((series, index) => {
    console.log(`${index + 1}. ${series}`);
  });
};

seriesList(["Firefly", "The Mandalorian", "Breaking Bad"]);
