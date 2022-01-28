//TODO 1- FOR LOOP

let users = ["a","b","c"];

let userList = document.getElementById("userList");

for(let i=0;i<users.length;i++){
    let liDom= document.createElement("li");
    userList.appendChild(liDom);
    liDom.innerHTML=users[i];
}

//!Hackerrank Problem
//! First Way
//looping over the characters of string, all vowels and consonants in order


function vowelsAndConsonants(s){
    const vowel = ['a','e','i','o','u']
    let consonant = ""

    for(let i of s)
    vowel.includes(i)? console.log(i): consonant+=i+'\n'
    console.log(consonant);

    
}

vowelsAndConsonants("ugo")


//! Second Way

function vowelsAndConsonants1(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const mapVowels = [];
    const mapConsonants = [];
    Array.from(s).forEach((letter) => {
      if (vowels.includes(letter)) {
        mapVowels.push(letter);
      } else {
        mapConsonants.push(letter);
      }
    });
    console.log([...mapVowels, ...mapConsonants].join('\n'));
  }

vowelsAndConsonants1("Enver")

// TODO 2- BREAK and CONTINUE

for(let i=0;i<5;i++){
    if(i==2){
        break;
    }
    console.log(i);
}

for(let i=0;i<5;i++){
    if(i==2){
        continue;
    }
    console.log(i);
}

//! Example

//Etiketli break Örneği
//etiketli break ifadesi her ne kadar iç döngü içerisinde olsa dahi
//etiketin başına konulduğu döngü için etki eder.
//Böylece daha geniş çaplı bir dögüden çıkılmış oldu.
cikis_etiketi: for (var i = 0; i <= 5; i++) {
    for (var j = 0; j <= 5; j++) {
      if (j == 2) {
        break cikis_etiketi;
      }
      console.log("Break iç döngüden j :" + j);
    }
   }
   
   //Etiketli Continue Örneği
   
   gec_etiketi: for (var i = 0; i <=5; i++) {
    for (var j = 0; j <= 4; j++) {
      if (j == 2) {
        continue gec_etiketi;
      }
      console.log("Continue iç döngüden j :" + j);
    }
   }