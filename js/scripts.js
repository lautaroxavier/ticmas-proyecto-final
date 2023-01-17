const API_URL = "https://randomuser.me/api/?gender=male";

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        reemplazar_datos(data);
    })

function reemplazar_datos(datos){
    let nombre = datos.results[0].name.first + " " + datos.results[0].name.last;
    console.log(nombre);
    let direccion = datos.results[0].location.street.number + " " + datos.results[0].location.street.name;
    console.log(direccion);
    let foto_perfil = datos.results[0].picture.large;
    console.log(foto_perfil);
    let telefono = datos.results[0].phone;
    console.log(telefono);
    let correo = datos.results[0].email;
    console.log(correo);
    let nacimiento = datos.results[0].dob.date;
    nacimiento = nacimiento.slice(0,10);
    console.log(nacimiento);
    // reemplazar contenido en elementos HTML
    document.getElementsByTagName("h1")[0].innerHTML = nombre;
    document.querySelector("img").setAttribute("src", foto_perfil);
    document.getElementById("direccion-correo").innerHTML = correo;
    document.getElementById("fecha-nacimiento").innerHTML = nacimiento;
    document.getElementById("direccion").innerHTML = direccion;
    document.getElementById("telefono").innerHTML = telefono;
}

function mostrar_info(nombre_contenido,signo){
        if (document.getElementById(nombre_contenido).style.display !== "none"){
            document.getElementById(nombre_contenido).style.display = "none";
            document.getElementById(signo).className = "fa-solid fa-plus";
        } else {
            document.getElementById(nombre_contenido).style.display = "block";
            document.getElementById(signo).className = "fa-solid fa-minus";
        }
};

function cliquear(nombre){
    document.getElementById(nombre).click();
}

cliquear("titulo-correo");
cliquear("titulo-nacimiento");
cliquear("titulo-telefono");
cliquear("titulo-direccion");