var user = [
  email:"coolguy@gmail.com",
  password:"ILoveCoffee",
  name: "Grant Chirpus"
]




checkLogin();



function checkLogin(){
  var user = "";
  if (user === email && user === password){
    checkLogin();
    return;
  }

  function login(){
    var email = document.getElementsByClassName("email")[0];
    var password = document.getElementsByClassName("password")[0];
  email.innerText = user.email;
  password.innerText = password.innerText;
      }
