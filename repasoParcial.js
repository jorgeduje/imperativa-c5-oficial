// ANCHOR ---> ULTIMO REPASO, VAMOS QUE SE PUEDE 💪💪💪

// TODO ---> CREAR UNA FUNCION QUE RECIBA DOS NUMERO, LOS MULTIPLIQUE Y RETORNE
// LO SIGUIENTE : SI EL RESULTADO ES PAR ("es par") sino ("es impar")

let multiplicar = (n1, n2) => {
  let multi = n1 * n2;

  // if(multi % 2 === 0 ){
  //   return `el numero ${multi} es par`
  // }else{
  //   return `el numero ${multi} es impar`
  // }

  return multi % 2 === 0
    ? `el numero ${multi} es par`
    : `el numero ${multi} es impar`;
};

// TODO ---> ENCONTRAR EL MENOR NUMERO DEL ARREGLO

let num = [12, 3, 24, 2, 3];

console.log( num.indexOf(3) )

const encontrarMenor = (arr) => {
  let menor = arr[0]; // 12 // 3 // 2
  let indice = 0;

  for (let i = 1; i < arr.length; i++) {
    if (menor > arr[i]) {
      menor = arr[i];
      indice = i;
    }
  }

  return `el menor numero del arreglo es ${menor} que esta en la posicion ${
    indice + 1
  }`;
};

let res = encontrarMenor(num);
console.log(res);

// TODO ---> Agregar al siguiente objeto el metodo promediar
// El mismo debera calcular el promedio en base a la propiedad NOTAS

let estudiante = {
  nombre: "Carmen",
  notas: [8, 6, 10],
  edad: 20,
};

estudiante.promediar = function () {
  let acumulador = 0;

  for (let i = 0; i < this.notas.length; i++) {
    acumulador += this.notas[i];
  }

  return acumulador / this.notas.length;
};

let promedio = estudiante.promediar();
console.log(promedio);

// TODO ---> Encontrar el primer elemento que cumpla con la condicion de
// haber ganado un ticket y que ademas sea mayor de edad( 18 años o mas )
// deberas retornar dicho elemento

let participantes = [
  {
    nombre: "Florencia",
    edad: 22,
    ganoTicket: false,
  },
  {
    nombre: "Juan Pablo",
    edad: 17,
    ganoTicket: true,
  },
  {
    nombre: "Fernando",
    edad: 31,
    ganoTicket: false,
  },
  {
    nombre: "Guillermina",
    edad: 27,
    ganoTicket: true,
  },
  {
    nombre: "Gabriel",
    edad: 32,
    ganoTicket: true,
  },
];

const encontrar = ( arr )=>{

  for (let i = 0; i < arr.length; i++) {
    if( arr[i].edad >= 18 && arr[i].ganoTicket ){
      return arr[i]
    }
  }

  return "No se encontro"

}

let ganador = encontrar(participantes)
console.log(ganador)

// console.log(
//   participantes.find((elemento) => elemento.ganoTicket && elemento.edad >= 18)
// );

// TODO ---> Dado el siguiente arreglo de socios de una empresa
// se nos solicita filtrar a aquellos que tengan un total de
// 1500 acciones o mas, pero ademas, ser parte de la empresa desde antes
// de este año( los del 2023 no cuentan)
// Devolver un arreglo con dichos socios

let socios = [
  {
    nombreCompleto: "Joel Perez",
    añoDeEntrada: 2018,
    cantidadAcciones: 3200,
  },
  {
    nombreCompleto: "Juan Lopez",
    añoDeEntrada: 2022,
    cantidadAcciones: 4100,
  },
  {
    nombreCompleto: "Carmen Lopettegi",
    añoDeEntrada: 2023,
    cantidadAcciones: 1900,
  },
  {
    nombreCompleto: "Ernesto farias",
    añoDeEntrada: 2019,
    cantidadAcciones: 1300,
  },
  {
    nombreCompleto: "Juana Gimenez",
    añoDeEntrada: 2023,
    cantidadAcciones: 1200,
  },
];


// TODO ---> Dado el siguiente arreglo de socios de una empresa
// se nos solicita filtrar a aquellos que tengan un total de
// 1500 acciones o mas, pero ademas, ser parte de la empresa desde antes
// de este año( los del 2023 no cuentan)
// Devolver un arreglo con dichos socios

const filtrarSocios = (arr)=>{

  let filtrados = []

  for (let i = 0; i < arr.length; i++) {
    
    if(arr[i].cantidadAcciones >= 1500 && arr[i].añoDeEntrada < 2023){
       filtrados.push(arr[i])
    }

  }

  return filtrados
  
}
let sociosFiltrados = filtrarSocios(socios)

console.log(sociosFiltrados)