const display = document.querySelector(".display");
const left = document.querySelector(".left");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const numbers=Array.from(document.querySelectorAll(".button"));

numbers.map((t)=>{
    t.addEventListener("click",(e)=>{
        switch(e.target.innerText){
            case "C":
                display.innerText="";
                break;
            case "&#8592;":
                display.innerText=display.innerText.slice(0,-1);
            case "=":
                try{
                   display.innerText=eval(display.innerText); 
                }catch{
                    display.innerText="Error";
                }
                break;
            default:
                display.innerText+=e.target.innerText;

        }
    });
});