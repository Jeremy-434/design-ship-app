
const showRegister = () => {
  const divRegister = document.getElementById('divRegister');

  divRegister.innerHTML = `<!-- FORMULARIO DE REGISTRO -->
  <div
      class="modal-containerRegster modalRegster overflow-y-auto overflow-x-auto fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex justify-center items-center bg-black/50">
      <div class="relative p-4 w-full max-w-md h-full md:h-auto">
          <!-- Modal content -->
          <div
              class="relative bg-gray-100 rounded-lg shadow-2xl dark:bg-gradient-to-r dark:from-ship-purple-1 dark:to-ship-purple-2 dark:text-gray-300 py-6">
              <div class="text-center flex flex-col justify-center self-center">
                  <i
                      class="bg-red-500/60 block px-2 py-1 absolute top-4 right-4 rounded-full text-xs text-white closeRegster cursor-pointer">x</i>
                  <h2 class="text-5xl font-medium m-2">REGISTER</h2>
                  <form class="form" method="POST" id="">
                      <div>
                          <div class="flex w-7/12 mx-auto flex-col sm:w-[280px] sm:flex-row">
                              <input
                                  class="border-0 w-full sm:w-[130px] my-4 mb-0 sm:mx-1 p-2 border-b-2 bg-transparent border-b-black dark:border-b-sky-400 focus:bg-gradient-to-t focus:from-gray-200 focus:outline-none dark:focus:bg-gradient-to-t dark:focus:from-sky-400/30"
                                  type="text" placeholder="First Name" id="firstNameFormRegister">
                              <input
                                  class="border-0 w-full sm:w-[130px] my-4 mb-0 sm:mx-1 p-2 border-b-2 bg-transparent border-b-black dark:border-b-sky-400 focus:bg-gradient-to-t focus:from-gray-200 focus:outline-none dark:focus:bg-gradient-to-t dark:focus:from-sky-400/30"
                                  type="text" placeholder="Last Name" id="lastNameFormRegister">
                          </div>
                      </div>
                      <div>
                          <input
                              class="border-0 w-7/12 sm:w-[280px] mx-2 my-4 sm:mx-1 p-2 border-b-2 bg-transparent border-b-black dark:border-b-sky-400 focus:bg-gradient-to-t focus:from-gray-200 focus:outline-none dark:focus:bg-gradient-to-t dark:focus:from-sky-400/30"
                              type="text" placeholder="E-Mail" id="emailFormRegister">
                      </div>
                      <div>
                          <input
                              class="border-0 w-7/12 sm:w-[280px] mx-2 my-4 sm:mx-1 p-2 border-b-2 bg-transparent border-b-black dark:border-b-sky-400 focus:bg-gradient-to-t focus:from-gray-200 focus:outline-none dark:focus:bg-gradient-to-t dark:focus:from-sky-400/30"
                              type="text" placeholder="Username" id="userNameFormRegister">
                      </div>
                      <div>
                          <input
                              class="border-0 w-7/12 sm:w-[280px] mx-2 my-4 sm:mx-1 p-2 border-b-2 bg-transparent border-b-black dark:border-b-sky-400 focus:bg-gradient-to-t focus:from-gray-200 focus:outline-none dark:focus:bg-gradient-to-t dark:focus:from-sky-400/30"
                              type="text" placeholder="Password" id="passwordFormRegister">
                      </div>
                      <div class="my-4 lg:my-8">
                          <p class="text-xs sm:text-sm">
                              <i class="font-medium cursor-pointer text-sky-400">
                      
                              </i>
                          </p>
                          <div>
                              <button class="btn-primary-darkmode" onclick="validateEntries()">REGISTER
                              </button>
                          </div>
                          <p class="text-xs sm:text-sm">Already have an Design Ship Account? <i
                                  class="text-sky-400 font-medium cursor-pointer">Sign in here.</i>
                          </p>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </div>`
  let cerrar = document.querySelectorAll(".closeRegster")[0];
  let modal = document.querySelectorAll(".modalRegster")[0];
  let modalC = document.querySelectorAll(".modal-containerRegster")[0];
  cerrar.addEventListener("click", function () {
    console.log('asd')
    modal.classList.toggle("hidden");
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
  })
}

