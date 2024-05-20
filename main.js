let btnAdd = document.querySelector("input[type='button']");
let btnText = document.querySelector("input[type='text']");
let cartCom = document.querySelector(".Ecomment");

btnAdd.addEventListener("click", () => {
  let addCom = btnText.value;
  console.log(addCom);
  cartCom.innerHTML += `<p>${addCom}</p>`;
  btnText.value = "";
});
