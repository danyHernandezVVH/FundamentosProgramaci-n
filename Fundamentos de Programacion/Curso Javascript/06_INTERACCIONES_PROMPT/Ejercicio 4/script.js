function determinarPositivo(){
    let num = parseInt(prompt("Ingrese un número: "));

    if (num < 0){
        alert("El número " + num + " es negativo");
    }else if(num === 0){
        alert("El número es igual a 0");
    }else{
        alert("El número " + num + " es positivo");
    }
}
