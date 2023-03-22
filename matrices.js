// MATRICES

let numeros = [2, 1, 3];

let arr = [
  {
    nombre: "pepito",
  },
  {},
];
console.log("-------------");
// let numeros2 = [1, 5, 2]
// numeros2[0]

// 3x3 ---> cuadrada

let matriz = [
  [1, 2, 5], // FILA
  [3, 5, 7], // FILA
  [4, 7, 8], // FILA
];

console.log(matriz[2][1]);

console.log(matriz[1][2]);

console.log("recorrido de fila");

let matrix = [
  [1, 2, 5],
  [3, 5, 7],
  [4, 7, 8],
];

// calcular el total de la fila 2
// cambiar todos los elementos de la fila 0, por un string que diga "hola"

// matrix[2][0]
// matrix[2][1]
// matrix[2][2]

//LINK --> CUANDO RECORRO UNA FILA , LA FILA ES ESTATICA Y LA COLUMNA DINAMICA
// CUANDO RECORRO UNA FILA LE PIDO LA LONGITUD a LA FILA
const recorrerFila = (mat, fila) => {
  for (let i = 0; i < mat[fila].length; i++) {
    mat[fila][i] = "hola";
  }
};

recorrerFila(matrix, 0);

console.table(matrix);

// RECORRER COLUMNA
//LINK --> CUANDO RECORRO UNA COLUMNA , LA FILA ES DINAMICA Y LA COLUMNA ESTATICA
// CUANDO RECORRO UNA COLUMNA LE PIDO LA LONGITUD a LA MATRIZ
let matrix2 = [
  [1, 2, 5],
  [3, 1],
  [4, 7, 8],
];

// matrix2[0][1]
// matrix2[1][1]
// matrix2[2][1]

const recorrerCol = (mat, col) => {
  let acc = 0;
  for (let i = 0; i < mat.length; i++) {
    if (mat[i][col] !== undefined) {
      acc += mat[i][col];
    }
  }
  return acc;
};

let res = recorrerCol(matrix2, 2);
console.log(res);

let matrix4 = [
  [1, 2],
  [3, 5],
];

const recorrerMatrizCompleta = (mat) => {
  for (let i = 0; i < mat.length; i++) {
    console.log(mat[i]);
    for (let j = 0; j < mat[i].length; j++) {
      console.log("estoy en la columna " + j);
      //  mat[i][j]
    }
  }
};

recorrerMatrizCompleta(matrix4);

let matrix5 = [
  [1, 2, 5, 5],
  [3, 3, 1, 5],
  [4, 7, 8, 5],
  [4, 7, 8, 5],
];

// DIAGONAL PRINCIPAL

// matrix5[0][0]
// matrix5[1][1]
// matrix5[2][2]
// matrix5[3][3]
console.log("--------------");
const recorrerPrincipal = (mat) => {
  for (let i = 0; i < mat.length; i++) {
    console.log(mat[i][i]);
  }
};
recorrerPrincipal(matrix5);

// DIAGONAL SECUNDARIA
let matrix6 = [
  [1, 2, 5, 5],
  [3, 3, 1, 5],
  [4, 9, 8, 5],
  [4, 7, 8, 5],
];

// matrix6[0][3]
// matrix6[1][2]
// matrix6[2][1]
// matrix6[3][0]

console.log("-------------");
const recorrerSec = (mat) => {
  let j = mat.length - 1;

  for (let i = 0; i < mat.length; i++, j--) {
    // console.log(mat[i][mat.length - (1 + i)])
    console.log(mat[i][j]);
    // j--
  }
};
recorrerSec(matrix6);
