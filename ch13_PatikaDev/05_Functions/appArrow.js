// 1. Regular Function
function arrowFunction(name) {
  console.log(`Hello ${name}`);
}

arrowFunction("Regular Function");

//2. Arrow function
const arrowFunction1 = (arrow) => console.log(`Hello ${arrow}`);
arrowFunction1("Welcome arrow function");

//3. Arrow function with more than one statement.
const arrowFunction2 = (a, b) => {
  let info = `ArrowFunction3 ${a} ${b}     `;
  console.log(info);
  console.log(info);
  return info;
};

arrowFunction2("3", "arrow 3");

// 4. Write the arraylist in numbers:
const seriesList = (list) => {
  list.forEach((series, index) => {
    console.log(`${index + 1}.${series}`);
  });
};

seriesList(["A", "B", "C"]);

//5. ForEach() method
    const array= ["a","b","c"];
    let result = array.forEach(x=>console.log(x));

// 6. Return

function areaCircle(r,PI=3.14){
  return r*r*PI;
}

var area = areaCircle(2);
console.log(area);
