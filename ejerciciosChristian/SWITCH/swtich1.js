alert ("ingrese dos datos")

var Uno =parseInt(prompt("Primer digito"))
var Dos =parseInt(prompt("Segundo digito"))

if  (Uno < Dos){

    console.log(Uno+","+Dos);

}else if (Uno > Dos){

    console.log(Dos+","+Uno);

}else{
    console.log("ingrese dos valores")
}