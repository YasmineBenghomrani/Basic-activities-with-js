let name = document.querySelector(".right h2");
let btnText = document.querySelector("input[type='text']");
let btnChange = document.querySelector("input[type='button']");

btnChange.addEventListener("click", () => {
  let NewName = btnText.value;
  console.log(NewName);
  name.innerHTML = `<h2>${NewName}</h2>`;
  btnText.value = "";
});
