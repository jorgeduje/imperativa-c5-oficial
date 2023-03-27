//ANCHOR ALGORITMO DE ORDENAMIENTO ---> BUBBLE SORT

// let numerosOrdenados = numeros.sort((a,b)=> b - a )

// ASCENDENTE

let numeros = [5, 2, 6, 1, 3]; // [2, 5, 1, 3, 6 ] // [2, 1, 3, 5, 6 ] // [1, 2, 3, 5, 6]
let palabras = ["casa", "Zebra", "abeja", "avion"]; // ["abeja", "avion", "casa", "zebra"]
// LAS MAYUSCULAS SON MAS PEQUEÑAS QUE LAS MINUSCULAS

const ordenar = (arr, instruccion) => {
  // DESC

  if (instruccion !== "ASC" && instruccion !== "DESC") {
    console.log("El arreglo no se pudo ordenar");
    return;
  }

  let aux;
  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length - 1 - i; j++) {
        
      if (instruccion === "ASC") {
        if (arr[j] > arr[j + 1]) {
          aux = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = aux;
        }
      } else {
        if (arr[j] < arr[j + 1]) {
          aux = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = aux;
        }
      }
    }
  }
};

ordenar(numeros, "DESC");
console.log(numeros);
// ordenar(palabras)
// console.log(palabras)
