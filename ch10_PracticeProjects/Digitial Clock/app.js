function Digitial() {
  const h = document.querySelector("h");
  const m = document.querySelector("m");
  const s = document.querySelector("s");

  const time = new Date();
  const h1 = time.getHours();
  const m1 = time.getMinutes();
  const s1 = time.getSeconds();

  h.innerHTML = h1;
  m.innerHTML = m1;
  s.innerHTML = s1;
}

var interval = setInterval(Digitial, 1000);

Digitial();
