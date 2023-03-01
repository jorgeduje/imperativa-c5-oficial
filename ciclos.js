
//ANCHOR Estructuras de repeticion ---> for / while / do while

// 10 veces un console.log que diga "hola"

console.log("hola")

const saludarDiezVeces = ()=>{

    
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
    let count = 0

    for( let i = 1; i <= 10;  i++ ){
        if( i % 2 !== 0 ){
            count += 1
        }
    }

    return count

}

let resultado = saludarDiezVeces()
console.log( resultado )

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