//! ==========  DESTRUCTURING(OBJECT) =============
//* Separation of arrays and objects

const child = {
  nam: "Can",
  age: 23,
};

//* 1. Way : Traditional
const nam01 = child.nam;
console.log(nam01);

//* 2.Way: Object Destructring
// Key names should be same, otherwise, undefined.
const { nam, age } = child;
console.log(nam, age);

//* Example:
function info() {
  return {
    id: "10",
    item: "apple",
    price: 2,
  };
}

console.log(info());
const { id, item, price } = info();
console.log(id, item);

//! ========= DESTRUCTURING(ARRAY) =============
const nam09 = ["hi", "bye"];

//* 1.Way: Traditional
const n1 = nam09[0];
const n2 = nam09[1];

//* 2.Way Destructuring Array, indexing is important, you have to write.
const [a, b] = nam09;
console.log(a, b);

// ======================================================
//        YENİ NESİL OPERATORLER: SPREAD VEYA REST  used by "..."
// ======================================================

// Spread operatoru dizileri ve nesneleri birleştirmek
// veya ayırımak icin kullanilabilir.
// Kullanmak içini dizinin onune ... karakterleri konulur.

// !DİZİLERDE DESTRUCTURING YAPARKEN GERİ KALANLARI SEÇMEK İÇİN KULLANILABİLİR.
// REST (Dizilede kullanım)

//* Example: "rest in array" Wrtie first 2 car to an array, the rest to "rest" array
const arabalar = ["bmw", "reno", "mercedes", "ferrari", "anadol"];
const [a1, b1, ...rest] = arabalar;
console.log(a1, b1); // String
console.log(rest); // Written in an array

// ! NESNELERDE DESTRUCTURING YAPARKEN GERİ KALANLARI SEÇMEK İÇİN KULLANILABİLİR.
const personel = {
  isim: "john",
  soyad: "smith",
  meslek: "developer",
};

const { meslek, soyad, ...rest01 } = personel;
console.log(rest01);

// ! DIZILERI BIRLESTIRMEK ICIN DE KULLANILABILIR
const araclar = ["Ucak", "Helikopter", "Bisiklet"];
const otomobiller = ["Kamyon", "Kamyonet", "Otobus", "Araba"];

//* You can combine two array to an array
const newArray = [...araclar, ...otomobiller];
console.log(newArray);

//* Insert an array to another array
const fruit = ["apple", "grape", ...arabalar];
console.log(fruit);
