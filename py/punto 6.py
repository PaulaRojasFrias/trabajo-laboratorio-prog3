# Crear una clase Producto con atributos y métodos relacionados con los productos, una clase
# Inventario, la clase Inventario debe tener un atributo de lista para almacenar instancias de la clase
# Producto.
# Implementar métodos para agregar un producto al inventario, eliminar un producto del inventario
# y mostrar el inventario actual.
# Pruebe la clase Inventario agregando y eliminando productos del inventario y mostrando el
# inventario actualizado.



class Producto:
    def __init__(self,id,nombre,precio,descripcion,cantidad):
        self.id = id 
        self.nombre = nombre
        self.precio = precio
        self.descripcion = descripcion
        self.cantidad = cantidad
    
    def __str__(self):
        return f"Id: {self.id}, Nombre: {self.nombre}, Precio: {self.precio}, Cantidad: {self.cantidad}, Descripcion: {self.descripcion}"

class Inventario:
    def __init__(self):
        self.productos = []

    def agregar(self,producto):
        self.productos.append(producto)
    
    def eliminar(self,codigo):
        for x in self.productos:
            if codigo == x.id:
                self.productos.remove(x)
                break
            else:
                print("El producto no ha sido encontrado")
        
    def mostrar(self):
        for x in self.productos:
            print(x)
        print("\n")
    
    def buscar(self,codigo):
        for x in self.productos:
            if codigo == x.id:
                print(x)
            else:
                print("El producto no ha sido encontrado")

inventario = Inventario()
producto1 = Producto("P001","Tomate","1","Solo un tomate","100")
producto2 = Producto("P002","Television","1000","Television 80","10")
producto3 = Producto("P003","Microondas","2000","Micro ondas","15")

inventario.agregar(producto1)
inventario.agregar(producto2)
inventario.agregar(producto3)

inventario.mostrar()

inventario.eliminar("P001")

inventario.mostrar()

inventario.buscar("P003")