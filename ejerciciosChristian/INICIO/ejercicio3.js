alert(
  "ingrese los datos de las edades pesos de 20 personas de una zona habitacional"
);

let i = 1;
let edad = 0;
let pNiños = 0;
let nCantidad = 0;
let totalNiños = 0;
let pJovenes = 0;
let jCantidad = 0;
let totalJOvenes = 0;
let pAdultos = 0;
let aCantidad = 0;
let totalAdultos = 0;
let pViejos = 0;
let vCantidad = 0;
let totalViejos = 0;
0;
let errorCantidad = 0;
let promedioNiños, promedioJovenes, promedioAdultos, promedioViejos;

while (i <= 20) {
  ePersonas = parseInt(prompt(`ingrese la edad de la persona ${i}:`));
  if (ePersonas >= 0 && ePersonas <= 12) {
    pNiños = parseInt(prompt(`ingrese el peso del niño${i}`));
    totalNiños = pNiños + totalNiños;
    nCantidad++;
  } else if (ePersonas >= 12 && ePersonas <= 29) {
    pJovenes = parseInt(prompt(`ingrese el peso del joven${i}`));
    totalJOvenes = pJovenes + totalJOvenes;
    jCantidad++;
  } else if (ePersonas >= 29 && ePersonas <= 59) {
    pAdultos = parseInt(prompt(`ingrese el peso del adulto${i}`));
    totalAdultos = pAdultos + totalAdultos;
    aCantidad++;
  } else if (ePersonas >= 60) {
    pViejos = parseInt(prompt(`ingrese el peso del viejo${i}`));
    totalViejos = pViejos + totalViejos;
    vCantidad++;
  } else {
    alert("la edad no entra en ninguna categoria para ser promediada");
  }
  i++;

  promedioNiños = totalNiños / nCantidad;
promedioJovenes = totalJOvenes / jCantidad;
promedioAdultos = totalAdultos / aCantidad;
promedioViejos = totalViejos / vCantidad;
console.log(`Cantidad de Niños: ${nCantidad},
Cantidad de Jovenes: ${jCantidad},
Cantidad de Adultos: ${aCantidad},
Cantidad de Viejos: ${vCantidad},
Errores en la Edad Digitada ${errorCantidad}`);
console.log(`Promedio Peso de Niños: ${promedioNiños},
Promedio Peso de Jovenes: ${promedioJovenes},
Promedio Peso de Adultos: ${promedioAdultos},
Promedio Peso de Viejos: ${promedioViejos}`);

}

