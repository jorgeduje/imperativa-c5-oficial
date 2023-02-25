
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



// EXPRESADAS o ANONIMAS  / comunes o flechas


const multiplicar = function (n1, n2){
    // BLOQUE DE CODIGO
    return n1 * n2
}

let resultadoMultiplicacion = multiplicar()

// HOISTING



// DECLARADAS Y EXPRESADAS

// function ladrar (){

// }

// const ladrar = function(){

// }

// function dividir (){

// }
// // EXPRESADAS COMUNES vs ARROW FUNCTION

// const dividir = function(){

// }

const dividir = (num1, num2)=>{
    return num1 / num2
}

let resultadoDivision =  dividir(20, 2) 
console.log( resultadoDivision )


// TODO ---> EJERCIO 4 DE PLAYGROUND


const anterior = ( numero )=>{

    return numero - 1

}

let res1 = anterior(20)
console.log( res1 )

const triple = (numero)=>{
    return numero * 3
}

let res2 = triple(5)
console.log(res2)


let anteriorDelTriple = ( numero )=>{

    // return (numero * 3) - 1

    // let resultadoTriple = triple(numero)
    // let resultadoAnterior = anterior(resultadoTriple)
    // return resultadoAnterior

    // let res = anterior( triple( numero )  )
    // return res 

    return anterior( triple( numero )  )

}

let res3 = anteriorDelTriple(5)
console.log(res3)



