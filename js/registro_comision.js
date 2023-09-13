const formulario = document.getElementById("formCstf");


formulario.addEventListener("submit", function(e){
    e.preventDefault();
    let inputFecha = document.getElementById("fecha_integracion").value;
    let fechaActual = new Date();
    let fechaForm = new Date(inputFecha);
   
   if(fechaForm > fechaActual){
      alert('Error. La fecha es posterior a la actual');
   }

   let cuilForma = document.getElementById("cuil");
   if(cuilForma.value.toString().length != 11){
    alert("Error. Ingrese un CUIL valido");
   }
});