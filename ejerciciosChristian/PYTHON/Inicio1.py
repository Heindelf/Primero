Nombre = input("ingrese el nombre del empleado : ")

Mes = input("ingrese el mes en el que trabajo : ")

print("el salario minimo del empleado es de $980.000")
Auto = int(input("cuantos autos vendio el vendio : "))

Valor = float(input("ingrese el valor del auto : "))

if float(Auto and Valor):
    Comision = Auto*170000
    Bono = float(Valor*0.5)
    Total = Comision*Bono+980000
    print(f"el empleado {Nombre} en el mes {Mes} tuvo un sueldo total de {Total}")
else:
        print("los datos que ingreso no son validos")