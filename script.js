//Projectos ypu tube de prueba//

window.onload = iniciar;

function iniciar(){
   let btnAgregar = document.getElementById("btnAgregar");
   btnAgregar.addEventListener("click", clickBtnAgregar)
   mostrarNotas();
}

function clickBtnAgregar() {
    let txtNota = document.getElementById("txtNota");

    let notas = [];
    notas.push(textNota.Value);
    localStorage.notas = JSON.stringify(notas);
    mostrarNotas();
}

function mostrarNotas() {
    let divNotas = document.getElementById("letNotas");
    let notas = JSON.parse(localStorage.notas);
    for(var nota of notas)
    letNotas.innerHTML = localStorage.nota;


}
