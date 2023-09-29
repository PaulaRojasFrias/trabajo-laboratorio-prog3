# EJERCICIO N°4
# Se necesita solicitar al usuario el ingreso de datos como nombre, edad, dirección y teléfono. 
# Estos datos deben ser almacenados en un diccionario llamado usuario_info. 
# Además, se debe permitir el ingreso de información para varios usuarios. 
# Finalmente, se requiere mostrar la información ingresada por cada usuario en formato clave-valor.
usuarios = []
condicion = "s"
while condicion == "s":
    print("\nIngrese la informacion del usuario:")
    nombre = input("\nIngrese nombre del usuario:\n>> ")
    edad = int(input("\nIngrese edad del usuario:\n>> "))
    direccion = input("\nIngrese direccion del usuario:\n>> ")
    telefono = input("\nIngrese telefono del usuario:\n>> ")

    usuario = {
        "Nombre": nombre,
        "Edad": edad,
        "Direccion": direccion,
        "Telefono": telefono
    }
    usuarios.append(usuario)
    condicion = (input("Desea seguir ingresando la informacion de usuarios? s/n \n>> ")).lower()

for usuario in usuarios:
    print(f"\nInformacion del Usuario")
    for key, value in usuario.items():
        print(key, value)
