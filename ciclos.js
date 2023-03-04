//ANCHOR Estructuras de repeticion ---> for / while / do while

// 10 veces un console.log que diga "hola"

console.log("hola");

const saludarDiezVeces = () => {
  // INICIALIZACION ; CONDICION ; MODIFICADOR

  // ACA VEO LOS NUMEROS DEL 1 AL 10
  // for( let i = 1 ; i <= 10  ; i++ ){
  //     console.log( i )
  // }

  // ACA LOS NUMEROS DEL 10 AL 1
  // for(let i = 10 ; i >= 1; i--){
  //     console.log(i)
  // }

  // IR Y VENIR HASTA EL 10
  // for( let i = 1; i <= 10; i++ ){
  //     console.log( `${i} - ${11 - i}` )
  // }

  // NUMEROS IMPARES DEL 1 AL 30
  let count = 0;

  for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
      count += 1;
    }
  }

  return count;
};

let resultado = saludarDiezVeces();
console.log(resultado);

// 1 - 10
// 2 - 9
// 3- 8
// 4- 7
// 5- 6
// 6- 5
// 7- 4
// 8-3
// 9-2
// 10-1
console.log("----------------");
const contarHastaDiez = () => {
  // for( let i = 16; i <= 10 ; i++ ){
  //     console.log( i )
  // }

  // let i = 15
  // while( i <= 10 ){
  //     console.log( i )
  //     i++
  // }

  let i = 15; // 16

  do {
    console.log(i);
    i++;
  } while (i <= 10);
};

contarHastaDiez();

// CONTAR LOS NUMEROS DEL x A y ( va a ser el numero que recibimos por parametro )
console.log("----------------");

const contarHastaX = (inicio, fin) => {
  for (let i = inicio; i <= fin; i++) {
    console.log(i);
  }
};

contarHastaX(5, 7);
console.log("----------------");
contarHastaX(100, 110);

// Elaborar un programa que permita ingresar un número entero del 1 al 12
// y muestre la tabla de multiplicar de dicho número.

console.log("----------");

const tabla = (numero) => {
  if (numero < 1 || numero > 12 || numero % 1 !== 0) {
    console.log("el numero no es valido");
    return;
  }

  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} * ${i} = ${numero * i}`);
  }
};

const tabla2 = (numero) => {
  if (numero >= 1 && numero <= 12 && numero % 1 === 0) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} * ${i} = ${numero * i}`);
    }
  } else {
    console.log("el numero no es valido");
    return;
  }
};
tabla2(2.2);


// FUNCION QUE CALCULE EL PROMEDIO DE 3 NOTAS
// Y QUE DEVUELVA UN BOOLEANO DICIENDO SI APROBO O NO, ( 7 o mas )

const calcularPromedio = (n1, n2, n3)=>{

    let suma = n1 + n2 + n3
    let promedio = suma / 3
    let estaAprobado = promedio >= 7

    return estaAprobado
    
    // return estaAprobado ? true : false

    // if(estaAprobado){
    //     return true
    // }else{
    //     return false
    // }

}