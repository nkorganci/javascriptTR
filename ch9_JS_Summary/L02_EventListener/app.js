const grandParent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandParent.addEventListener("click", e => {
  console.log("grandparent1");
});
grandParent.addEventListener("click", e => {
  console.log("grandparent2");
});




