let btnPlus = document.querySelector(".plus");
let btnMinus = document.querySelector(".minus");
let cartNumber = document.querySelector(".number h1");
btnPlus.addEventListener("click", () => {
  cartNumber.innerHTML++;
});
btnMinus.addEventListener("click", () => {
  cartNumber.innerHTML--;
});
