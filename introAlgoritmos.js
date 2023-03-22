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

