let arrayCuentas = [
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    titularCuenta: "maria",
    saldoEnPesos: 8675,
  },
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    titularCuenta: "pepito",
    saldoEnPesos: 27771,
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

// ASCENDENTE
const ordenar = (array) => {
  let aux = undefined;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j].saldoEnPesos > array[j + 1].saldoEnPesos) {
        aux = array[j];
        array[j] = array[j + 1];
        array[j + 1] = aux;
      }
    }
  }
};

ordenar(arrayCuentas);
console.log(arrayCuentas);

// UTILIZANDO EL BUBBLE SORT, RETORNAR UN BOOLEANO
// QUE NOS INDIQUE SI ESTA ORDENADO O N O

// ASCENDENTE
let numeros = [3, 2, 1,5];

const verificarOrden = (arr) => {
  let orden;
  for (let f = 0; f < arr.length - 1; f++) {
    if (arr[f] === arr[f + 1]) {

    } else {
      if (arr[f] > arr[f + 1]) {
        orden = "DESC";
      } else {
        orden = "ASC";
      }
      break
    }
  }
console.log(orden)
  for (let j = 0; j < arr.length - 1; j++) {
    if (orden === "ASC") {
      if (arr[j] > arr[j + 1]) {
        return false;
      }
    } else {
      if (arr[j] < arr[j + 1]) {
        return false;
      }
    }
  }

  return orden ? true : "Lo siento el arreglo tiene todos los numeros iguales"
};

let estaOrdenado = verificarOrden(numeros);
console.log(estaOrdenado);

// for (let i = 0; i < array.length; i++) {
//     if( arr[j] > arr[j + 1] ){
//         return false
//     }
// }
