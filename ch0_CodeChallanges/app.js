// TODO 1 - String Challange Question
//* Swap the case of each character of a string, upper case to lower and vice versa


function swapCase(str){
    var result = str.split('').map(function(c){
        return c===c.toUpperCase()?c.toLowerCase():c.toUpperCase()
    }).join('');
    return result;
}

console.log(swapCase("Hi234"));


// console.log(StringChallenge(readline()));

let a = "Evner Bera"
let b = a.split()
console.log(a.split(""));
