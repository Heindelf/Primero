alert ("se calificaran 3 materias en el siguiente orden matematicas,fisica y quimica")
////////////////////////////////////////////////////////////////////////////////////////////////////
alert ("ingrese las notas generales de matematicas")

var  matematicasExamen = parseFloat(prompt("ingrese la nota de examen que representa el 90%"))

Examen = (matematicasExamen*90)/100

var matematicasTarea1 = parseFloat(prompt("ingrese la primera nota de tarea que representa el 10%"))
var matematicasTarea2 = parseFloat(prompt("ingrese la segunda nota de tarea que representa el 10%"))
var matematicasTarea3 = parseFloat(prompt("ingrese la tercera nota de tarea que representa el 10%"))

Tarea = (matematicasTarea1+matematicasTarea2+matematicasTarea3*10)/100

Matematica = Examen+Tarea
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
alert("ingrese las notas generales de fisica")

var  fisicaExamen = parseFloat(prompt("ingrese la nota de examen que representa el 80%"))

Examenf = (fisicaExamen*80)/100

var fisicaTarea1 = parseFloat(prompt("ingrese la primera nota de tarea que representa el 20%"))
var fisicaTarea2 = parseFloat(prompt("ingrese la segunda nota de tarea que representa el 20%"))
var fisicaTarea3 = parseFloat(prompt("ingrese la tercera nota de tarea que representa el 20%"))

Tareaf = (fisicaTarea1+fisicaTarea2+fisicaTarea3*20)/100

Fisica = Examenf+Tareaf

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

alert("ingrese las notas generales de quimica")

var  quimicaExamen = parseFloat(prompt("ingrese la nota de examen que representa el 85%"))

Examenq = (quimicaExamen*85)/100

var quimicaTarea1 = parseFloat(prompt("ingrese la primera nota de tarea que representa el 15%"))
var quimicaTarea2 = parseFloat(prompt("ingrese la segunda nota de tarea que representa el 15%"))
var quimicaTarea3 = parseFloat(prompt("ingrese la tercera nota de tarea que representa el 15%"))

Tareaq = (quimicaTarea1+quimicaTarea2+quimicaTarea3*15)/100

Quimica = Examenq+Tareaq

////////////////////////////////////////////////////////////////////////////////////////////////////////////


if(Matematica > 3){
    console.log("el alumno curso matematicas satisfactoriamente")
    
    }else{
        console.log("el alumno no paso la materia de matematicas")
    }
    
    if(Fisica > 3){
        console.log("el alumno curso Fisica satisfactoriamente")
        
        }else{
            console.log("el alumno no paso la materia de Fisica")
        }
        if(Quimica > 3){
            console.log("el alumno curso quimica satisfactoriamente")
            
            }else{
                console.log("el alumno no paso la materia de quimica")
            }
            
          






