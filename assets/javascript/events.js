let inputApellido = document.getElementById("apellido");

inputApellido.onkeydown = () => console.log("usuario presiona una tecla");
inputApellido.onkeyup =  () => console.log("usuario no presiona una tecla");

let formulario = document.getElementById("form");
formulario.addEventListener("submit", validarFormulario);

function validarFormulario (e) {
    e.preventDefault();
    console.log("Ha sido identificado")
}

let clickear = document.getElementsByTagName("input");

function hacerClick () {
    console.log("Haciendo click");
}

function mouseMove() {
    console.log("Mouse move");
}

for (const input of clickear) {
    input.addEventListener("click", hacerClick);
    input.addEventListener("Move", mouseMove);
}