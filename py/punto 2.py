usuarios = {"Marcela", "David", "Elvira","Juan", "Marcos"}

print(usuarios)

administradores= {"Juan","Marcela"}

print(administradores)

administradores.remove("Juan")

print(administradores)

administradores.add("Marcos")

print(administradores)

for x in usuarios:
  if x in administradores:
    print("Administrador: " + x)
  else:
        print("Usuario: " + x)