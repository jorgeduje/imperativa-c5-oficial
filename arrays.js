
// ANCHOR ---> Arrays

// let num1 = 1
// let num2 = 17
// let num3 = 29
// let num4 = 32

let numerosDeLaSuerte = [ 1, 17, 29, 32 ]

// let nombre1 = "Jack"
// let nombre2 = "pepito"
// let nombre3 = "lola"

let nombreDeMascotas = [ "Jack", "pepito", "juancito", "maria", "carmen" ]


// console.log(nombreDeMascotas)

const recorrerArr = ( arr )=>{

    for( let i = 0 ; i < arr.length ; i++ ){
        console.log( arr[i] )
    }

}

recorrerArr(nombreDeMascotas)
recorrerArr(numerosDeLaSuerte)


let frase = "hola como estas?"
console.log( frase[2] )
recorrerArr(frase)

let palabra = "mochilai"

console.log("indiceeeeeeeeeeeee")
console.log( palabra.indexOf("z") !== -1 )
console.log( palabra.lastIndexOf("i") )


console.log( nombreDeMascotas.indexOf("juancito") )

let nuevoArr = frase.split(" ")
console.log(nuevoArr)

let nombre = "jorge"

console.log( nombre.trim() )

console.log( nombre.toUpperCase() )

let nuevoArr2 = frase.split(" ")
console.log(nuevoArr2)

let nuevoString = nuevoArr.join(" ")
console.log(nuevoString)


// [ 1, 17, 29, 32 ]

console.log( numerosDeLaSuerte.includes(219) )

let palabras = ["casa", "escoba", "auto"]

palabras.push("moto", "perro", "gato")


console.log(palabras)

let a = palabras.pop()
console.log(palabras)
console.log(a)

let array = [ 12, 15, 3, 21 ] // 21 3 15 12

// nuevo arreglo pero invertido


let invertirArray = ( arr )=>{

    let arrayInvertido = []
    let longitud = arr.length
    
    for(let i = 0; i < longitud ; i++ ){

        arrayInvertido.push( arr.pop() )

    }

    return arrayInvertido

}

let res = invertirArray(array)
console.log(res)


let numeritos = [ 12, 51, 11, 88, 120 ]

const calcularTotal = (arr)=>{

    let acumulador = 0 

    for( let i = 0 ; i < arr.length ; i++ ){
        // acumulador += arr[i]
        acumulador = acumulador + arr[i]
    }

    return acumulador

}

let total = calcularTotal(numeritos)
console.log( total )
