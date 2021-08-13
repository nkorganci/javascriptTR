//! =========== CREATE AN ELEMENT IN HTML ================

//0.Step: Get the body
const body = document.body;
//1.step: Create element
const divEl = document.createElement("div");

//2.Add text to element
divEl.innerText = "1. Div element text";

//3.Add/Append it to html body
body.append(divEl);

//* Example 2:
const h1 = document.createElement("h1");
h1.innerHTML = "2. Create Document 2, example";
body.append(h1);

//! textContent( shows all visible or invisible) and innerText(shows only visible ones)
const span = document.querySelector("div");

console.log(span.innerText); // Read only visible ones, keep spaces
console.log(span.textContent); //read all, do not keep spaces

//! ========= MODIFYING ELEMENT HTML ==============

//1.Way
const h2 = document.createElement("h2");
h2.innerHTML = "<i> H2 in italic </>"; // Make it italic
// h2.innerText="<i> H2 in italic </>"// Write as it is
// h2.textContent="<i> H2 in italic </>"// Write as it is
body.append(h2);

//2.Way: not to use innerHTML which causes security problems
const div1 = document.createElement("div");
const h3 = document.createElement("i");
h3.innerText = "italic 2nd Way";
div1.append(h3);
body.append(div1);

//! ==========  ADD REMOVE ELEMENTS TO HTML ===============
const div = document.querySelector("div");
const hi = document.querySelector(".hi");
const bye = document.querySelector(".bye");
/* hi.remove(); //1st Way
div.append(hi);
div.removeChild(bye); // 2nd Way */

//! =========== GET and SET ATTRIBUTE VALUE NAMES ============
//* 1st Way: Get attribute
console.log(hi.getAttribute("class"));
console.log(hi.getAttribute("title"));
//* 2nd Way
console.log(hi.className);
console.log(hi.title);

//1.Set attribute
console.log(hi.setAttribute("title", "sdf")); //1st Way to change attribute
console.log((hi.title = "2nd way"));

//1. Remove attribute
hi.removeAttribute("title");

//! ================== CLASS ATTRIBUTE ======================
hi.classList.add("new-class");
// hi.classList.toggle("add/remove an attribut value");

//! ============  STYLE ATTRIBUTE ============================
hi.style.color = "red";
