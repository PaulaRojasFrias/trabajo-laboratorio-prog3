// class Profesor{
//     constructor(apellido, nombre, asignatura, comision){
//         this.apellido= apellido;
//         this.nombre=nombre;
//         this.asignatura= asignatura;
//         this.comision = comision;
//     }
// }

// let profesores = [new Profesor("Perez","Juan","Sistemas Operativos","Informatica"),
//                   new Profesor("Marchetti","Valentino","Base de datos","Informatica"),
//                   new Profesor("Garcia","Raul","Fisica II","Electronica"),
//                   new Profesor("Arguello","Monica","Analisis Matematico I","Informatica"),
//                 ];


// profesores.forEach((item)=>{
//     const contenedor= getElementById("contenedor");

//     const celda1=  document.createElement("div");
//     celda1.classList.add("celda");
//     celda1.innerHTML =  `<h4>${item.apellido}</h4>`;

//     const celda2=  document.createElement("div");
//     celda2.innerHTML =  `<h4>${item.nombre}</h4>`;
//     celda2.classList.add("celda");

//     const celda3=  document.createElement("div");
//     celda3.innerHTML =  `<h4>${item.asignatura}</h4>`;
//     celda3.classList.add("celda");

//     const celda4=  document.createElement("div");
//     celda4.innerHTML =  `<h4>${item.comision}</h4>`;
//     celda4.classList.add("celda");

//     contenedor.appendChild(celda1);
//     contenedor.appendChild(celda2);
//     contenedor.appendChild(celda3);
//     contenedor.appendChild(celda4);
// }
//  );



//////////////////////////

class Profesor {
    constructor(apellido, nombre, asignatura, comision) {
        this.apellido = apellido;
        this.nombre = nombre;
        this.asignatura = asignatura;
        this.comision = comision;
    }
}

let profesores = [
    new Profesor("Pérez", "Juan", "Sistemas Operativos", "Informática"),
    new Profesor("Marchetti", "Valentino", "Base de Datos", "Informática"),
    new Profesor("García", "Raúl", "Física II", "Electrónica"),
    new Profesor("Argüello", "Mónica", "Análisis Matemático I", "Informática"),
];

profesores.forEach((item) => {
    const contenedor = document.getElementById("contenedor");

    const celda1 = document.createElement("div");
    celda1.classList.add("celda");
    celda1.innerHTML = `<h4>${item.apellido}</h4>`;

    const celda2 = document.createElement("div");
    celda2.innerHTML = `<h4>${item.nombre}</h4>`;
    celda2.classList.add("celda");

    const celda3 = document.createElement("div");
    celda3.innerHTML = `<h4>${item.asignatura}</h4>`;
    celda3.classList.add("celda");

    const celda4 = document.createElement("div");
    celda4.innerHTML = `<h4>${item.comision}</h4>`;
    celda4.classList.add("celda");

    const celda5 = document.createElement("div");
    celda5.classList.add("celda");
    let button = document.createElement("button");
    button.textContent = "Eliminar";
    celda5.appendChild(button);

    button.onclick = function () {
        contenedor.removeChild(celda1);
        contenedor.removeChild(celda2);
        contenedor.removeChild(celda3);
        contenedor.removeChild(celda4);
        contenedor.removeChild(celda5);
    };
   
    contenedor.appendChild(celda1);
    contenedor.appendChild(celda2);
    contenedor.appendChild(celda3);
    contenedor.appendChild(celda4);
    contenedor.appendChild(celda5);
});




