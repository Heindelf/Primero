function suma(Suma) {
  alert("ingrese los numeros que quiera y si desea detenerse ingrese 0");
  var numeroSuma = 1;
  var contador = 0;
  var i = 0;
  while (numeroSuma != 0) {
    i++;
    var numeroSuma = parseFloat(prompt(`ingrese el numero ${i}`));
    contador = numeroSuma + contador - 1;
  }
  Suma = contador;
  return Suma;
}

function resta(Resta) {
  alert("ingrese los numeros que quiera y si desea detenerse ingrese 0");
  var numeroResta = 1;
  var contadorResta = 0;
  var i = 0;
  while (numeroResta != 0) {
    i++;
    var numeroResta = parseFloat(prompt(`ingrese el numero ${i}`));
    contadorResta = numeroResta - contadorResta - 1;
  }
  Resta = contadorResta;
  return Resta;
}

function multiplcacion(Multiplcacion) {
  alert("ingrese los numeros que quiera y si desea detenerse ingrese 0");
  var numeroMultiplicacion = 1;
  var contadorMultiplicacion = 1;
  var i = 0;
  while (numeroMultiplicacion != 0) {
    i++;
    var numeroMultiplicacion = parseFloat(prompt(`ingrese el numero ${i}`));
    contadorMultiplicacion = numeroMultiplicacion * contadorMultiplicacion;
  }
  Multiplcacion = contadorMultiplicacion;
  return Multiplcacion;
}

function division(Division) {
  alert("ingrese los numeros que quiera y si desea detenerse ingrese 0");

  var numeroDivision = 1;

  var contadorDivision = 0;
  var i = 0;
  while (numeroDivision != 0) {
    i++;
    var numeroDivision = parseFloat(prompt(`ingrese el numero ${i}`));
    contadorDivision = numeroDivision / contadorDivision;
  }
  Division = contadorDivision;
  return Division;
}
do {
  opcion = Number(
    prompt(`
    0- SUMAR \n
    1- RESTAR 
    2-MULTIPLICAR\n
    3- DIVIDIR
    4-SALIR`)
  );

  switch (opcion) {
    case 0:
      console.log("el resultado que dio fue de : " + suma());
      break;
    case 1:
      console.log("el resultado que dio fue de : " + resta());
      break;
    case 2:
      console.log("el resultado que dio fue de : " + multiplcacion());
      break;
    case 3:
      console.log("el resultado que dio fue de : " + division());
      break;

    default:
      alert("gracias por usar nuestra calculadora");
      break;
  }
} while (opcion != 4);
