let carts = document.querySelectorAll(".cart");

carts.forEach((e) => {
  e.addEventListener("click", (event) => {
    let eventId;
    console.log(event.target.tagName);
    if (event.target.tagName == "DIV") {
      eventId = event.target.getAttribute("id");
    } else {
      eventId = event.target.parentNode.getAttribute("id");
    }
    alert("l'id de la catre est " + eventId);
  });
});
