// =====================================================
//      REGALO 1 MES 💌
//      EDITOR
// =====================================================

// Imagen seleccionada
let imagenSeleccionada = null;

// -------------------------------------
// Cambiar imagen
// -------------------------------------

function cambiarImagen(id){

    imagenSeleccionada = document.getElementById(id);

    document
        .getElementById("selectorImagen")
        .click();

}


// -------------------------------------
// Cuando elegimos una imagen
// -------------------------------------

const selector = document.getElementById("selectorImagen");

selector.addEventListener("change",(e)=>{

    const archivo = e.target.files[0];

    if(!archivo) return;

    const lector = new FileReader();

    lector.onload=(evento)=>{

        if(imagenSeleccionada){

            imagenSeleccionada.src = evento.target.result;

            // Guardar imagen
            localStorage.setItem(

                imagenSeleccionada.id,

                evento.target.result

            );

        }

    }

    lector.readAsDataURL(archivo);

});


// =====================================================
// CARGAR IMÁGENES GUARDADAS
// =====================================================

document.querySelectorAll("img").forEach(img=>{

    const guardada = localStorage.getItem(img.id);

    if(guardada){

        img.src = guardada;

    }

});


// =====================================================
// GUARDAR TEXTOS
// =====================================================

document
.querySelectorAll("[contenteditable='true']")
.forEach((texto,indice)=>{

    const guardado = localStorage.getItem("texto"+indice);

    if(guardado){

        texto.innerHTML = guardado;

    }

    texto.addEventListener("input",()=>{

        localStorage.setItem(

            "texto"+indice,

            texto.innerHTML

        );

    });

});