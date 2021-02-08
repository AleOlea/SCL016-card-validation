window.onload = iniciar;
var tareas = [];

function iniciar () {

    let btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", clickBtnAgregar)
}

function clickBtnAgregar() {
    let txtTarea= document.getElementById("txtTarea");
    let tarea = txtTarea.value;
    tareas.push(tarea)
    /*alert(tareas)*/
    mostrarTareas();
}
    

function mostrarTareas() {
    let listado = document.getElementById("listado");
    let html= "";
    debugger;
    for(let tarea of tareas){
        html += tarea + "<br />";

    }
    listado.innerHTML = html;
}


