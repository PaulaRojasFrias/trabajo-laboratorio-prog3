// function validarFecha(fecha) {
//     var fechaActual = new Date();
//     var fechaIngresada = new Date(fecha);
    
//     if (fechaIngresada > fechaActual) {
//     return false; // La fecha es posterior a la actual
//     }

// }

// validarFecha("5 de julio");

class Persona{
    constructor(apellido, nombre, genero){
        this.apellido= apellido;
        this.nombre=nombre;
        this.genero= genero;
    }

    obtDetalles(){
        console.log(this.apellido);
        console.log(this.nombre);
        console.log(this.genero);
    }
}

const persona1= new Persona( "dias", "juan", "M");

persona1.obtDetalles();

class Estudiante extends Persona{
    constructor(apellido, nombre, genero,curso,grupo){
        super(apellido, nombre, genero);
    }

    registrar();
}  