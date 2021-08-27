// local reviews data
const reviews = [
  {
    id: 1,
    name: "1susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "2anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "3peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "4bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

//Selectors
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const suprise = document.querySelector(".suprise");

const img = document.querySelector(".img");
const author = document.querySelector(".author");
const job = document.querySelector(".job");
const text = document.querySelector(".text");

//Set starting item
let currentItem = 0;

//Load initial item (! what is the function of this function)

window.addEventListener("DOMContentLoader", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.innerHTML = item.name;
  job.textContent = item.job;
  text.innerHTML = item.text;
});

//Show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.innerHTML = item.name;
  job.textContent = item.job;
  text.innerHTML = item.text;
}

//show next person
next.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

previous.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

suprise.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(r);
});
