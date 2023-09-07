var toggle = document.querySelector(".onoffswitch-checkbox");


toggle.addEventListener('change', function() {
//    this.checked ?  prompt("Ingrese una observación") : "initial";

   if (this.checked){
    let observacion=  prompt("Ingrese una observación")
   }
});

/* Verificar que la fecha del ingreso del PTF, no sea posterior a la fecha actual.*/
function verificarFecha(){
   let inputFecha = document.getElementById("fecha_registro_ptf"); /*.value */
   let fechaActual = new Date();
   let fechaInput = new Date(inputFecha);
}