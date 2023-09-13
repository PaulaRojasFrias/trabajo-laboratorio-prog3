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
        console.log(this.apellido+" "+this.nombre+" Genero:"+this.genero);
    }
}

const persona1= new Persona( "diaz", "juan", "M");

persona1.obtDetalles();

class Estudiante extends Persona{
    constructor(apellido, nombre, genero,curso,grupo){
        super(apellido, nombre, genero);
        this.curso=curso;
        this.grupo=grupo;
    }

    registrar(){
        console.log(this.curso);
    }
}  

const estudiante1= new Estudiante( "Marchetti", "Valentino", "M","2","Informatica");

estudiante1.registrar();



class Profesor extends Persona{
    constructor(apellido, nombre, genero,asignatura,comision){
        super(apellido, nombre, genero);
        this.asignatura=asignatura;
        this.comision=comision;
    }

    asignar(){
        console.log(this.asignatura);
    }
}  


const profesor1= new Profesor( "Filippin", "Marisa", "F","Base de datos","Informatica");

profesor1.asignar();