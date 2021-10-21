const display = document.querySelector(".display");
const button = Array.from(document.querySelectorAll(".button"));

button.map((t) => {
  t.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "DEL":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          ("error");
        }
        break;
      default:
        display.innerText += e.target.innerText;
        break;
    }
  });
});