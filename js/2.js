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
        this.curso=curso;
        this.grupo=grupo;
    }

    registrar(){
        console.log(this.curso);
    }
}  

