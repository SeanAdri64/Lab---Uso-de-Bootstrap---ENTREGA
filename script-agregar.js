document.getElementById("formulario").addEventListener("submit", function(e){
    e.preventDefault();
    const input = document.getElementById("nueva");
    const texto = input.value.trim();
    if (!texto) return;
    const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareas.push(texto);
    localStorage.setItem("tareas", JSON.stringify(tareas));
    input.value = "";
    const alerta = document.getElementById("alerta");
    alerta.classList.remove("d-none");
    setTimeout(() => alerta.classList.add("d-none"), 1500);
});
