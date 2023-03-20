// ANCHOR ---> MODULO 3 <Algoritmos />

// TODO ---> CREAR UNA FUNCION QUE RECIBA 2 NUMEROS Y DEVUELVA EL MAYOR
// SI SON IGUALES QUE DEVUELVA CUALQUIERA DE LOS 2

// ternario - if - switch

// const devolverMayor = (n1, n2) => {

//     if (n1 > n2) {
//         return n1;
//     } else if(n1 < n2){
//         n2
//     }else{
//         return "son iguales"
//     }


// };

const devolverMayor = (n1, n2) =>  n1 > n2 ? n1 : n2

let numMayor = devolverMayor(2, 10)
console.log(numMayor)

// 15, 2, 26, 14

let mayor = devolverMayor( devolverMayor(15, 2), devolverMayor(26, 14) )
console.log(mayor)

// MATRICES

let numeros = [2, 1, 3]

let arr = [
    {
        nombre: "pepito"
    },
    {

    }
]
console.log("-------------")
// let numeros2 = [1, 5, 2]
// numeros2[0]


// 3x3 ---> cuadrada

let matriz = [
    [1, 2, 5], // FILA
    [3, 5, 7], // FILA
    [4, 7, 8]  // FILA
]

console.log( matriz[2][1] )

console.log(matriz[1][2])


console.log("recorrido de fila")

let matrix = [
    [1, 2, 5], 
    [3, 5, 7],
    [4, 7, 8] // 19
]

// calcular el total de la fila 2
// cambiar todos los elementos de la fila 0, por un string que diga "hola"

// matrix[2][0]
// matrix[2][1]
// matrix[2][2]

//LINK--> CUANDO RECORRO UNA FILA , LA FILA ES ESTATICA Y LA COLUMNA DINAMICA

const recorrerFila = ( mat, fila )=>{

    for (let i = 0; i < mat[fila].length; i++) {
        mat[fila][i] = "hola"
    }

}

recorrerFila(matrix, 0)

console.table(matrix)
