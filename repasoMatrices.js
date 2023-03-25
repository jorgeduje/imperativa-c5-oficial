let gastos = [
  // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
  // EL MES ES FEBRERO QUE TIENE 28 DIAS
  [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
  [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
  [1700, 1150, 1690, 1900, 1770, 4500, 2560], // semana 3
  [800, 1250, 1430, 2100, 1980, 1270, 950], // semana 4
];

//TODO
// CREANDO UNA FUNCION REUTILIZABLE...
// CALCULAR GASTO TOTAL DE LA TERCER SEMANA

const calcularTotalSemana = (matGastos, numSemana) => {
  let semana = numSemana - 1;

  let total = 0;

  for (let i = 0; i < matGastos[semana].length; i++) {
    total += matGastos[semana][i];
  }

  return total;
};

let totalSemanaTres = calcularTotalSemana(gastos, 3);
console.log(totalSemanaTres);

//TODO
// CREANDO UNA FUNCION REUTILIZABLE...
// QUEREMOS SABER EL TOTAL DE LO QUE SE GASTO SUMANDO TOD´OS LOS DIAS SABADOS
// ¿COMO LO HARIAS?

const calcularTotalDia = (matGastos, numDia) => {
  let dia = numDia - 1;
  let total = 0;

  for (let i = 0; i < matGastos.length; i++) {
    total += matGastos[i][dia];
  }

  return total;
};

let totalSabados = calcularTotalDia(gastos, 6);
console.log(totalSabados);

//TODO
// CALCULAR EL TOTAL GASTADO DEL MES

const calcularTotalMensual = (matGastos) => {
  let total = 0;

  for (let i = 0; i < matGastos.length; i++) {
    for (let j = 0; j < matGastos[i].length; j++) {
      total += matGastos[i][j];
    }
  }

  return total;
};

let totalFebrero = calcularTotalMensual(gastos);
console.log(totalFebrero);

// TODO
// EN EL DIA QUE MAS SE GASTO, CUANTO FUE ?
// EN QUE DIA Y SEMANA , SE PRODUJO ESE GASTO?

let gastos2 = [
  // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
  // EL MES ES FEBRERO QUE TIENE 28 DIAS
  [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
  [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
  [1700, 1150, 1690, 1900, 1770, 4500, 2560], // semana 3
  [800, 1250, 1430, 2100, 1980, 1270, 950], // semana 4
];

const encontrarMayor = (matGastos) => {
  let dias = [
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
    "domingo",
  ];
  let mayor = matGastos[0][0];
  let semana = 0;
  let dia = 0;

  for (let i = 0; i < matGastos.length; i++) {
    for (let j = 0; j < matGastos[i].length; j++) {
      if (mayor < matGastos[i][j]) {
        mayor = matGastos[i][j];
        semana = i;
        dia = j;
      }
    }
  }
  semana = semana + 1;
  dia = dias[dia];

  //   return `El dia que mas se gasto es el dia ${dia} que esta en la semana ${semana}
  //   con un total de $${mayor}`
  return {
    dia: dia,
    semana: semana,
    total: mayor,
  };
};

let diaMayor = encontrarMayor(gastos);
console.log(diaMayor);
