// Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
// Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.
// Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué:
// total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.


//Iniciamos el ejercicio propuesto
const precioCoche = 0.20;
const precioMoto = 0.10;
const precioBus = 0.5;
const precioBase = 5;
const precioExtra = 10;
const limite = 100;
totalPago = 0;
precio = 0;
//agregamos un campo de entrada:
let vehiculo = prompt("Bienvenido al servicio de renta de vehículos,\n por favor ingrese el tipo de vehículo que ha utilizado:\n 1. Coche \n2. Moto \n3.Autobus");
//agregamos un multicondicional para definir el precio del kilometraje de acuerdo con el vehículo
vehiculo = vehiculo.toLowerCase()
if(vehiculo=="coche"||vehiculo=="moto"||vehiculo=="autobus"){
    switch(vehiculo){
        case "coche": precio = precioCoche; break;
        case "moto": precio = precioMoto; break;
        case "autobus": precio = precioBus;break;
     }
     let distancia = parseInt(prompt("por favor ingrese su distancia recorrida"));
     if (distancia<101&&distancia>0){
    totalPago = (distancia*precio)+precioBase;
    window:alert(`el total a pagar es de: $${totalPago.toFixed(2)}`);
     }
     else if(distancia>100){
    totalPago = (distancia*precio)+precioExtra;
    window:alert(`el total a pagar es de: $${totalPago.toFixed(2)}`);
     }
}else{window:alert("el vehículo que especificaste no es válido");
}

