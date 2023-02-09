alert(" usuario porfavor digite su capital en la terminal porfavor")
var Capital = parseFloat(prompt("Capital"))
alert(" Por cada mes la capital aumenta 1.2%")
var Mes = parseFloat(prompt("Ingrese cuantos meses desea almacenar su capital"))
var Porcentaje = (Mes *1.2)
var Ganancia = (Capital * Porcentaje)

if(Number.isFinite(Capital)){
console.log("ese valor para la capital no es valida")
}else if(Number.isInteger(Mes)){

    console.log("ese valor en meses no es valido")

}else{
    console.log ("Las ganancias esperadas son de :"+Ganancia+"$");
}


