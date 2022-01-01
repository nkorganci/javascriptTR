{
  /* <ul id="ulId">
<!-- <li id="liId">
    <span id="spanId"></span>
    <span id="spanId1">DELETE</span>
</li> -->
</ul> */
}

//Add list

let submit = document.querySelector("#btn");

submit.addEventListener("click", functionSubmit());

function functionSubmit(e) {
  e.preventDefault();
  let liId = document.createElement("li");
  let ulId = document.querySelector("#ulId");
  ulId.appendChild(liId);
  let spanId = document.createElement("span");
  liId.appendChild(spanId);
  spanId.innerHTML=Event.value
}
