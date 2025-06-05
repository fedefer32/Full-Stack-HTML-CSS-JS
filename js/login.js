const formulario = document.querySelector('.formulario'),
inputs = document.querySelectorAll('.formulario input'),
sign_in_container = document.querySelectorAll('.sign-in-container'),
sign_up_container = document.querySelectorAll('.sign-up-container');


document.addEventListener('click', e => {
if (e.target.matches('.ok-account')) {
  sign_in_container.style.display = 'block';
  sign_up_container.style.display = "none";
  document.querySelector('.error_notify').classList.remove('active');
} else if (e.target.matches('.no-account')){
  sign_up_container.style.display = "block";
  sign_in_container.style.display = "none";
  document.querySelector('.error_notify').classList.remove('active');
}
})

const expresiones_regulares = {
password: /^.{4,12}$/, 
email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const campos = {
password:false,
email:false
}

const validarFormulario = (e) => {
switch (e.target.name) {

  case "email":
      validarCampo(expresiones_regulares.email, e.target.value, 'email')
      break;
  case "password":
      validarCampo(expresiones_regulares.password,e.target.value, 'password')
      break;
  default:
      break;
}
}

const validarCampo = (expresion,input,campo) => {
if (expresion.test(input)) {
  document.getElementById(campo).classList.remove('error');
  campos[campo] = true;
} else {
  document.getElementById(campo).classList.add('error');
  campos[campo] = false;
}
}

inputs.forEach((input) => {
input.addEventListener('keyup', validarFormulario);
input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', e => {
e.preventDefault();
if (campos.password && campos.email) {
  document.querySelector('.check_notify').classList.add('active');
  document.querySelector('.error_notify').classList.remove('active');

  setTimeout(() => {
      document.querySelector('.check_notify').classList.remove('active');
  }, 5000);

} else {
  document.querySelector('.error_notify').classList.add('active');
  document.querySelector('.check_notify').classList.remove('active');
}
})
password.addEventListener("keyup", function(){
password.classList.remove("errorField")
})
email.addEventListener("keyup", function(){
email.classList.remove("errorField")
})


