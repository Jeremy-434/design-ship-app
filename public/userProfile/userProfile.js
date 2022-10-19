// CARGAR DATOS DE USUARIO EN userProfile.html
let userNameProfile = document.getElementById("userNameProfile");
let emailProfile = document.getElementById("emailProfile");
userNameProfile.innerHTML = `${localStorage.name}`;
emailProfile.innerHTML = `${localStorage.email}`;