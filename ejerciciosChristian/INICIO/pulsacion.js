var edad = parseInt(prompt("ingrese la edad de la persona para saber cuantas pulsaciones debe tener cada 10 seg si hace ejercicio"))
numPulsacion = (200-edad)/10

if (Number.isInteger(edad)&&(edad>0)){
    console.log("las pulsaciones de la persona deben ser de : "+numPulsacion+"cada 10 seg")
}else{
    console.log("Ingrese un dato valido")
}
