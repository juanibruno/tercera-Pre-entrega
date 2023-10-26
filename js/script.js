
/* const btnToastify = document.querySelector('#toastify') */

const bonificaciones = [{
    id: 0,
    titulo: 'Descuento 1',
    bonificacion: 15,
    descripcion: 'Descuento valido de lunes a viernes'
},
{
    id: 1,
    titulo: 'Descuento 2',
    bonificacion: 20,
    descripcion: 'Descuento 3'
},
{
    id: 2,
    titulo: 'Descuento 4',
    bonificacion: 10,
    descripcion: 'Descuento valido de lunes a viernes'
},
{
    id: 3,
    titulo: 'Descuento 5',
    bonificacion: 50,
    descripcion: 'Descuento valido de lunes a viernes'
}
];

localStorage.setItem('bonificaciones', JSON.stringify(bonificaciones));

/* const juani2 = JSON.parse(localStorage.getItem('bonificaciones'));
console.log(juani2); */

function sorteo() {
    const resultadoSorteo1 = Math.ceil(Math.random() * 30);
    return resultadoSorteo1;
}


const btnSorteo = document.getElementById('probaSuerte');

btnSorteo.addEventListener('click', function () {
    const resultadoSorteo = sorteo(); // Llama a la función sorteo y almacena el resultado
    const contenedor = document.getElementById("contenedor");
    for (const bonif of bonificaciones) {
        contenedor.innerHTML = `
      <div class="card">
        <img src="https://images.unsplash.com/photo-1499306215218-42e51ae058b2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Descripción de la imagen">
        <h2 class="titulo">*** !FELICIDADES!***</h2>
        <p class="Texto"> * Ganaste ${resultadoSorteo} % de DESCUENTO para tu siguiente compra *   ***  <span>Suma mas descuentos *** </span> </p>
        <button class="aquiAbajo">  ↓↓↓ Hace Clik nuevamente Abajo ↓↓↓  </button>
    </div>`;
    }});





const button = document.querySelector('#botonDos');

const contenedorDos = document.getElementById('botonDos');
button.addEventListener('click', ultimoSorteo);


function ultimoSorteo() {
    const juani = sorteo();
if (juani <=10) {
    const resultadoFinal = bonificaciones[3].bonificacion;
    contenedorDos.innerHTML = `
    <div class="cardDos">
        <img src="https://images.unsplash.com/photo-1576610981602-438b2860eb77?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZlbGljaWRhZGVzfGVufDB8fDB8fHww" alt="Descripción de la imagen">
        <h2 class="titulo">*** FELICIDADES!***</h2>
        <p class="Texto">*** Ganaste ${resultadoFinal} % MAS de DESCUENTO! <span> **GRACIAS POR PARTICIPAR** </span></p> 
      
    `    
}else if (juani > 10 && juani <= 20){
    const resultadoFinal = bonificaciones[2].bonificacion;
    contenedorDos.innerHTML = `
    <div class="cardDos">
        <img src="https://images.unsplash.com/photo-1576610981602-438b2860eb77?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZlbGljaWRhZGVzfGVufDB8fDB8fHww" alt="Descripción de la imagen">
        <h2 class="titulo">*** FELICIDADES!***</h2>
        <p class="Texto">*** Ganaste ${resultadoFinal} % MAS de DESCUENTO! <span> **GRACIAS POR PARTICIPAR** </span></p> 
      
    ` 
}else if(juani > 20 && juani <= 30){
    const resultadoFinal = bonificaciones[0].bonificacion;
    contenedorDos.innerHTML = `
    <div class="cardDos">
        <img src="https://images.unsplash.com/photo-1576610981602-438b2860eb77?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZlbGljaWRhZGVzfGVufDB8fDB8fHww" alt="Descripción de la imagen">
        <h2 class="titulo">*** FELICIDADES!***</h2>
        <p class="Texto">*** Ganaste ${resultadoFinal} % MAS de DESCUENTO! <span> **GRACIAS POR PARTICIPAR** </span></p>      
    `   
}else{
    alert('GRACIAS POR PARTICIPAR')
}
    
}





















/* function acceso() {
    let ingresar = false;
    while (codigoDeDescuento === clave) {
        ingresar = true;
        break;
    } if (codigoDeDescuento !== clave) {
        alert('Segui probando suerte!');
    }
    return ingresar;
}

function suma(a, b) {
    let resultado = a + b;
    return resultado;

}
 */

/* const arraynuevo = [];

let codigoDeDescuento = 9640;

let clave = parseInt(prompt('Ingresá el codigo de Descuento:'));

 */






















































































































