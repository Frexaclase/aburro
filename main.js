username = window.prompt("nombre:");
document.getElementById("h1").textContent = "Hola " + username;
if (username === "") {
    document.getElementById("h1").textContent = "Hola desconocido";
}
else if (username === ".") {
     document.getElementById("s").textContent= "test";
}