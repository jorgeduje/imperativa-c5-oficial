console.log("me estoy ejecutando");
let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "pepito",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "maria",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "juancito",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "carmen",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jack",
  },
];

// COMO ACCEDER AL DOM

// let divContainer  = document.querySelector("div")
// let divContainer  = document.querySelectorAll("div")

let divContainer = document.getElementById("container");
console.log(divContainer);

// setTimeout(() => {
//   divContainer.innerHTML = "<h2>Hola soy un nuevo elemento</h2>";
// }, 5000);

// let subtitle = document.getElementById("subtitle");

// setTimeout(() => {
//   subtitle.textContent = "Aca ya cambie el texto";
//   subtitle.style.color = "red";
// }, 5000);

let contenedorDeCuentas = document.getElementById("cuentas");
let botonDeTraerCuentas = document.getElementById("btn");

botonDeTraerCuentas.addEventListener("click", () => {
  let tarjetas = [];

  for (let i = 0; i < arrayCuentas.length; i++) {
    tarjetas.push(`<div class="tarjetas">
        <h3>${arrayCuentas[i].titularCuenta}</h3>
        <h4> ${arrayCuentas[i].nroCuenta}</h4>
        <h4>$ ${arrayCuentas[i].saldoEnPesos} .-</h4>
        </div>
        `);
  }

  contenedorDeCuentas.innerHTML = tarjetas;
});

let contenedorGeneral = document.getElementById("container-general");
let btnCambiarTema = document.getElementById("btn-mode");

btnCambiarTema.addEventListener("click", () => {
  contenedorGeneral.style.backgroundColor = "black";
});

const traerDatos = () => {
  let datos = fetch("https://jsonplaceholder.typicode.com/users");
  datos
    .then((res) => res.json())
    .then((users) => {
        contenedorDeCuentas.innerHTML = users.map((elemento) => {
        return `<div class="tarjetas">
        <h3>${elemento.name}</h3>
        <h4> ${elemento.email}</h4>
        </div>
        `
      });
    });
};

let btnUsuarios = document.getElementById("btn-users");
btnUsuarios.addEventListener("click", traerDatos);
