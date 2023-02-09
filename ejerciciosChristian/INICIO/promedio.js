alert("el 60% proviene de dos evaluaciones y el 40% de dos trabajos hechos en casa")
var evaluacion1 = parseFloat(prompt("ingrese la primera nota de evaluacion"))
var evaluacion2 = parseFloat(prompt("ingrese la segunda nota de evaluacion"))

var evaluacion = (evaluacion1+evaluacion2*60)/100

var tarea1 = parseFloat(prompt("ingrese la primera nota de trabajo"))
var tarea2 = parseFloat(prompt("ingrese la segunda nota de trabajo"))

var tarea = (tarea1+tarea2*40)/100

var total = tarea+evaluacion

if (Number.isFinite(evaluacion1) && (evaluacion1 >5)){
    console.log("ingrese un valor calificable");

}else if (Number.isFinite(evaluacion2)&& (evaluacion2 >5)){
  console.log("ingrese un valor calificable")

}else if (Number.isFinite(tarea1)&& (tarea1 >5)){
    console.log("ingrese un valor calificable")
}else if (Number.isFinite(tarea2)&& (tarea2 >5)){
    console.log("ingrese un valor calificable")
}else{
    console.log("la nota total del estudiante es de: "+total);

}

