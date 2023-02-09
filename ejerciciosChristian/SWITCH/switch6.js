var PreviosUno = parseFloat(prompt("ingrese la primera nota del previo"))
var PreviosDos = parseFloat(prompt("ingrese la segunda nota del previo"))
var PreviosTres = parseFloat(prompt("ingrese la tercera nota del previo"))

while (PreviosTres && PreviosDos && PreviosUno > 5){
    alert("debe ingresar un dato menor de 5")
    var PreviosUno = parseFloat(prompt("ingrese la primera nota del previo"))
var PreviosDos = parseFloat(prompt("ingrese la segunda nota del previo"))
var PreviosTres = parseFloat(prompt("ingrese la tercera nota del previo"))
}

Previo = (((PreviosUno + PreviosDos + PreviosTres)/3) * 60)/100

var TrabajosUno = parseFloat(prompt("ingrese la primera nota del trabajo"))
var TrabajosDos = parseFloat(prompt("ingrese la segunda nota del trabajo"))


while (TrabajosDos && TrabajosUno > 5){
    alert("debe ingresar un dato menor de 5")
    var TrabajosUno = parseFloat(prompt("ingrese la primera nota del trabajo"))
var TrabajosDos = parseFloat(prompt("ingrese la segunda nota del trabajo"))
}


Trabajo = (((TrabajosUno + TrabajosDos)/2) * 40)/100

Nota = Trabajo + Previo

if (Nota > 3){
    console.log("el estudiante aprobo la materia"+Nota)
}else {
    console.log("el estudiante no aprobo sacando una nota de" +Nota)
}


