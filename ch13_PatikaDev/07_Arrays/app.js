let items = [1,2,3,4]
let users=["a","b","c"]

// Combine with varargs
let all = [...items,...users];
console.log(all);

// toString and join
console.log(items.toString());
console.log(items.join());

//slice() copy an array

//forEach()
// dizi.forEach(function(diziElemanınınKendisi, diziElemanınınIndeksi, dizininKendisi) {
//     // Bir şeyler yap.
//     }); 


items.forEach(function(a,b){
    console.log(a,b);
})

//! example


let text ="";
let fruits = ["a","b","c"]
fruits.forEach(myFunction);
document.getElementById("demo").innerHTML=text;

function myFunction(item,index){
    text+=index + ":" + item + "<br>"
}


//!Example
let dizi = [2,5,8,11,15,17];
let dizi1 = dizi.filter(t=>t>10).map(t=>t*5)
console.log(dizi1);

function s(nums){
    return [...new set(nums.sort((a,b)=>(b-a)))][1]
}