const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
console.log("Hi");

/* 
//! Only one of them will work
grandparent.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("GRand pare 1");
});
parent.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("pare 2");
});
child.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("child 2");
}); */

/* //! CAPTURE METHOD
grandparent.addEventListener(
  "click",
  (e) => {
    console.log("GRand pare 1 capture");
  },
  { capture: true }
);
parent.addEventListener(
  "click capture",
  (e) => {
    console.log("pare 2");
  },
  { capture: true }
);
child.addEventListener(
  "click capture",
  (e) => {
    console.log("child 2");
  },
  { capture: true }
);
child.addEventListener(
  "click capture",
  (e) => {
    console.log("child 2");
  },
  { once: true }
);
 */
/* //! BUBBLE METHOD
grandparent.addEventListener("click", (e) => {
  console.log("GRand pare 1 BUBBLE");
});
parent.addEventListener("click", (e) => {
  console.log("pare 2 BUBBLE");
});
child.addEventListener("click", (e) => {
  console.log("chilD BUBBLE");
});

 */

//! Adding new element
const divs = document.querySelectorAll("div");

divs.forEach((div) => {
  div.addEventListener("click", () => {
    console.log("before new element");
  });
});
