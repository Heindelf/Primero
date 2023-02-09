let examen1 = 0;let examen2 = 0;let examen3 = 0;let examenDefinitivo = 0;let trabajo1 = 0;let trabajo2 = 0;let autoevaluacion = 0;let coevaluacion = 0;let error = 0;
var examen = parseFloat( prompt("ingrese la calificacion del estudiante del primer examen"));
if (Number(examen >= 0) && examen <= 5.0) {
  examen1 = examen;
} else {
  alert("el dato no corresponde al rango de calificacion");error++;
}
var examen = parseFloat(
  prompt("ingrese la calificacion del estudiante del segundo examen")
);
if (Number(examen >= 0 && examen <= 5.0)) {
  examen2 = examen;
} else {
  alert("el dato no corresponde al rango de calificacion");error++;
}
var examen = parseFloat(
  prompt("ingrese la calificacion del estudiante del tercer examen")
);
if (Number(examen >= 0 && examen <= 5.0)) {
  examen3 = examen;
} else {
  alert("el dato no corresponde al rango de calificacion");error++;
}
total = ((examen1 + examen2 + examen3) / 3) * 0.55;
console.log(
  "el promedio total en las notas de examen fue de : " +total +"y el total de notas errones son de : " +error
);
var notas = parseFloat(prompt("ingrese la calificacion del estudiante del primer trabajo"));
if (Number(notas >= 0 && notas <= 5.0)) {
  trabajo1 = notas;
} else {
  alert("el dato no corresponde al rango de calificacion"); error++;
}
var notas = parseFloat(prompt("ingrese la calificacion del estudiante del segundo trabajo"));
if (Number(notas >= 0 && notas <= 5.0)) {
  trabajo2 = notas;
} else {
  alert("el dato no corresponde al rango de calificacion");error++;
}
totalNotas = ((trabajo1 + trabajo2) / 2) * 0.15;
console.log("el promedio total en las notas de examen fue de : " + totalNotas);
var ExamenFinal = parseFloat(prompt("ingrese la calificacion del estudiante del examen final"));
if (Number(ExamenFinal >= 0 && ExamenFinal <= 5.0)) {
  examenDefinitivo = ExamenFinal;
} else {
  alert("el dato no corresponde al rango de calificacion");error++;
}
totalExamen = examenDefinitivo * 0.2;
console.log("el promedio del examen final es de :" + totalExamen);
var Aevaluacion = parseFloat(prompt("ingrese la autoevaluacion del estudiante"));
if (Number(Aevaluacion >= 0 && Aevaluacion <= 5.0)) {
  autoevaluacion = Aevaluacion;
} else {
  alert("el dato no corresponde al rango de calificacion");error++;
}
var Cevaluacion = parseFloat(prompt("ingrese la Co evaluacion del docente"));
if (Number(Cevaluacion >= 0 && Cevaluacion <= 5.0)) {
  coevaluacion = Cevaluacion;
} else { 
    alert("el dato no corresponde al rango de calificacion");error++;
}
totalAuto = ((Cevaluacion + Aevaluacion) / 2) * 0.1;
console.log(
  "el promedio total en las notas de examen fue de : " +totalAuto +"y el total de notas errones son de : " + error);
totalP = totalAuto + totalExamen + totalNotas + total;
totalPeriodo = totalP.toFixed(1);
if (Number(totalPeriodo >= 0 && totalPeriodo <= 1.9)) {
  console.log(
    "el estudiante obtuvo una nota de : " +totalPeriodo +" por lo cual su nota es muy baja, hubo " +error +" de notas mal ingresadas"
  );
} else if (Number(totalPeriodo >= 2.0 && totalPeriodo <= 2.9)) {
  console.log(
    "el estudiante obtuvo una nota de : " +totalPeriodo +" por lo cual su nota baja, hubo " +error +" de notas mal ingresadas"
  );
} else if (Number(totalPeriodo >= 3.0 && totalPeriodo <= 3.9)) {
  console.log(
    "el estudiante obtuvo una nota de : " +totalPeriodo +" por lo cual su nota es basica, hubo " +error +" de notas mal ingresadas"
  );
} else if (Number(totalPeriodo >= 4.0 && totalPeriodo <= 4.6)) {
  console.log(
    "el estudiante obtuvo una nota de : " +totalPeriodo +" por lo cual su nota es alta, hubo " +error +" de notas mal ingresadas"
  );
} else if (Number(totalPeriodo >= 4.7 && totalPeriodo <= 5.0)) {
  console.log(
    "el estudiante obtuvo una nota de : " +totalPeriodo +" por lo cual su nota es muy alta, hubo " +error +" de notas mal ingresadas"
  );
} else if (isNaN(totalPeriodo)) {
  alert(
    "hubo un error de calculo ya que usted ingreso :" + error +" de datos errones");
} else { alert("el codigo no pudo ejecutar la nota definitiva");}
