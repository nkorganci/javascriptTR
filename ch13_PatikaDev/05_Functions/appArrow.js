// 1. Regular Function
function arrowFunction(name){
    console.log(`Hello ${name}`);
}

arrowFunction("Regular Function");

//2. Arrow function
const arrowFunction1 = arrow=>console.log(`Hello ${arrow}`)
arrowFunction1("Welcome arrow function");

//3. Arrow function with more than one statement.
    const arrowFunction2= (a,b)=>{
         let info = `ArrowFunction3 ${a} ${b}     `
         console.log(info);
         console.log(info);
         return info;
    }

    arrowFunction2("3","arrow 3");




