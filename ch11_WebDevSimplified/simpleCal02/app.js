let display = document.querySelector("#display");

// let button = document.querySelectorAll(".button"); return HTML collection/ node list
// console.log(button);// Return HTML

let button = Array.from(document.querySelectorAll(".button"));
// console.log(button);//Return array

button.map((button) => {
  button.addEventListener("click", (e) => {
    /*     console.log("clicked");
    console.log(e);
    console.log(e.target);
    console.log(e.target.innerText); */

    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "←":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
      case "=":
       try{
          display.innerText = eval(display.innerText); 
       }catch{
           display.innerText="Error";
       }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
