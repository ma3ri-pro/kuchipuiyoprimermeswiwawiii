// =====================================================
//      REGALO 1 MES 💌
//      Script principal
// =====================================================


// Número de pantalla actual
let pantallaActual = 1;


// =====================================================
// Mostrar una pantalla
// =====================================================

function mostrarPantalla(numero){

    const pantallas = document.querySelectorAll(".pantalla");

    // Ocultamos todas las pantallas
    pantallas.forEach(pantalla => {

        pantalla.style.opacity = "0";
        pantalla.style.pointerEvents = "none";

        setTimeout(() => {

            pantalla.classList.remove("activa");

        },300);

    });

    // Esperamos un poquito y mostramos la nueva
    setTimeout(() => {

        const nuevaPantalla = document.getElementById("pantalla" + numero);

        if(nuevaPantalla){

            nuevaPantalla.classList.add("activa");

            nuevaPantalla.style.opacity = "1";
            nuevaPantalla.style.pointerEvents = "auto";

            pantallaActual = numero;

        }

    },300);

}



// =====================================================
// Comprobar que todo cargó
// =====================================================

window.onload=function(){

    
    mostrarPantalla(1);

}
// ===============================
// LLUVIA DE CORAZONES
// ===============================

function crearCorazon(){

    if(pantallaActual !== 5) return;

    const contenedor = document.getElementById("corazones");

    if(!contenedor) return;

    const corazon = document.createElement("div");

    corazon.className = "corazon";

    corazon.innerHTML = "💖";

    corazon.style.left = Math.random()*100 + "%";

    corazon.style.animationDuration = (4 + Math.random()*3) + "s";

    corazon.style.fontSize = (18 + Math.random()*18) + "px";

    contenedor.appendChild(corazon);

    setTimeout(()=>{

        corazon.remove();

    },7000);

}

setInterval(crearCorazon,300);
function abrirSobre(){

    mostrarPantalla(2);

}


function cambiarImagen(id){

    const imagen = document.getElementById(id);
    const selector = document.getElementById("selectorImagen");


    selector.onchange = function(){

        const archivo = selector.files[0];


        if(archivo){

            imagen.src = URL.createObjectURL(archivo);

        }

    };


    selector.click();

}