var Nombre = prompt("ingrese el nombre del empleado");
var Mes = prompt("ingrese el mes en el que trabajo");
alert("el salario minimo del empleado es de $980.000");
var Auto = parseInt(prompt("Cuantos autos vendio"));
var Valor = parseFloat(prompt("ingrese el valor del auto"));

function Total(total) {

  var Comision = Auto * 170.0;
  var Bono = Valor * 0.5;
  var total = Comision * Bono + 980000;
  return total;
}

  console.log(
    "el empleado " +
      Nombre +
      " en el mes " +
      Mes +
      " tuvo un sueldo de " +
      Total());
