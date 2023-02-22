
// ANCHOR ---> VARIABLES --- caja que guarda algo

let nombreDeUsuario = 'Jorge' // o "Jorge"

/*

sada
dsadas
asdadsa
dsadsa
dsad
*/

const id = "12312dasdas1231"

console.log( nombreDeUsuario )

nombreDeUsuario = "pepito"
nombreDeUsuario = "juancito"

console.log( nombreDeUsuario )

// console.log(apellido)

// apellido = "Gonzalez" // NO SE PUEDE POR QUE ESTA CON CONST

// LINK --- TIPOS DE DATOS

// ANCHOR ---> strings = cadena de caracteres o cadena de texto

let frase = "Hola como estas?"

// ANCHOR ---> number = numeros

let edad = 30 // enteros
let precio = 10.5 // decimales

console.log( precio )


// ANCHOR ---> booleanos = boolean

let estaLogeado = true // false

let estaCasado = false
let tieneMascotas = true

// ANCHOR ---> undefined

let email = undefined

console.log(email)

// null
// NaN

// OPERADORES Matematicos

let nombre = "juancito"
let apellido = "lopez"

let nombreCompleto = nombre + " " + apellido
let saludo = "Hola" + " " + nombre + " " + "como estas?"
let saludo2 = `Hola ${nombre} como estas?`

console.log( saludo )
console.log( saludo2 )

let num1 = 10
let num2 = 3

let suma = num1 + num2
let multi = num1 * num2
let division = num1 / num2
let resta = num1 - num2
let modulo = num1 % num2 // ---> Me devuelve el resto

console.log(suma)
console.log(multi)
console.log(division)
console.log(resta)
console.log(modulo)
console.log("-------------------")
console.log("-------------------")
console.log("-------------------")
// OPERADORES DE COMPARACION ---> devuelven es un booleano

let n1 = 15
let n2 = 125

let nombre1 = "pepito"
let nombre2 = "juancito"

 console.log( n1 < n2 ) // Menor que
 console.log( n1 > n2 ) // Mayor que
 console.log( n1 <= n2 ) // Menor o igual que
 console.log( n1 >= n2 ) // Mayor o igual que
 console.log( n1 == n2 ) // Igual que
 console.log( n1 != n2 ) // Distinto que

// COMPARACION SIMPLE ---> solo evalua el valor, Y NO EL TIPO DE DATO
 console.log(nombre1 == nombre2) 
 console.log(nombre1 != nombre2)

 let a = "12"
 let b = 12
 console.log( a != b )

 // COMPARACION ESTRICTA ---> evalua el valor pero TAMBIEN EL TIPO DE DATO

 console.log( a === b )
 console.log( a !== b )

 console.log("--------------")
 let esMayor = false
 console.log( !esMayor )


 let j = 1
 let m = 2
 console.log("--------------")

 console.log( !(1 > 2) )

// OPERADORES LOGICOS

// AND ---> &&
// OR  ---> ||

// QUIERO QUE ME DEVUELVA TRUE, SI SE CUMPLEN LAS 2
console.log("--------------")

console.log(  1 < 5 && 10 < 21  && 1 < 2  ) // DEVUELVE TRUE SI TODOS CUMPLEN


console.log( 1 > 2 || 1 < 2 || 10 == 21 ) // DEVUELVE TRUE SI POR LO MENOS UNO ES TRUE