const showLogin = () => {
  const divLogin = document.getElementById('divLogin');

  divLogin.innerHTML = `<!-- FORMULARIO DE INGRESO -->
  <div
      class="modal-container modal overflow-y-auto overflow-x-auto fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex justify-center items-center bg-black/50">
      <div class="relative p-4 w-full max-w-md h-full md:h-auto">
          <!-- Modal content -->
          <div
              class="relative bg-gray-100 rounded-lg shadow-2xl dark:bg-gradient-to-r dark:from-ship-purple-1 dark:to-ship-purple-2 dark:text-gray-300 py-6">
              <div class="my-8">
                  <div class="text-center flex flex-col justify-center self-center">
                      <i
                          class="bg-red-500/60 block px-2 py-1 absolute top-4 right-4 rounded-full text-xs text-white closeLogin cursor-pointer">x</i>
                      <h2 class="text-5xl font-medium m-2">LOG IN</h2>
                      <div>
                          <input
                              class="w-7/12 sm:w-[280px] mx-2 my-6 mb-0 sm:mx-6 p-2 border-b-2 bg-transparent border-b-black dark:border-b-sky-400 focus:bg-gradient-to-t focus:from-gray-200 focus:outline-none dark:focus:bg-gradient-to-t dark:focus:from-sky-400/30"
                              type="text" placeholder="Enter your username or email address" required>
                      </div>
                      <div>
                          <input
                              class="w-7/12 sm:w-[280px] mx-2 my-6 sm:m-6 p-2 border-b-2 bg-transparent border-b-black dark:border-b-sky-400 focus:bg-gradient-to-t focus:from-gray-200 focus:outline-none dark:focus:bg-gradient-to-t dark:focus:from-sky-400/30"
                              type="password" placeholder="Enter your password" required>
                      </div>
                      <div class="my-4 lg:my-8">
                          <p class="text-xs sm:text-sm">
                              <i class="font-medium cursor-pointer text-sky-400">
                                  I forgot my password.
                              </i>Remember me
                          </p>
                          <button type="submit" class="btn-primary-darkmode">SIGN IN
                          </button>
                          <p class="text-xs sm:text-sm">You are not registered? <i
                                  class="text-sky-400 font-medium cursor-pointer">Register</i>
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>`
  let cerrar = document.querySelectorAll(".closeLogin")[0];
  let modal = document.querySelectorAll(".modal")[0];
  let modalC = document.querySelectorAll(".modal-container")[0];
  cerrar.addEventListener("click", function () {
    console.log('asd')
    modal.classList.toggle("hidden");
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
  })
}


// // Modal Log In
// let abrirLogin = document.querySelectorAll(".ctaLogin")[0];
// let cerrarLogin = document.querySelectorAll(".closeLogin")[0];
// let modalLogin = document.querySelectorAll(".modalLogin")[0];
// let modalCLogin = document.querySelectorAll(".modal-containerLogin")[0];

// abrirLogin.addEventListener("click", function (e) {

//   e.preventDefault();
//   modalCLogin.style.opacity = "1";
//   modalCLogin.style.visibility = "visible";
//   modalLogin.classList.toggle("hidden");
//   console.log("modal closed", modalC);

// });

// cerrarLogin.addEventListener("click", function () {
//   modalLogin.classList.toggle("hidden");
//   modalcLogin.style.opacity = "1";
//   modalcLogin.style.visibility = "visible";

// })

// // Modal Register
// let abrirRegister = document.querySelectorAll(".ctaRegister")[0];
// let cerrarRegister = document.querySelectorAll(".closeRegister")[0];
// let modalRegister = document.querySelectorAll(".modalRegister")[0];
// let modalCREgister = document.querySelectorAll(".modal-containerRegister")[0];

// abrirRegister.addEventListener("click", function (e) {

//   e.preventDefault();
//   modalCRegister.style.opacity = "1";
//   modalCRegister.style.visibility = "visible";
//   modalRegister.classList.toggle("hidden");
//   console.log("modal closed", modalC);

// });

// cerrarRegister.addEventListener("click", function () {
//   modalRegister.classList.toggle("hidden");
//   modalcRegister.style.opacity = "1";
//   modalcRegister.style.visibility = "visible";

// })