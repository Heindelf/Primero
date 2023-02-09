#print ('La escuela, PequeñosGamberros, quiere almacenar los datos de sus N estudiantes: Nombre, Curso, Genero. Quiere también registrar las notas de las 3 materias de esos estudiantes. Luego imprimir el nombre de los estudiantes con el promedio de sus notas y mostrar quienes aprobaron y quienes no. Un estudiante aprueba, si el promedio de sus notas, es >=3.5. Debe tenerse en cuenta que las notas deben estar entre 0 y 5.')#


curso = 0
estudiante = []
estudiantes = {}



n = int(input("ingrese cuantos estudiantes desea ingresar datos : "))
print("")
for i in range(n):
    estudiantes["nombre"] = input("nombre : ")
    estudiantes["genero"] = input("genero :")
    curso = int(input("ingrese el curso en el que esta el estudiante : "))
    while curso < 1 or curso > 11 :
                 print("")
                 print("ese digito no esta en el rango de curso,digite de nuevo :")
                 curso = int(input("ingrese el curso del estudiante : "))    
estudiantes["curso"] = curso



    
 

