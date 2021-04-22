function enviarBienvenida(){
    let nombre     = document.getElementById("nombre");
    let apellido   = document.getElementById("apellido");
    let bienvenida = document.querySelector("#bienvenida");
    let texto      = "Bienvenid@ " + nombre.value + " "+ apellido.value;
    
    bienvenida.innerHTML= texto;
}

function Calcular() {
    let variable1 = document.getElementById("m1").value;
    let variable2 = document.getElementById("m2").value;
    let variable3 = document.getElementById("m3").value;
    let variable4 = document.getElementById("m4").value;

    let p = (parseFloat(variable1) + parseFloat(variable2) + parseFloat(variable3) + parseFloat(variable4))/4;
    document.getElementById('promedio').innerHTML = p;
}