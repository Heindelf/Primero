alert ("Bienvenido a celulares el chucho")

var  total ;
var ventas = 0;
var  Samsung = 0;
var Iphone = 0;
var  Xiaomi = 0;
var Motorola = 0;
var  Huawei = 0;
var Oppo = 0;
var SamsungVentas =  0;
var IphoneVentas =  0;
var XiaomiVendidas =  0;
var MotorolaVendidas =  0;
var HuaweiVendidas =  0;
var OppoVendidas =  0;
var totalVendidas = 0;
var totalPrecio = 0;



var total = parseInt(prompt("ingrese el total existente de inventario"))

    var Samsung = parseInt(prompt("ingrese la cantidad de marcas samsung existente"))
 
    var Iphone = parseInt(prompt("ingrese la cantidad de marcas Iphone existente"))

    var Xiaomi = parseInt(prompt("ingrese la cantidad de marcas Xiaomi existente"))

    var Motorola = parseInt(prompt("ingrese la cantidad de marcas Motorola existente"))

    var Huawei = parseInt(prompt("ingrese la cantidad de marcas Huawei existente"))

    var Oppo = parseInt(prompt("ingrese la cantidad de marcas Oppo existente"))

    while(isNaN(total)){
        alert("alguno de los datos que ingreso no fue numerico");
        var total = parseInt(prompt("ingrese el total existente de inventario"))
    }
    while(isNaN(Samsung)){
        alert("alguno de los datos que ingreso no fue numerico");
        var samsung = parseInt(prompt("ingrese el total existente de inventario"))
    }
    while(isNaN(Iphone)){
        alert("alguno de los datos que ingreso no fue numerico");
        var Iphone = parseInt(prompt("ingrese el total existente de inventario"))
    }
    while(isNaN(Xiaomi)){
        alert("alguno de los datos que ingreso no fue numerico");
        var Xiaomi = parseInt(prompt("ingrese el total existente de inventario"))
    }
    while(isNaN(Motorola)){
        alert("alguno de los datos que ingreso no fue numerico");
        var Motorola = parseInt(prompt("ingrese el total existente de inventario"))
    }
    while(isNaN(Huawei)){
        alert("alguno de los datos que ingreso no fue numerico");
        var Huawei = parseInt(prompt("ingrese el total existente de inventario"))
    }
    while(isNaN(Oppo)){
        alert("alguno de los datos que ingreso no fue numerico");
        var Oppo = parseInt(prompt("ingrese el total existente de inventario"))
    }
        

totalMarcas = Samsung+Iphone+Xiaomi+Motorola+Huawei+Oppo




while(totalMarcas < total || totalMarcas > total){
    alert("los datos que ingreso no son concordes al total de inventario digite de nuevo");
    var total = parseInt(prompt("ingrese el total existente de inventario"))

    var Samsung = parseInt(prompt("ingrese la cantidad de marcas samsung existente"))
    var Iphone = parseInt(prompt("ingrese la cantidad de marcas Iphone existente"))
    var Xiaomi = parseInt(prompt("ingrese la cantidad de marcas Xiaomi existente"))
    var Motorola = parseInt(prompt("ingrese la cantidad de marcas Motorola existente"))
    var Huawei = parseInt(prompt("ingrese la cantidad de marcas Huawei existente"))
    var Oppo = parseInt(prompt("ingrese la cantidad de marcas Oppo existente"))
    totalMarcas = Samsung+Iphone+Xiaomi+Motorola+Huawei+Oppo

}


