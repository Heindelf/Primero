print("Diseña un algoritmo que almacene datos en dos vectores y luego identifique y muestre los elementos que estan en el primero y no estan en el segundo")



lista1 = ["a","2","4","f","3","1"]
lista2 = ["5","3","g","b","a","f","d"]

for i in range(len(lista1)):
    cont = 0
    for j in range(len(lista2)):
        if (lista1[i] == lista2[j]):
         cont+1
if cont == 0:
    print(i)

