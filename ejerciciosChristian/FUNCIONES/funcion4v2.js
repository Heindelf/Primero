

function suma(Suma) {
    var numeroSuma = 1;
 
    var contador = 0;
    var i =0;
    var numeroSuma = parseFloat(prompt(`ingrese el numero ${i}`))
    alert("ingrese los numeros que quiera y si desea detenerse ingrese 0")

    while(numeroSuma !==0){
        i++
        var numeroSuma = parseFloat(prompt(`ingrese el numero ${i}`))
contador = numeroSuma + contador -1
break;
    }
    Suma = contador;
  return Suma;
}

function resta(Resta) {
  Resta = A - B;
  return Resta;
}
function multiplcacion(Multiplcacion) {
  Multiplcacion = A * B;
  return Multiplcacion;
}
function division(Division) {
  Division = A / B;
  return Division;
}
do {
  opcion = Number(prompt(`
    0- SUMAR \n
    1- RESTAR 
    2-MULTIPLICAR\n
    3- DIVIDIR
    4-AGREGAR UNA EJECUCUON ADICIONAL
    5-SALIR`));

  switch (opcion) {
    case 0:
    console.log(suma());
        alert("la suma que de los digitos que usted es  :" + suma());
      break;
    case 1:
        alert("la suma que de los digitos que usted es  :" + resta());
      break;
    case 2:
        alert("la suma que de los digitos que usted es  :" + multiplcacion());
      break;
    case 3:
        alert("la suma que de los digitos que usted es  :" + division());
      break;
    case 4:
        var A = parseFloat(prompt("ingrese el dato que desea suma"));
        var B = parseFloat(prompt("ingrese el dato que desea suma"));

        break;
    default:
      alert(
        "el dato no es numerico o no se puede realizar la ejecucion aritmetica"
      );
      break;
  }
} while (opcion != 5);
