let btn = document.getElementById("btn");
let name = document.getElementById("name");
let surname = document.getElementById("sur");
let email = document.getElementById("email");
let password = document.getElementById("pass");

btn.addEventListener("click", function() {
  let user = {
    name: name.value,
    surname: surname.value,
    email: email.value,
    password: password.value
  };

  console.log(user);
});