do{
    opcion = Number(prompt(`
    1- Ingresar cuantas unidades se vendieron y ver el precio \n
    2- Ingresar el inventario nuevo
    3-visualizar el inventario existente\n
    4- Salir`))

    switch(opcion){
        case 1:

        console.log("Ingrese cuantos celulares se vendieron segun la marca");
        var SamsungVentas = parseInt(prompt("ingrese la cantidad de marcas samsung vendidas"))
        var IphoneVentas = parseInt(prompt("ingrese la cantidad de marcas Iphone vendidas"))
        var XiaomiVendidas = parseInt(prompt("ingrese la cantidad de marcas Xiaomi vendidas"))
        var MotorolaVendidas = parseInt(prompt("ingrese la cantidad de marcas Motorola vendidas"))
        var HuaweiVendidas = parseInt(prompt("ingrese la cantidad de marcas Huawei vendidas"))
        var OppoVendidas = parseInt(prompt("ingrese la cantidad de marcas Oppo vendidas"))

        totalVendidas = SamsungVentas+IphoneVentas+XiaomiVendidas+MotorolaVendidas+HuaweiVendidas+OppoVendidas

        while(isNaN(SamsungVentas)){
            alert("alguno de los datos que ingreso no fue numerico");
            var SamsungVentas = parseInt(prompt("ingrese el total existente de inventario"))
        }
        while(isNaN(IphoneVentas)){
            alert("alguno de los datos que ingreso no fue numerico");
            var IphoneVentas = parseInt(prompt("ingrese el total existente de inventario"))
        }
        while(isNaN(XiaomiVendidas)){
            alert("alguno de los datos que ingreso no fue numerico");
            var XiaomiVendidas = parseInt(prompt("ingrese el total existente de inventario"))
        }
        while(isNaN(MotorolaVendidas)){
            alert("alguno de los datos que ingreso no fue numerico");
            var MotorolaVendidas = parseInt(prompt("ingrese el total existente de inventario"))
        }
        while(isNaN(HuaweiVendidas)){
            alert("alguno de los datos que ingreso no fue numerico");
            var HuaweiVendidas = parseInt(prompt("ingrese el total existente de inventario"))
        }
        while(isNaN(OppoVendidas)){
            alert("alguno de los datos que ingreso no fue numerico");
            var OppoVendidas = parseInt(prompt("ingrese el total existente de inventario"))
        }
        while(totalVendidas > totalMarcas){
            
            alert("Ingrese correctamente,no debe sobrepasarse al total de inventario");
            var SamsungVentas = parseInt(prompt("ingrese la cantidad de marcas samsung vendidas"))
            var IphoneVentas = parseInt(prompt("ingrese la cantidad de marcas Iphone vendidas"))
            var XiaomiVendidas = parseInt(prompt("ingrese la cantidad de marcas Xiaomi vendidas"))
            var MotorolaVendidas = parseInt(prompt("ingrese la cantidad de marcas Motorola vendidas"))
            var HuaweiVendidas = parseInt(prompt("ingrese la cantidad de marcas Huawei vendidas"))
            var OppoVendidas = parseInt(prompt("ingrese la cantidad de marcas Oppo vendidas"))
            
        }

        var SamsungPrecio = parseInt(prompt("ingrese el precio de la marcas samsung "))
var IphonePrecio = parseInt(prompt("ingrese el precio de la marcas samsung "))
var XiaomiPrecio = parseInt(prompt("ingrese el precio de la marcas samsung "))
var MotorolaPrecio = parseInt(prompt("ingrese el precio de la marcas samsung "))
var HuaweiPrecio = parseInt(prompt("ingrese el precio de la marcas samsung "))
var OppoPrecio = parseInt(prompt("ingrese el precio de la marcas samsung "))
while(isNaN(SamsungPrecio)){
    alert("alguno de los datos que ingreso no fue numerico");
    var SamsungPrecio = parseInt(prompt("ingrese el total existente de inventario"))
}
while(isNaN(IphonePrecio)){
    alert("alguno de los datos que ingreso no fue numerico");
    var IphonePrecio = parseInt(prompt("ingrese el total existente de inventario"))
}
while(isNaN(XiaomiPrecio)){
    alert("alguno de los datos que ingreso no fue numerico");
    var XiaomiPrecio = parseInt(prompt("ingrese el total existente de inventario"))
}
while(isNaN(MotorolaPrecio)){
    alert("alguno de los datos que ingreso no fue numerico");
    var MotorolaPrecio = parseInt(prompt("ingrese el total existente de inventario"))
}
while(isNaN(HuaweiPrecio)){
    alert("alguno de los datos que ingreso no fue numerico");
    var HuaweiPrecio = parseInt(prompt("ingrese el total existente de inventario"))
}
while(isNaN(OppoPrecio)){
    alert("alguno de los datos que ingreso no fue numerico");
    var OppoPrecio = parseInt(prompt("ingrese el total existente de inventario"))
}
        

totalSamsung =  SamsungVentas * SamsungPrecio
totalXiaomi = XiaomiPrecio * XiaomiVendidas
totalIphone = IphoneVentas * IphonePrecio
totalMotorola =  MotorolaVendidas * MotorolaPrecio
totalHuawei = HuaweiVendidas * HuaweiPrecio
totalOppo = OppoVendidas * OppoPrecio

totalPrecio = totalSamsung+totalXiaomi+totalIphone+totalHuawei+totalMotorola+totalOppo

console.log("el total de marcas vendidas fue de : "+totalVendidas+" con un precio de : "+totalPrecio)+" $";

totalMarcas = totalMarcas - totalVendidas
            break;
            case 2:
                var total = parseInt(prompt("ingrese el total existente de inventario"))

                var Samsung = parseInt(prompt("ingrese la cantidad de marcas samsung existente"))
                var Iphone = parseInt(prompt("ingrese la cantidad de marcas Iphone existente"))
                var Xiaomi = parseInt(prompt("ingrese la cantidad de marcas Xiaomi existente"))
                var Motorola = parseInt(prompt("ingrese la cantidad de marcas Motorola existente"))
                var Huawei = parseInt(prompt("ingrese la cantidad de marcas Huawei existente"))
                var Oppo = parseInt(prompt("ingrese la cantidad de marcas Oppo existente"))
                
                totalMarcas = Samsung+Iphone+Xiaomi+Motorola+Huawei+Oppo
                
                while(parseInt(totalMarcas < total || totalMarcas > total)){
                    console.log("los datos que ingreso no son concordes al total de inventario digite de nuevo");
                    var Samsung = parseInt(prompt("ingrese la cantidad de marcas samsung existente"))
                    var Iphone = parseInt(prompt("ingrese la cantidad de marcas Iphone existente"))
                    var Xiaomi = parseInt(prompt("ingrese la cantidad de marcas Xiaomi existente"))
                    var Motorola = parseInt(prompt("ingrese la cantidad de marcas Motorola existente"))
                    var Huawei = parseInt(prompt("ingrese la cantidad de marcas Huawei existente"))
                    var Oppo = parseInt(prompt("ingrese la cantidad de marcas Oppo existente"))
                }
            
                break;
                case 3:
                    console.log("el total de inventario existente es de : "+totalMarcas);
                    break;
    }
}while(opcion !=4)