/* if (acceso()) {

    let nombre = prompt('Ingresa tu nombre:');
    alert('***Bienvenido ' + nombre);
    let opcion = prompt('Elegí una opción de acuerdo a tu interés: \n1 - Riego Automático \n2 - Riego por Goteo \n3 - Tuberías \n4 - Paisajismo y Decoración');

    switch (opcion) {
        case "1":
            alert('**** Bienvenido a los descuentos en RIEGOS AUTOMATICOS ****');
            let OpcionesRiego = prompt('Elegí una opción: \n1 - Aspersores \n2 - Mangueras subterraneas');
            if (OpcionesRiego == '1') {
                gano = bonificaciones[0].bonificacion;

                alert("*** FELICIDADES *** Ganaste " + gano + '% de DESCUENTO en Aspersores!!');
            } else if (OpcionesRiego == '2') {
                gano = bonificaciones[1].bonificacion;

                alert("*** FELICIDADES *** Ganaste " + gano + '% de DESCUENTO en Accesorios para Sistemas de Riego por Goteo!!');
            } else {
                alert('Opción Inválida');
            }
            break;
        case "2":
            alert('****Bienvenido a los descuentos en RIEGO POR GOTEO****');
            let opcionGoteo = prompt('Elegí una opción: \n1 - FILTROS \n2 - BOMBAS');

            if (opcionGoteo == '1') {
                gano = bonificaciones[2].bonificacion;

                alert("*** FELICIDADES *** Ganaste " + gano + "% de DESCUENTO en FILTROS!")
            } else if (opcionGoteo == '2') {
                gano = bonificaciones[3].bonificacion;

                alert("*** FELICIDADES *** Ganaste " + gano + "% de DESCUENTO en Bombas Hidráulicas!")

            } else {
                alert('Opción Inválida');
            }
            break;
        case "3":
            alert('**** Bienvenido a los descuentos en TUBERIAS ****');
            let opcionTuberia = prompt('Elegí una opción: \n1 - TUBERIAS PRINCIPALES \n2 - TUBERIAS LATERALES');
            if (opcionTuberia == '1') {
                gano = bonificaciones[2].bonificacion;

                alert("*** FELICIDADES *** Ganaste " + gano + "% de DESCUENTO en TUBERIAS PRINCIPALES y SUBTERRANEAS!")
            } else if (opcionTuberia == '2') {
                gano = bonificaciones[0].bonificacion;

                alert("*** FELICIDADES *** Ganaste " + gano + "% de DESCUENTO en TUBERIAS LATERALES!")
            } else {
                alert('Opción Inválida');
            }
            break;
        case "4":
            alert('**** Bienvenido a los descuentos en PAISAJISMO Y DECO ****');
            let opcionPaisajismo = prompt('Elegí una opción: \n1 - Proyectos \n2 - Productos');
            if (opcionPaisajismo == '1') {
                gano = bonificaciones[1].bonificacion;

                alert("*** FELICIDADES *** Ganaste " + gano + "% de DESCUENTO en Proyectos de Mejora de Espacios Verdes!")
            } else if (opcionPaisajismo == '2') {
                gano = bonificaciones[0].bonificacion;
                alert("*** FELICIDADES *** Ganaste " + gano + "% de DESCUENTO en Productos de Jardinería!")
            } else {
                alert('Opción Inválida')
            }
            break;
    }
} else {
    alert('***Conseguí mas codigos de descuento en nuestras redes!***');
}
arraynuevo.push(gano);

alert('*** Vamos por mas *** ¡¡hace click y obtene mas descuentos!!')
let numero = parseInt(Math.random() * 100);
let descuento = 0;

function sorteo() {
    if (numero <= 25) {
        alert("ganaste un 20% de DESCUENTO PARA TUS PROXIMAS COMPRAS");
        descuento = 20;
    } else if (numero > 25 && numero <= 50) {
        alert("ganaste un 15% de DESCUENTO PARA TUS PROXIMAS COMPRAS");
        descuento = 15;
    } else if (numero > 50 && numero <= 75) {
        alert("ganaste un 20% de DESCUENTO PARA TUS PROXIMAS COMPRAS");
        descuento = 20;
    } else {
        alert("ganaste un 25% de DESCUENTO PARA TUS PROXIMAS COMPRAS");
        descuento = 25;
    }
    return descuento;

}
sorteo(numero);

console.log(descuento);
console.log(gano);

let resutadoFinal = suma(descuento, gano);
alert('ganaste en total ' + resutadoFinal + '% de DESCUENTO en Aqua System');

alert("MUCHAS GRACIAS POR PARTICIPAR!");
 */

