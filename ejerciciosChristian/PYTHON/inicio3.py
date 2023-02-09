print("ingrese los datos de las edades pesos de 20 personas de una zona rural")

i = 1
edad = 0
pNiños = 0
nCantidad = 0
totalNiños =  0
pJovenes = 0
jCantidad = 0
totalJovenes = 0
pAdultos = 0
totalAdultos = 0
aCantidad = 0
pViejos =  0
vCantidad = 0
totalViejos = 0

errorCantidad  = 0
promedioNiños = 0
promedioJovenes = 0
promedioAdultos = 0
promedioViejos = 0

while i <= 5:
    ePersonas = int(input(f"ingrese la edad de la persona {i} : "))
    if ePersonas >= 0 and ePersonas <= 12:
        pNiños = int(input(f"ingrese el peso del niño {i}"))
        totalNiños = pNiños + totalNiños
        nCantidad+=1
    elif ePersonas >= 12 and ePersonas<= 29:
        pJovenes = int(input(f"ingrese el peso del joven {i}"))
        totalJovenes = pJovenes+totalJovenes
        jCantidad+=1
    elif ePersonas >= 29 and ePersonas<=59:
        pAdultos = int(input(f"ingrese el peso del adulto {i}")) 
        totalAdultos = pAdultos + totalAdultos
        aCantidad+=1
    elif ePersonas >=60 :
        pViejos = int(input(f"ingrese el peso de la persona de tercera edad{i}"))
        totalViejos=pViejos+totalViejos
        vCantidad+=1
    else :
        print("la edad no entra en ninguna categoria")  
    i+=1

if totalNiños and nCantidad > 0 :
    promedioNiños = totalNiños / nCantidad
elif totalJovenes and aCantidad > 0 :
    promedioJovenes = totalJovenes / jCantidad
elif totalAdultos and aCantidad > 0 :
    promedioAdultos = totalAdultos / aCantidad
elif totalViejos and vCantidad > 0:
    promedioViejos = totalViejos / vCantidad
else : print("los datos ingresados on incluyo algunas de las categorias")

print(f"cantidad de niños {nCantidad},Cantidad de jovenes {jCantidad} ,Cantidad de Adultos {aCantidad},Cantidad de Ancianos {vCantidad},Errores en la edad digitada {errorCantidad} , promedio peso de niños {promedioNiños},promedio peso de jovenes {promedioJovenes},Promedio peso de adultos {promedioAdultos},Promedio peso de viejos {promedioViejos}")