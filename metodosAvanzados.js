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

// CALLBACK ---> es una funcion que se pasa como argumento a otra

// const sumar =(a,b)=>{

// }

// sumar( 12, 54)

// METODOS DE ARRAYS
// MAP, FILTER, FIND, SORT, REDUCE, FOREACH

// FIND

const encontrar = (arr, nombre) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].titularCuenta === nombre) {
      return arr[i];
    }
  }
};

let a = encontrar(arrayCuentas, "maria");
console.log(a);

// FIND
let clienteEncontrado = arrayCuentas.find(
  (elemento) => elemento.titularCuenta === "maria"
);

console.log(clienteEncontrado);

let num = [1, 2, 3]; // [3, 6, 9]

// UNA FUNCION QUE DEVUELVA UN NUEVO ARR CON TODOS LOS ELEMENTOS
// DEL ARRAY ORIGINAL PERO MULTIPLICADOS POR 3

const recorrer = (arr) => {
  let nuevo = [];
  for (let i = 0; i < arr.length; i++) {
    nuevo.push(arr[i] * 3);
  }
  return nuevo;
};

// MAP
// let num = [1, 2, 3] ---> [0,2,6 ]

let nuevoArr = num.map((elemento, indice) => {
  return indice * 3;
});

console.log(nuevoArr);

let saldos = arrayCuentas.map((elemento) => elemento.saldoEnPesos);
console.log(saldos);

// FILTER

let filtrados = arrayCuentas.filter((elemento) => {
  return elemento.tipoDeCuenta === "Cuenta Corriente";
});
console.log(filtrados);


// FOREACH 
let newArr = []
let aa = num.forEach( (elemento)=> {
   return elemento
} )

console.log(aa)