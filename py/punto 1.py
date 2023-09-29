# EJERCICIO N°1
# Realizar un programa que pida al usuario un número entero del 0 al 9, y que mientras el número no sea correcto se repita el proceso. 
# Luego debe comprobar si el número se encuentra en la lista de números y notificarlo:
numerosLista = [0,1,2,3,4,5,6,7,8,9]
num = int(input("Ingrese un numero del 0 al 9:\n>> "))
while (num > 9 or num < 0):
    num = int(input("Error. Ingrese un numero del 0 al 9:\n>> "))

if(num in numerosLista):
    print("\nEl valor se encuentra en la lista")
else:
    print("\nEl valor no se encuentra en la lista")

