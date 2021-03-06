const botonNumeros = document.getElementsByName("data-number");
const botonOpera = document.getElementsByName("data-opera");
const botonIgual = document.getElementsByName("data-igual");
const botonDelete = document.getElementsByName("data-delete");
let result = document.getElementById("result");
let opeActual = "";
let opeAnterior = "";
let operacion = undefined;

botonNumeros.forEach(function (boton) {
  boton.addEventListener("click", function () {
    agregarNumero(boton.innerText);
  });
});

botonOpera.forEach(function (boton) {
  boton.addEventListener("click", function () {
    selectOperacion(boton.innerText);
  });
});

botonIgual.forEach(function (boton) {
  boton.addEventListener("click", function () {
    calcular();
    actualizarDisplay();
  });
});

botonDelete.forEach(function (boton) {
  boton.addEventListener("click", function () {
    clear();
    actualizarDisplay();
  });
});

function agregarNumero(num) {
  opeActual = opeActual.toString() + num.toString();
  actualizarDisplay();
}

function actualizarDisplay() {
  result.value = opeActual;
}

function clear() {
  opeActual = "";
  opeAnterior = "";
  operacion = undefined;
  actualizarDisplay();
}

function selectOperacion(op) {
  if (opeActual === "") return;
  if (opeAnterior !== "") {
    calcular();
  }
  operacion = op.toString();
  opeAnterior = opeActual;
  opeActual = "";
}

function calcular() {
  let calculo;
  const anterior = parseFloat(opeAnterior);
  const actual = parseFloat(opeActual);
  if (isNaN(anterior) || isNaN(actual)) return;
  switch (operacion) {
    case "+":
      calculo = anterior + actual;
      break;
    case "-":
      calculo = anterior - actual;
      break;
    case "/":
      calculo = anterior / actual;
      break;
    case "*":
      calculo = anterior * actual;
      break;
    default:
      return;
  }

  opeActual = calculo;
  operacion = undefined;
  opeAnterior = "";
}
clear();
