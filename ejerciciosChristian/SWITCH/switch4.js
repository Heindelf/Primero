var Tiempo = parseInt(prompt("ingrese el tiempo que duro la llamada"));

if (Tiempo >3) {
 Adicional = Tiempo -3
 Totals = Adicional * 100
 Total =  Totals + 200
 console.log("la cantidad a pagar adicional es de "+Total)
} else {
  console.log("La cantidad a pagar es de 200");
}
