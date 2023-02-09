var Nombre = prompt("ingrese el nombre del empleado")
var Mes = prompt("ingrese el mes en el que trabajo")
alert ("el salario minimo del empleado es de $980.000")
var Auto = parseInt(prompt("Cuantos autos vendio"))
var Valor = parseFloat(prompt("ingrese el valor del auto"))  



if(Number(Auto && Valor)){
    
var Comision = Auto*170.000
var Bono = Valor*0.5
var Total = Comision*Bono+980.0000
console.log("el empleado "+Nombre+" en el mes "+Mes+" tuvo un sueldo de "+Total);
}
else if(isNaN(Auto && Valor)){
console.log("esto no es un numero");

}
