let items = [1,2,3];
items.push(4)
items.pop(4)
items.unshift(22)
items.shift()
console.log(items);

let items1 = ["a","b","ca"];
items1.splice(0,2,234,4)

console.log(items1);

console.log(items1.includes(4));

console.log(items1.join("/"));
console.log(items1.concat(items));