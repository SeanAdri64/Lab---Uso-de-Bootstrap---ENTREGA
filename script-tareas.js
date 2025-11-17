const lista = document.getElementById("lista-tareas");
const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
tareas.forEach(tarea => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = tarea;
    lista.appendChild(li);
});
