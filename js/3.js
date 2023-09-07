class Estudiante{
    constructor(apellido, nombre, matricula, dni, correo){
        this.apellido= apellido;
        this.nombre=nombre;
        this.dni= dni;
        this.matricula = matricula;
        this.correo = correo;
    }
}

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => { // funcion agregarEstudiante
e.preventDefault();

let inputs = e.target.children;

let matricula=inputs[6].value;
let dni=inputs[9].value;
let apellido=inputs[2].value;
let nombre=inputs[3].value;
let correo=inputs[12].value;

let estudiante= new Estudiante(matricula, dni,apellido, nombre, correo);
let estudiantes = [];
estudiantes.push(estudiante);

console.log(estudiantes);
});