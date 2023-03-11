// let obj = {
//     nombre: "pepito",
//     edad: 21
// }

// // console.log( obj.nombre )
// // console.log( obj["nombre"] )

// const verPropiedad = ( laPropiedad )=>{
//     console.log( obj[laPropiedad] )
// }

// verPropiedad("edad")

let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "pepito",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "maria",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "juancito",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "carmen",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jack",
  },
];

let banco = {
  clientes: arrayCuentas,
  consultarCliente: function (nombreDelTitular) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].titularCuenta === nombreDelTitular) {
        return this.clientes[i];
      }
    }
    return "lo siento el cliente no existe";
  },
  deposito: function (nombre, cantidad) {
    let cliente = this.consultarCliente(nombre);
    cliente.saldoEnPesos = cliente.saldoEnPesos + cantidad;
    if (typeof cliente !== "string") {
      return `deposito realizado, su nuevo saldo es ${cliente.saldoEnPesos}`;
    } else {
      return "lo siento el cliente no existe";
    }

    // let cliente = this.consultarCliente(nombre)
    // cliente.saldoEnPesos = cliente.saldoEnPesos + cantidad
    // console.log(`deposito realizado, su nuevo saldo es ${cliente.saldoEnPesos}`)
  },
  extraccion: function (nombre, cantidad) {
    let cliente = this.consultarCliente(nombre);

    if ( cliente.saldoEnPesos >= cantidad && typeof cliente !== "string" ) {
      cliente.saldoEnPesos -= cantidad;
      return `La extraccion se realizo y el nuevo saldo de ${cliente.titularCuenta}
       es ${cliente.saldoEnPesos}`;
    }else{
        return  typeof cliente !== "string" ? "No tiene saldo suficiente" : "Cliente no encontrado" ;
    }

  },
};



let ticket2 = banco.extraccion("pepito", 10000);
console.log(ticket2);
