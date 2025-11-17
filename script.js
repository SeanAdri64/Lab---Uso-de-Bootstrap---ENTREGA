// Cargar tareas en pantalla
function cargarTareas() {
    const lista = document.getElementById("lista-tareas");
    lista.innerHTML = "";
    const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareas.forEach((tarea, index) => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between";
        li.innerHTML = `
            ${tarea}
            <button class="btn btn-danger btn-sm" onclick="eliminarTarea(${index})">X</button>
        `;
        lista.appendChild(li);
    });
}
function eliminarTarea(index) {
    const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareas.splice(index, 1);
    localStorage.setItem("tareas", JSON.stringify(tareas));
    cargarTareas();
}
cargarTareas();
