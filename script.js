const previous = document.getElementById("previous");
const current = document.getElementById("current");
let expression = "";

document.querySelectorAll("button").forEach(btn => {
  btn.onclick = () => {
    const value = btn.innerText;
    if (value === "AC") {
      expression = "";
      current.innerText = "0";
      previous.innerText = "";
    } else if (value === "DEL") {
      expression = expression.slice(0, -1);
      current.innerText = expression || "0";
    } else if (value === "=") {
      try {
        previous.innerText = expression;
        expression = eval(
          expression
            .replace(/x/gi, "*")
            .replace(/÷/g, "/")
            .replace(/%/g, "/100")
        ).toString();
        current.innerText = expression;
      } catch {
        current.innerText = "Error";
        expression = "";
      }
    } else {
      expression += value;
      current.innerText = expression;
    }
  };
});