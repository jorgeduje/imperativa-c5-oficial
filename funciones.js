
// Funciones

let nombre = "jorge"

console.log( nombre )

// DECLARADAS

function sumar (numero1, numero2){
    // DELIMITAN EL BLOQUE DE CODIGO
    
    let resultado = numero1 +  numero2
    // return `El resultado de ${a} + ${b} es igual a ${resultado}`
    return resultado
    
}

let resultadoSuma1 = sumar( 1 , 2 )
console.log(resultadoSuma1)



let resultadoSuma2 = sumar( 12, 1)
console.log( resultadoSuma2)


function saludar (nombreDeUsuario){

    return `Hola ${nombreDeUsuario} como estas`
}

let saludo = saludar("maria")
console.log(saludo)

// EXPRESADAS  / comunes o flechas