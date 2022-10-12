let abrir = document.querySelectorAll(".cta")[0];
let cerrar = document.querySelectorAll(".close")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click", function (e) {

  e.preventDefault();
  modalC.style.opacity = "1";
  modalC.style.visibility = "visible";
  modal.classList.toggle("hidden");
  console.log("modal closed", modalC);

});

cerrar.addEventListener("click", function () {
  modal.classList.toggle("hidden");
  modalc.style.opacity = "1";
  modalc.style.visibility = "visible";

})