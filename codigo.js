//registrarse
function Registrar (nombreApellido, edad, dni) {
    this.nombreApellido = nombreApellido;
    this.dni = dni;
    this.edad = edad;
    this.datosOrganizados = function (){console.log("nombre y apellido: "+this.nombreApellido+
    " dni: "+this.dni+" edad: "+this.edad)}
  }
  
  let nombreApellido = prompt("Ingrese su nombre y apellido");
  let dni = prompt("Ingrese su dni");
  let edad = prompt ("ingrese su edad")

    const usuario1 = new Registrar(nombreApellido, dni, edad);
    console.log(usuario1);
//lista con precio y dias al mes
  const mensual = [
   { dia : 4, precio : "$6500"},
    {dia: 8 , precio: "$9000"},
    { dia:12, precio: "$10500"} 
  ]
  

// Preguntar al usuario si quiere ver el plan mensual o anual
const respuestaUsuario = prompt("¿Deseas ver el plan mensual o anual? (responde 'mensual' o 'anual')");

// Función para calcular el plan anual
function calcularPlanAnual(planMensual) {
  return planMensual.map(item => ({
    dia: item.dia * 12,
    precio: `$${(parseFloat(item.precio.slice(1)) * 12 * 0.9).toFixed(2)}`
  }));
}

// Mostrar la lista según la respuesta del usuario
if (respuestaUsuario === 'mensual') {
  console.log("Plan mensual:");
  console.log(mensual);
} else if (respuestaUsuario === 'anual') {
  const anual = calcularPlanAnual(mensual);
  console.log("Plan anual:");
  console.log(anual);
} else {
  console.log("Respuesta inválida. Debes responder 'mensual' o 'anual'.");
}
//Recomendar plan mensual con un bucle
const recomendarPlanMensual = () => {
    let recomendacion;
    let venisRealizandoActividad;
  
    do {
      venisRealizandoActividad.toLowerCase = prompt("¿Has venido realizando actividad física recientemente? (responde 'si' o 'no')");
    } while (venisRealizandoActividad !== "si" && venisRealizandoActividad !== "no");
  
    if (venisRealizandoActividad === "si") {
      recomendacion = mensual[0]; // Recomendar el primer plan del array (Plan Básico)
    } else {
      recomendacion = mensual[1]; // Recomendar el segundo plan del array (Plan Estándar)
    }
   return recomendacion;
   
  };
  const recomendacionUsuario = recomendarPlanMensual();
console.log("Recomendación mensual:");
console.log(recomendacionUsuario);

// Preguntar al usuario sobre su objetivo en el gimnasio
const objetivo = prompt("¿Cuál es tu objetivo en el gimnasio?\n" +
                        "Opciones: bajar de peso, mantener mi estado físico, ganar masa muscular, otro");

// Objeto con opciones y sus descripciones
const opciones = {
  "bajar de peso": "Reducir la grasa corporal y mejorar la condición física.",
  "mantener mi estado físico": "Conservar el nivel de forma actual y estar saludable.",
  "ganar masa muscular": "Aumentar la masa muscular y ganar fuerza.",
  "otro": "Un objetivo diferente al mencionado anteriormente."
};

// Función de orden superior para procesar la elección del usuario
function procesarObjetivo(objetivo, opciones) {
  const opcionSeleccionada = opciones[objetivo];
  if (opcionSeleccionada) {
    console.log(`Tu objetivo es "${objetivo}". ${opcionSeleccionada}`);
  } else {
    console.log("Opción inválida. Por favor, selecciona una de las opciones proporcionadas.");
  }
}

// Mostrar la descripción correspondiente al objetivo seleccionado
procesarObjetivo(objetivo, opciones);