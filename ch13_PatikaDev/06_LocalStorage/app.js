//TODO 1-LOCAL STORAGE
localStorage.setItem("A","B");
const a = localStorage.getItem("A");
console.log(a);

//TODO 2- ADDING DIFFERENT VARIABLES IN STORAGE

//* 2A
let user = "LocalStorage";
localStorage.setItem("userInfo",user);
console.log(user);

//* 2B MULTIPLE VALUES
let userSatus ={userName:"Enver", isActive:ture};
localStorage.setItem("user",userSatus);

