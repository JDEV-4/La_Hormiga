const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const meses = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const hoy = new Date();
const diaSemana = dias[hoy.getDay()];
const dia = hoy.getDate().toString().padStart(2, "0");
const mes = meses[hoy.getMonth()];
const anio = hoy.getFullYear();

const fechaTexto = `${diaSemana}, ${dia}-${mes}-${anio}`;

document.getElementById("fecha-actual").textContent = fechaTexto;
