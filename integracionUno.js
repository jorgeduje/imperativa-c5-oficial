// ANCHOR ---> Repaso de condicionales y ciclos
// ANCHOR ---> Repaso de arreglos y objetos

// const productos = require("./db.json")


let productos = [
  {
    nombre: "motorola",
    precio: 40,
    cantidad: 5,
    categoria: "telefonia",
  },
  {
    nombre: "notebook",
    precio: 80,
    cantidad: 10,
    categoria: "computacion",
  },
  {
    nombre: "zapatilla",
    precio: 20,
    cantidad: 2,
    categoria: "indumentaria",
  },
  {
    nombre: "Macbook",
    precio: 100,
    cantidad: 7,
    categoria: "computacion",
  },
  {
    nombre: "samsung",
    precio: 60,
    cantidad: 15,
    categoria: "telefonia",
  },
  {
    nombre: "monitor",
    precio: 30,
    cantidad: 5,
    categoria: "computacion",
  },
];

// TODO ---> Simulacion frontend E-commerce

/* 
1)Las personas encargadas del backend nos enviaron una lista de productos pero 
    se olvidaron de asignarles un ID unico para cada producto,
    nuestra tarea es agregarles ese ID unico a cada uno
    Requisito: debe empezar en 1 y ser secuencial 
2) Nos solicitan crear un algoritmo que pueda determinar el dinero total que ingresaria
    si se venden todos los productos que tenemos en stock
3) Debemos crear una funcion que al ejecutarse filtre los productos que sean
    X categoria y retornar dichos productos en un nuevo arreglo(debe ser dinamica)
4) Por ultimo debemos crear una funcion para poder aumentar el precio de una categoria
    especifica que recibiremos por parametros y tambien recibiremos por cuanto queremos
    multiplicar dicho precio
*/

const generadorDeId = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].id = i + 1;
  }
};

generadorDeId(productos);
console.log(productos);

const calcularTotal = (arreglo) => {
  let total = 0; // 10 // 35
  for (let i = 0; i < arreglo.length; i++) {
    total += arreglo[i].cantidad * arreglo[i].precio;
  }

  return total;
};

let totalVendido = calcularTotal(productos);
console.log(totalVendido);

// let persona = {
//     nombre: "",
// }

// persona.edad = 12
// persona.nombre = "algo"
// 3) Debemos crear una funcion que al ejecutarse filtre los productos que sean
// X categoria y retornar dichos productos en un nuevo arreglo(debe ser dinamica)

const filtarPor = (arr, categoria) => {
  let arrayFiltrado = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].categoria === categoria) {
      arrayFiltrado.push(arr[i]);
    }
  }

  return arrayFiltrado;
};

let productosDeTelefonia = filtarPor(productos, "telefonia");
console.log(productosDeTelefonia);

let produictosDeComputacion = filtarPor(productos, "computacion");
console.log(produictosDeComputacion);

const incrementarPrecioTelefonia = (arr, categoria, porcentaje) => {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].categoria === categoria) {
      arr[i].precio *= porcentaje
    }
  }

}

incrementarPrecio( productos, "telefonia", 1.15 )

console.log(productos)