function login(){
    let userName = prompt("Por favor ingrese nombre de usuario: ");
    let password = prompt("Por favor ingrese contraseña: ");
    if (userName === "tespinoza" && password === "123456"){
        alert("Acceso concedido");
    } else {
        alert("Acceso denegado");
    
    }
}
