const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonNumeros = document.querySelectorAll('.numero');
const botonOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

botonNumeros.forEach(boton =>{
  boton.addEventListener('click', () =>{
    display.agregarNumero(boton.innerHTML);
  });
})

botonOperadores.forEach(boton => {
  boton.addEventListener('click', () => display.computar(boton.value))
});