//1. addEvent without function
let click = document.querySelector(".h1");
click.addEventListener("click", function () {
  console.log("clicked");
  console.log(this);
});

//2. addEvent with a separate function
let click1= document.addEventListener("click", function1);
function function1(){
    console.log("clicked1");
}

// ! 1 THIS key word
// * 1a  THIS in a method
    //Create an object:
    const person={
        firstName:"Enver",
        lastName:"Korganci",
        id: 2021,
        fullName:function(){
            return this.firstName + " " + this.lastName;
        }
    };

//* Display data from the object
document.querySelector(".h1").innerHTML=person.fullName();

//* 1b this Alone
let x =this;
document.querySelector(".h2").innerHTML=x;



