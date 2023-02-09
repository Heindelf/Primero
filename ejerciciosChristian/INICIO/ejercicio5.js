let seleccion = parseInt(
  prompt(
    "ingrese 0 para ingresar datos para elefantes, 1 para jirafas o  2 para chimpances"
  )
);
let i = 1;

if (seleccion <= 3)
  switch (seleccion) {
    case 0:
      let elefantesUno = 0;
      let elefantesCero = 0;
      let elefantesTres = 0;
      let porcentajElefanteCero,
        porcentajElefanteTres,
        porcentajElefanteUno,
        totalElefantes;
      while (i <= 20) {
        var elefantes = parseInt(prompt(`ingrese la edad del elefante ${i}:`));
        if (elefantes >= 0 && elefantes <= 1) {
          elefantesCero++;
        } else if (elefantes > 1 && elefantes <= 3) {
          elefantesUno++;
        } else if (elefantes > 3) {
          elefantesTres++;
        }
        i++;
        totalElefantes = elefantesCero + elefantesTres + elefantesUno;
        porcentajElefanteCero = (elefantesCero * 100) / totalElefantes;
        porcentajElefanteUno = (elefantesUno * 100) / totalElefantes;
        porcentajElefanteTres = (elefantesTres * 100) / totalElefantes;
      }
      console.log(`el total de elefantes ingresados fueron de : ${totalElefantes} siendo que el porcentaje de 0 a 1: ${porcentajElefanteCero},
      porcentaje de 1 a 3: ${porcentajElefanteUno},
      porcentaje de 3 a mas: ${porcentajElefanteTres},
      `);
      break;
    case 1:
        let jirafasUno = 0;
        let jirafasCero = 0;
        let jirafasTres = 0;
        let porcentajeJirafasCero,
          porcentajeJirafasUno,
          porcentajeJirafasTres,
          totalJirafas;
        while (i <= 15) {
          var jirafas = parseInt(prompt(`ingrese la edad de la jirafas ${i}:`));
          if (jirafas >= 0 && jirafas <= 1) {
            jirafasCero++;
          } else if (jirafas > 1 && jirafas <= 3) {
            jirafasUno++;
          } else if (jirafas > 3) {
            jirafasTres++;
          }
          i++;
          totalJirafas = jirafasCero + jirafasUno + jirafasTres;
          porcentajeJirafasCero = (jirafasCero * 100) / totalJirafas;
          porcentajeJirafasUno = (jirafasUno * 100) / totalJirafas;
          porcentajeJirafasTres = (jirafasTres * 100) / totalJirafas;
        }
        console.log(`el total de jirafas ingresados fueron de : ${totalJirafas} siendo que el porcentaje de 0 a 1: ${porcentajeJirafasCero},
        porcentaje de 1 a 3: ${porcentajeJirafasUno},
        porcentaje de 3 a mas: ${porcentajeJirafasTres},
        `);
      break;
    case 2:
        let ChimpanceCero = 0;
        let ChimpanceUno = 0;
        let ChimpanceTres = 0;
        let porcentajeChimpanceCero,
          porcentajeChimpanceUno,
          porcentajeChimpanceTres,
          totalChimpance;
        while (i <= 40) {
          var chimpances = parseInt(prompt(`ingrese la edad del chimpance ${i}:`));
          if (chimpances >= 0 && chimpances <= 1) {
            ChimpanceCero++;
          } else if (chimpances > 1 && chimpances <= 3) {
            ChimpanceUno++;
          } else if (chimpances > 3) {
            ChimpanceTres++;
          }
          i++;
          totalChimpance = ChimpanceCero + ChimpanceUno + ChimpanceTres;
          porcentajeChimpanceCero = (ChimpanceCero * 100) / totalChimpance;
          porcentajeChimpanceUno = (ChimpanceUno * 100) / totalChimpance;
          porcentajeChimpanceTres = (ChimpanceTres * 100) / totalChimpance;
        }
        console.log(`el total de chimpances ingresados fueron de : ${totalChimpance} siendo que el porcentaje de 0 a 1: ${porcentajeChimpanceCero},
        porcentaje de 1 a 3: ${porcentajeChimpanceUno},
        porcentaje de 3 a mas: ${porcentajeChimpanceTres},
        `);
        
      break;

    default:
      console.log("el dato que ingreso no esta dentro de las opciones");
  }
else {
  console.log("el dato que ingreso no esta en dentro de las opciones");
}
