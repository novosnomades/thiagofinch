/* RETORNA O NUMERO DE TELEFONE */
const phoneInputField = document.getElementById("testeForm");

const testeFormField = document.getElementById("tel");

const phoneInput = window.intlTelInput(phoneInputField, {
  preferredCountries: ["br", "us"],
  initialCountry: "br",
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

/*  MASCARA TELEFONE BRASIL */

function mascara(o, f) {
  v_obj = o
  v_fun = f
  setTimeout("execmascara()", 1)
}
function execmascara() {
  v_obj.value = v_fun(v_obj.value)
}
function mtel(v) {
  v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
  v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  v = v.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}
function id(el) {
  return document.getElementById(el);
}
function ativaMascara() {
  id("testeForm").onkeyup = function () {
    mascara(this, mtel);
  }
}

/* NOVA MASCARA */

function mascara2(o, f) {
  v_obj = o
  v_fun = f
  setTimeout("execmascara2()", 1)
}
function execmascara2() {
  v_obj.value = v_fun(v_obj.value)
}
function mtel2(v) {
  v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
  return v;
}
function id(el) {
  return document.getElementById(el);
}
function novaMascara() {
  id("testeForm").onkeyup = function () {
    mascara2(this, mtel2);
  }
}

var paisAtual = phoneInput.getSelectedCountryData().iso2;

if (paisAtual === "br") {
  ativaMascara()
  phoneInputField.setAttribute("maxlength", 15);
}

phoneInputField.addEventListener("countrychange", function () {
  phoneInputField.value = ""
  paisAtual = phoneInput.getSelectedCountryData().iso2;
  if (paisAtual === "br") {
    ativaMascara()
    phoneInputField.setAttribute("maxlength", 15);
  } else {
    novaMascara()
    phoneInputField.removeAttribute("maxlength");
  }
});


phoneInputField.addEventListener("input", () => {
  let phoneNumber = phoneInput.getNumber();
  testeFormField.value = phoneNumber
  console.log(phoneNumber)
})
