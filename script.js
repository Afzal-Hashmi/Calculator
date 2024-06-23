const buttons = document.querySelectorAll(".button");
let string = "";
console.log(buttons);
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      document.querySelector("#string").value = eval(string);
    } else if (e.target.innerHTML == "AC") {
      string = "";
      document.querySelector("#string").value = string;
    } else {
      string += e.target.innerHTML;
      document.querySelector("#string").value = string;
    }
  });
});
