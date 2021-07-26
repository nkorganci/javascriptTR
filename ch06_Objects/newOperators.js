//! ==========  DESTRUCTURING(OBJECT) =============
//* Separation of arrays and objects

const child = {
  nam: "Can",
  age: 23,
};

//* 1. Way : Traditional
const nam01 = child.nam;
console.log(nam01);

//* 2.Way: Object Destructring
// Key names should be same, otherwise, undefined.
const { nam, age } = child;
console.log(nam, age);

//* Example:
function info() {
  return {
    id: "10",
    item: "apple",
    price: 2,
  };
}

console.log(info());
const { id, item, price } = info();
console.log(id, item);

//! ========= DESTRUCTURING(ARRAY) =============
const nam09 = ["hi", "bye"];

//* 1.Way: Traditional
const n1 = nam09[0];
const n2 = nam09[1];

//* 2.Way Destructuring Array, indexing is important, you have to write.
const [a, b] = nam09;
console.log(a, b);
