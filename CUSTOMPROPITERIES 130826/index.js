const btn = document.getElementById("toggle");
let oscuro = false ;

btn.addEventListener("click",()=>{
    oscuro = !oscuro;

    document.documentElement.setAttribute("data-theme",oscuro ? 'oscuro':'');
    btn.textContent = oscuro ? "Modo claro" :"Modo oscuro"


})
