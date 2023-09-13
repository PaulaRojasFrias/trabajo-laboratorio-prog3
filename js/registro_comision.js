const formulario = document.getElementById("formCstf");
const formInputs = document.querySelectorAll("#formCstf input");

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
}

const campos = {
	apellido: false,
	nombre: false,
	cuil: false,
	fecha: false,
}

function validarFormulario(e){
   switch(e.target.name){
      case "nombre":
         validarCampo(expresiones.nombre, e.target, "nombre");
      break;
      case "apellido":
         validarCampo(expresiones.nombre, e.target, "apellido");
      break;
      case "cuil":
         validarCuil(e.target.value);
      break;
   }
};

function validarFecha(){
   let fechaValor = document.getElementById("fecha_integracion").value;
   let fechaActual= new Date();
   let fechaForm = new Date(fechaValor);
   console.log(fechaActual);
   console.log(fechaForm);
   console.log(fechaForm < fechaActual);
   if(fechaForm < fechaActual){
      document.querySelector(`#grupo__fecha .formulario__input-error`).classList.remove("formulario__input-error-activo");
      campos.fecha= true;
   }else{
      document.querySelector(`#grupo__fecha .formulario__input-error`).classList.add("formulario__input-error-activo");
      campos.fecha=false;
   }
}

function validarCuil(cuil_valor){
   if(cuil_valor.toString().length == 11){
      document.querySelector(`#grupo__cuil .formulario__input-error`).classList.remove("formulario__input-error-activo");
      campos.cuil= true;
   }else{
      document.querySelector(`#grupo__cuil .formulario__input-error`).classList.add("formulario__input-error-activo");
      campos.cuil=false;
   }
}

function validarCampo(expresion, input, campo){
   if(expresion.test(input.value)){
      document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove("formulario__input-error-activo");
      campos[campo]= true;
   }else{
      document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add("formulario__input-error-activo");
      campos[campo]=false;
   }
};

formInputs.forEach((input)=>{
   input.addEventListener('keyup', validarFormulario);
   input.addEventListener('blur', validarFormulario);
});


formulario.addEventListener("submit", (e) => {
   e.preventDefault();
   validarFecha();
   if(campos.apellido && campos.nombre && campos.cuil && campos.fecha){
      formulario.reset();
      document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		
      setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);
   }else{
      document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
   }
});
