function validarPuntaje(){
    let puntuacion = parseInt(prompt("Ingrese puntaje: "));

    //Medir puntuación
    if(puntuacion < 0){
        alert("Ingrese un dato válido");
    }else if (puntuacion >= 90) {
        alert("Excelente");
    } else if (puntuacion >= 70 && puntuacion <= 89) {
        alert("Buen trabajo");
    } else{
        alert("Necesitas mejorar");
    }
}

