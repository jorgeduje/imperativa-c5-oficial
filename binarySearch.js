// 1

// buscado = 1
// izq = 0
// der = arr.length - 1
// medio = (izq + derecha ) / 2 ---> 2
// elementoEncotrado = arr[medio]--> 12
// elementoEncotrado === buscado ---> lo encontre
// elementoEncotrado > buscado ---> mover el extremo derecho ( medio - 1)
// elementoEncotrado < buscado ---> mover el extremo izquierdo (medio + 1)

let numeros = [1, 3, 12, 15, 21, 34, 41, 56, 63, 88];
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
      titularCuenta: "jack",
    },
  ];

  const ordenar = (array) => {
    let aux = undefined;
  
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1; j++) {
        if (array[j].titularCuenta > array[j + 1].titularCuenta) {
          aux = array[j];
          array[j] = array[j + 1];
          array[j + 1] = aux;
        }
      }
    }
  };

  ordenar(arrayCuentas)

  console.log(arrayCuentas)

const binarySearch = (arr, buscado) => {
  let min = 0; // 0 // 2 / 3
  let max = arr.length - 1;  // 9 / 3
  let posicionMid = undefined;
  let encontrado = undefined;

  while (min <= max) {
    posicionMid = Math.floor((min + max) / 2); // 3
    encontrado = arr[posicionMid]; // 15

    if (encontrado.titularCuenta === buscado) {
      return encontrado
    }

    if (encontrado.titularCuenta > buscado) {
      max = posicionMid - 1;
    } else {
      min = posicionMid + 1;
    }
  }

  return "Lo siento el elemento no fue encontrado"
};
console.log("------------")
console.log("------------")
console.log("------------")
let a = binarySearch(arrayCuentas, "carmen");
console.log(a)