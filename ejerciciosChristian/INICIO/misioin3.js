var menu = "MENU\n";
menu += "1.definir cantidad de estudiantes \n";
menu += "2. registar datos de estudiantes \n";
menu += "3.mostrar lista de estudiantes\n";
menu += "4. imprimir nota de estudiantes\n";
menu += "5.acerca del autor \n";
menu += "6.salir \n";
menu += "MARQUE LA OPCION DESEADA";

var i = 0;
var i1 = 0;
var i2 = 0;

do {
  var opcion = parseInt(prompt(menu));
  if (opcion > 0 && opcion <= 6) {
    switch (opcion) {
      case 1:
        while (i1 < 1) {
          var cantidadEstudiantes = parseInt(
            prompt("ingrese la cantidad de estudiantes")
          );
          if (cantidadEstudiantes > 0) {
            console.log(`la cantidad de estudiantes es ${cantidadEstudiantes}`);
            i1++;
          } else {
            alert("ingrese un dato valido amigo");
          }
        }
        break;

      case 2:
        while (i2 < cantidadEstudiantes) {
          function datos() {
           let ar=[i2]
           ar.push(datos1)
            var nombre = prompt("ingrese su nombre");
            var nivel = prompt("ingrese su nivel");
            var codigo = prompt("ingrese su codigo");
            var datos1 = ` el nombre del estudiantes es ${nombre}  su nivel es ${nivel}  su codigo es ${codigo}`;

            return datos1;
          }
      
          i2++;

        }
        break;

      case 3:
        for (let i2 = 0;  < .length; index++) {
          const element = ;
          
        }
        break;

      case 4:
        console.log("la nota de los estudiantes es ");
        break;
      case 5:
        console.log("me llamo emerson molina ");
        break;
      case 6:
        i++;
      default:
    }
  } else {
    console.log("ingrese una opcion corecta");
  }
} while (i < 1);
