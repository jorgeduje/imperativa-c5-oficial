// ANCHOR ---> objetos literales

// arr
let nombres = ["a", "b", "c"];

// obj
// propiedades (caracteristicas) y metodos(acciones)
// pares de clave : valor

// CREACION DEL OBJETO
let persona = {
  nombre: "pepito",
  direccion: {
    calle: "españa",
    numeor: 22,
  },
  mascotas: ["jack", "lola", "rojo"],
  edad: 22,
  esCasado: true,
  hablar: function () {
    return `Hola como estas, mi nombre es ${this.nombre}`;
  },
  correr: function () {
    return "estoy corriendo";
  },
};

console.log(persona.edad);
console.log(persona.hablar());

let personas = [{}, {}, {}];

// MODIFICAR O AGREGAR PROPIEDADES O METODOS

// MANIPULAR UN OBJETO
console.log(persona);

persona.dni = 55555555;
persona.apellido = "perez";
persona.dormir = function () {
  return `estoy durmiendo y me llamo ${this.nombre}`;
};

console.log(persona.dormir());

persona.nombre = "juancito";

console.log(persona);

// ELIMINAR PROPIEDADES DE LOS OBJETOS

delete persona.apellido;

console.log(persona);

// LISTADO DE ALUMNOS (2)
// CADA ALUMNO DEBE TENER NOMBRE, NOTAS, UN METODO CALCULAR EL PROMEDIO
// SI TIENE 7 o mas ESTA APROBADO
let alumnos = [
  {
    nombre: "pepito",
    notas: [2, 4, 6],
    calcularPromedio: function () {
      let suma = 0;
      for (let i = 0; i < this.notas.length; i++) {
        suma = suma + this.notas[i];
      }
      return suma / this.notas.length;
    },
    estaAprobado: function () {
      let promedio = this.calcularPromedio();
      if (promedio >= 7) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    nombre: "maria",
    notas: [9, 8, 10],
    calcularPromedio: function () {
      let suma = 0;
      for (let i = 0; i < this.notas.length; i++) {
        suma = suma + this.notas[i];
      }
      return suma / this.notas.length;
    },
    estaAprobado: function () {
      let promedio = this.calcularPromedio();
      if (promedio >= 7) {
        return true;
      } else {
        return false;
      }
    },
  },
];

const determinarPromedios = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(
      `el promedio de ${arr[i].nombre} es de ${arr[i].calcularPromedio()}
       por lo tanto esta ${arr[i].estaAprobado() ? "aprobad@" : "desaprobad@"}`
    );
  }
};

determinarPromedios(alumnos);


