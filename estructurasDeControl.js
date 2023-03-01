// CONDICIONALES

// IF - TERNARIO - SWITCH

// SCOPE - ALCANCE  ( LOCAL )
// let determinarSiEsMayor = ( edadUsuario )=>{
//     // DEVOLVER UN BOOLEANO EN BASE A SI ES MAYOR O NO
//     // el usuario es menor / mayor de edad

//     // let palabra = ""

//     if( edadUsuario > 18){
//         return "el usuario es mayor"
//     }else if( edadUsuario === 18){
//         return "el usuario esta en la edad justa"
//     }else{
//         return "el usuario es menor"
//     }

//     // return `El usuario es ${palabra} de edad`

// }

// let pepitoEsMayor = determinarSiEsMayor(12)
// console.log(pepitoEsMayor)

// let juancitoEsMayor = determinarSiEsMayor(30)
// console.log(juancitoEsMayor)

// const probarScope = ()=>{
//     let nombre = "pepito"

//     if(true){

//         nombre = "juancito"
//     }

// }

// probarScope()
// console.log(nombre)

// hasta el 5 quiero que devuelva "menor que 5"
// 6 al 20 quiero que devuelva "numero entre el 5 y el 20"
// 20 al 50 quiero que devuelva "numero entre 20 y 50"
// mayores o iguales a 50 "el numero ya es muy grande"

const probandoIf = (numero) => {
  if (numero <= 5) {
    return "es menor que 5";
  } else if (numero <= 20) {
    return "numero esta entre el 5 y el 20";
  } else if (numero < 50) {
    return "el numero esta entre el 20 y el 50";
  } else {
    return " el numero es muy grande";
  }
};

let resultadoNumero = probandoIf(70);
console.log(resultadoNumero);

/// TERNARIO
let determinarSiEsMayor = (edadUsuario) => {
  // DEVOLVER UN BOOLEANO EN BASE A SI ES MAYOR O NO  >= 18

  // if( edadUsuario >= 18){
  //     return true
  // }else{
  //     return false
  // }

  // CONDICION ? lo verdadero : lo falso

  let esMayor =
    edadUsuario >= 18 ? "el usuario es mayor" : "el usuario es menor";

  return esMayor;
};

let pepitoEsMayorOno = determinarSiEsMayor(11);
console.log(pepitoEsMayorOno);

// if( marcaAuto === "renault"){
//     // impuesto += 200
//     impuesto = impuesto + 200
// }else if( marcaAuto === "audi"){
//     impuesto = impuesto + 500
// }else if( marcaAuto === "vw"){
//     impuesto = impuesto + 400
// }
const calcularImpuesto = (marcaAuto) => {
  let impuesto = 1000;

  switch (marcaAuto) {
    case "renault":
      return impuesto + 200;
    case "vw":
      return impuesto + 100;
    case "audi":
      return impuesto + 400;
    case "volvo":
      return impuesto + 300;
    default:
      return "La marca de este auto esta excenta";
  }

  
};

let totalImpuesto = calcularImpuesto("audi");
console.log(totalImpuesto);
