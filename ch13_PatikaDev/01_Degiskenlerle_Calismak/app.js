let a = "Enver Bera";
console.log(a.length);
console.log(a[0]);
console.log(a.charAt(0));
console.log(a.toUpperCase());
console.log(a.search("E"));
console.log(a.search("wer")); //-1, if not here

console.log(a.slice(0, a.indexOf(" ")));

//Replace
a = a.replace("Enver", "Korganci");
console.log(a);

//Includes
console.log(a.includes("ga"));

//startWidth, endWidth
console.log(a.startsWith("Korganci"));

//First Letter Capital
a=a.toLowerCase();
console.log(a);

a =a.charAt(0).toUpperCase() + a.slice(1);
console.log(a);

//charCodeAt
console.log(a.charCodeAt(0));

//split
console.log(a.split(" "));

// sampple
console.log("Hi");
console.log(2+2);