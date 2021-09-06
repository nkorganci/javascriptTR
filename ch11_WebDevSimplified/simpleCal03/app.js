const display = document.querySelector(".display");
const numbers=Array.from(document.querySelectorAll(".button"));

numbers.map((numbers)=>{
    numbers.addEventListener("click",(e)=>{
        switch(e.target.innerText){
            case "C":
                display.innerText="";
                break;
            case "&#8592;":
                if(display.innerText){
                    display.innerText=display.innerText.slice(0,-1);
                };
                
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