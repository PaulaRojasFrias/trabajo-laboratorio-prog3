/*Realizar validaciones que considere necesarias, por ejemplo: 
 Verificar que la fecha del ingreso del PTF, no sea posterior a la fecha actual. */

const formulario1 = document.getElementById("formulario_ptf");

formulario1.addEventListener("submit", function(e){
   e.preventDefault();
   let inputFecha = document.getElementById("fecha").value;
   let fechaActual = new Date();
   let fechaForm = new Date(inputFecha);
   
   if(fechaForm > fechaActual){
      alert('Error. La fecha es posterior a la actual')
   }
});


/* En el caso que el estado del PTF sea “observado”, requerir al usuario que ingrese una 
observación*/

function esconderDescripcion(valor){
   if(valor===1){
      document.getElementById("descripcion_observacion").style.display="block";
   }else{
      document.getElementById("descripcion_observacion").style.display="none";
   }
};

let boton = document.getElementById("boton");
let botonObs = document.getElementById("cb_observado");
let observacion = document.getElementById("descripcion_observacion");

boton.addEventListener('click', ()=>{
   if(botonObs.checked){
      if(observacion.value.length == 0){
         alert("Por favor, ingrese una observacion");
      }
   } 
})