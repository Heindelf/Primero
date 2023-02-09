var Numero = parseInt(prompt("ingrese un dato"));

if (Numero <= 10) {
  switch (Numero) {
    case 2:
    case 4:
    case 6:
    case 8:
    case 10:
      console.log("su dato es par");
      break;

    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
      console.log("su dato es impar");
      break;

    default:
      console.log("el dato no esta dentro de los valores");
  }
} else {
  console.log("ingrese un dato menor a 10");
}
