var nombre = "christian"
var año = 21
var nacimiento = "Sogamoso"
console.log("el estudiante : "+nombre+"  tiene : "+año+"  años y nacio en :"+nacimiento)

const num = parseInt(prompt("ingrese un numero aber si de ahuevo o no"))

if (num ==3){
    console.log('ahuevo');
}else{
    console.log('no ahuevo');
}

//-----------------------------------------------------------------------/////////
//PRIMER EJERCICIO

var a = parseInt(prompt("ingrese el primer digito"))
var b = parseInt(prompt("ingrese el segundo digito"))
var c = parseInt(prompt("ingrese el tercer digito"))

while (a == b || a== c || b==c) {
alert("no puede ingresar datos iguales vuelva a ingresarlos")
 a = parseInt(prompt("ingrese el primer digito"))
 b = parseInt(prompt("ingrese el segundo digito"))
 c = parseInt(prompt("ingrese el tercer digito"))
}
if (a > b){
    alert("el primer dato es mayor y el segundo menor")
}else if (b >a){
    alert("el segundo dato es mayor y el primero es menor")
}else if(b >c){
alert("el segundo dato es mayor que el tercero")
 } else if(c > b){
    alert("el tercer dato es mayor que el segundo")
}else if (a >c){
    alert("el primer dayo es mayor que el tercero")
}else if (c > a){
    alert("el tercer dato es mayor que el primero")
}else{
    alert("ERROR")
}

////------------------------------------------------------------//////
// SEGUNDO EJERCICIO

var base = parseFloat(prompt("ingrese la base del triangulo"))
var altura = parseFloat(prompt("ingrese la altura del triangulo"))
var base2;
while (base == altura){
   alert("no pueden ser del mismo digitos la base y altura regrese a ingresar los datos de nuevo")
   var base = parseFloat(prompt("ingrese la base del triangulo"))
   var altura = parseFloat(prompt("ingrese la altura del triangulo"))
}

if (base > 5 && altura >4){
Area = (base * altura) /2
alert("el area del triangulo es de : "+Area)
}else{
    base2 = base*2+10
    alert("la base es de : "+base2)
}

/////---------------------------------------------------------------------/////
// TERCER PUNTO

var numeroParImpar = parseInt(prompt("Ingrese un numero"))

if (numeroParImpar%2==0){
alert("el numero : "+numeroParImpar+" es par")
}else{
    alert("el numero : "+numeroParImpar+" es impar")
}

////------------------------------------------------------------------/////////
// CUARTO PUNTO

var Calificacion = parseInt(prompt("INGRESE UN DATO PARA CALIFICAR"))
var Estudiante = prompt("ingrese el nombre del estudiante")

while (isNaN(Calificacion)){
alert("no puede ingresar datos que no sean numericos,porfavor vuelva a ingresar un dato valido")
 Calificacion = parseInt(prompt("INGRESE UN DATO PARA CALIFICAR"))
}
while (Calificacion > 20){
    alert("Las notas solo son calificables de 1 a 20,vuelva a ingresar los datos")
     Calificacion = parseInt(prompt("INGRESE UN DATO PARA CALIFICAR"))
    }
if (Calificacion <=9){
alert("el estudiante "+Estudiante+" tuvo una nota E por ende reprobo")
}else if (Calificacion ==10 || Calificacion == 11 || Calificacion == 12){
    alert("el estudiante "+ Estudiante + " tuvo una nota D por ende reprobo")
}else if (Calificacion ==13 || Calificacion == 14 || Calificacion == 15){
    alert("el estudiante "+ Estudiante + " tuvo una nota C por ende aprobo")
}else if (Calificacion ==16 || Calificacion == 17 || Calificacion == 18){
    alert("el estudiante "+ Estudiante + " tuvo una nota B por ende aprobo superior al minimo pasable")
}else if (Calificacion ==19 || Calificacion == 20){
    alert("el estudiante "+ Estudiante + " tuvo una nota A por ende aprobo con excelencia")
}else{
    alert("ERROR")
}

/////----------------------------------------------------------------//////
// QUINTO PUNTO

var multiplo1 = parseInt(prompt("ingrese el primer digito"))
var multiplo2 = parseInt(prompt("ingrese el segundo digito"))

residuo = multiplo2 % multiplo1
if (residuo == 0){
     alert("son multiplos")
}else{
    alert("no son multiplos")
}

////------------------------------------------------------------------///////////
// SEXTO PUNTO

var primero = parseInt(prompt("ingrese el digito que desea saber"))

if (primero == 0 ){
   alert("el digito es cero")
}else if (primero > 0){
alert("el digito es positivo")
}else {
    alert("el digito es negativo")
}

/////////-----------------------------------------------------------------//////////
// SEPTIMO PUNTO
