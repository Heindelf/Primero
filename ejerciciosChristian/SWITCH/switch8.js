var PresupuestoAnual = parseFloat(
  prompt("Ingrese el ingreso anual del hospital en millones")
);
var Psiquiatria = parseFloat(
  prompt("ingrese el presupuesto asignado a psiquiatria")
);
var Pediatria = parseFloat(
  prompt("ingrese el porcentaje asignado a pediatria")
);
var Psicologia = parseFloat(
  prompt("ingrese el porcentaje asignado a psicologia")
);

while (Psiquiatria > 100) {
  alert("el porcentaje sobresale del 100% ingrese un porcentaje coherente");
  var Psiquiatria = parseFloat(
    prompt("ingrese el presupuesto asignado a psiquiatria")
  );
}
while (Pediatria > 100) {
  alert("el porcentaje sobresale del 100% ingrese un porcentaje coherente");
  var Pediatria = parseFloat(
    prompt("ingrese el porcentaje asignado a pediatria")
  );
}
while (Psicologia > 100) {
  alert("el porcentaje sobresale del 100% ingrese un porcentaje coherente");
  var Psicologia = parseFloat(
    prompt("ingrese el porcentaje asignado a psicologia")
  );
}

Total = Psicologia + Pediatria + Psiquiatria;

if (Total > 100) {
  while (Total > 100) {
    alert(
      "la suma porcentual no es coherente al 100% vuelva a ingresar los datos correctos"
    );
    var Psiquiatria = parseFloat(
      prompt("ingrese el presupuesto asignado a psiquiatria")
    );
    var Pediatria = parseFloat(
      prompt("ingrese el porcentaje asignado a pediatria")
    );
    var Psicologia = parseFloat(
      prompt("ingrese el porcentaje asignado a psicologia")
    );
  }

  console.log(
    "el presupuesto en millones asignado a psiquiatria es de" +
      PorcentajePsiquiatria +
      "  millones"
  );
  console.log(
    "el presupuesto en millones asignado a pediatria es de" +
      PorcentajePsiquiatria +
      "    millones"
  );
  console.log(
    "el presupuesto en millones asignado a psicologia es de" +
      PorcentajePsicologia +
      "    millones"
  );
} else if (Total > 0  && Total < 100) {
    
  while (Total > 0 && Total < 100) {
    alert(
      "los porcentajes no coinciden el 100% regrese a ingresar los datos de nuevo"
    );
    var Psiquiatria = parseFloat(
      prompt("ingrese el presupuesto asignado a psiquiatria")
    );
    var Pediatria = parseFloat(
      prompt("ingrese el porcentaje asignado a pediatria")
    );
    var Psicologia = parseFloat(
      prompt("ingrese el porcentaje asignado a psicologia")
    );
  }

  console.log(
    "el presupuesto en millones asignado a psiquiatria es de" +
      PorcentajePsiquiatria +
      "  millones"
  );
  console.log(
    "el presupuesto en millones asignado a pediatria es de" +
      PorcentajePsiquiatria +
      "    millones"
  );
  console.log(
    "el presupuesto en millones asignado a psicologia es de" +
      PorcentajePsicologia +
      "    millones"
  );

}else{
    PorcentajePsiquiatria = PresupuestoAnual * Psiquiatria/100
    PorcentajePediatria = PresupuestoAnual * Pediatria/100
    PorcentajePsicologia = PresupuestoAnual * Psicologia/100

    console.log("el presupuesto en millones asignado a psiquiatria es de"+ PorcentajePsiquiatria+"  millones")
    console.log("el presupuesto en millones asignado a pediatria es de"+ PorcentajePsiquiatria+"    millones")
    console.log("el presupuesto en millones asignado a psicologia es de"+ PorcentajePsicologia+"    millones")

}



