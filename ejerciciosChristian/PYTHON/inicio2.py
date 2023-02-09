print("usuario porfavor digite su capital en la consola porfavor")

Capital = float(input("Capital : "))
print("por cada mes la capital auenta 1.2%")

Mes = int(input("ingrese cuantos meses desear guardar su capital : "))

porcentaje = float(Mes*1.2)
Ganancia =(Capital * porcentaje)

if float(Capital) :
    print(f"las ganancias esperadas son de {Ganancia}$")
else:
    print("ese valor no es calculable")
