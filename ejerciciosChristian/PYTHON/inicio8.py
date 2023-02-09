n = int(input("ingrese cuantos empleados existen en la empresa : "))
vHora = float(input("ingrese cuanto se gana por hora en la empresa : "))
horaTrabajada = 0
Empresa = []
Descuento = 0

Empleado ={}


for i in range(n):
        Empleado["Nombre"] = input("ingrese el nombre del empleado : ")
        Empleado["Antiguedad"] = int(input("ingrese el tiempo que llevas trabajando en la empresa  en años: "))
        Empleado["horaTrabajada"] = int(input("ingrese cuantas horas trabajo : "))
        Empleado["Total"] = (vHora * horaTrabajada) + (Empleado["Antiguedad"] *30)
        Empleado["Descuento"] = (vHora * horaTrabajada) + (Empleado["Antiguedad"] *30)*0.13
        Empleado["Descontado"] =  Empleado["Total"] - Empleado["Descuento"]
        Empresa.append(Empleado)
        Empleado = {}
for i in range(len(Empresa)):
    print("")
    print(f'El empleado llamado : {Empresa[i]["Nombre"]} a tenido un tiempo de permanencia en la empresa de :{Empresa[i]["Antiguedad"]} años y el valor que se le pagara por hora es de : {vHora} obtuvo un total en bruto de :{Empresa[i]["Total"]} con un descuento del 13 por ciento se le quitara {Empresa[i]["Descontado"]} por ende se le dara un cobro neto de :   {Empresa[i]["Descuento"]}')
    print("")
        

