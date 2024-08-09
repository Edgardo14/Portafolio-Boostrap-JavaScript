$(document).ready(function(){
    let height = $(window).height();
    $('#div_inicio').height(height);
    mostrar("inicio");
});

let escribir = str => {
    let arrFromStr = str.split('');
    let i = 0;
    let spanInicio = document.getElementById("spanInicio");
    let printStr = setInterval(function () {
        if (arrFromStr[i]=== ' ') {
            spanInicio.innerHTML += arrFromStr[i];
            spanInicio.innerHTML += arrFromStr[i + 1];
            i += 2;
        } else {
            spanInicio.innerHTML += arrFromStr[i];
            i++;
        }
        if (i === arrFromStr.length) {
            clearInterval(printStr);
        }
    }, 50);
};

let secciones = ["inicio", "sobreMi", "habilidades", "resumen", "portafolio", "contacto"];
let texto = "Licenciado en Ciencias de la Ingeniería";
escribir(texto);


function mostrar(idMostrar) {
    for (const id in secciones) {
        if(secciones[id]!=idMostrar)
            $(`#div_${secciones[id]}`).hide();
        else
            $(`#div_${secciones[id]}`).show(); 
    }
}

document.getElementById("botonCorreo").addEventListener("click", () => {
    let correo = document.getElementById("correoContacto").value;
    navigator.clipboard.writeText(correo);
});



document.getElementById("formularioContacto").addEventListener("submit",() => {
    let nombre = document.getElementById("name-field").value;
    let correo = document.getElementById("email-field").value;
    let asunto = document.getElementById("subject-field").value;
    let mensaje = document.getElementById("message-field").value;
    if (nombre != "" && correo != "" && asunto!= "" && mensaje!=""){
        console.log(nombre);
        console.log(correo);
        console.log(asunto);
        console.log(mensaje);
        document.getElementById("formularioContacto").innerHTML += `
        <div class="alert alert-success" role="alert">
            Datos enviados correctamente.
        </div>
        `;
    }
    setTimeout(5000);
    location.reload();
});

document.querySelectorAll('.image-container img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
}