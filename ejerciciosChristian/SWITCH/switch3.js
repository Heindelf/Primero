var Numero = parseInt(prompt("ingrese un digito"));

if (Numero <= 10) {
  switch (Numero) {
  case 0:
    console.log("Cero")
    break;
    case 1:
    console.log("Uno")
    break;
    case 2:
    console.log("Dos")
    break;
    case 3:
    console.log("Tres")
    break;
    case 4:
    console.log("Cuatro")
    break;
    case 5:
    console.log("Cinco")
    break;
    case 6:
    console.log("Seis")
    break;
    case 7:
    console.log("Siete")
    break;
    case 8:
    console.log("Ocho")
    break;
    case 9:
    console.log("Nueve")
    break;
    case 10:
    console.log("Diez")
    break;
    
    default:
      console.log("ERROR ,El digito que ingreso no dentro del rango de 1 a 10");
  }
} else {
  console.log("ERROR , El dato que ingreso no es un numero");
}
