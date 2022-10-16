// Modal Log In
let abrirLogin = document.querySelectorAll(".ctaLogin")[0];
let cerrarLogin = document.querySelectorAll(".closeLogin")[0];
let modalLogin = document.querySelectorAll(".modalLogin")[0];
let modalCLogin = document.querySelectorAll(".modal-containerLogin")[0];

abrirLogin.addEventListener("click", function (e) {

  e.preventDefault();
  modalCLogin.style.opacity = "1";
  modalCLogin.style.visibility = "visible";
  modalLogin.classList.toggle("hidden");
  console.log("modal closed", modalC);

});

cerrarLogin.addEventListener("click", function () {
  modalLogin.classList.toggle("hidden");
  modalcLogin.style.opacity = "1";
  modalcLogin.style.visibility = "visible";

})

// Modal Register
let abrirRegister = document.querySelectorAll(".ctaRegister")[0];
let cerrarRegister = document.querySelectorAll(".closeRegister")[0];
let modalRegister = document.querySelectorAll(".modalRegister")[0];
let modalCREgister = document.querySelectorAll(".modal-containerRegister")[0];

abrirRegister.addEventListener("click", function (e) {

  e.preventDefault();
  modalCRegister.style.opacity = "1";
  modalCRegister.style.visibility = "visible";
  modalRegister.classList.toggle("hidden");
  console.log("modal closed", modalC);

});

cerrarRegister.addEventListener("click", function () {
  modalRegister.classList.toggle("hidden");
  modalcRegister.style.opacity = "1";
  modalcRegister.style.visibility = "visible";

})
