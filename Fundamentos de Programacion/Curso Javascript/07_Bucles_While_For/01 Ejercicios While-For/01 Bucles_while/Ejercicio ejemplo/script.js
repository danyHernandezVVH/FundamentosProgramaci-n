// Ejercicios con while

// Ejercicio 1: Mostrar los números del 1 al 5 utilizando while
function contar(){
    let resultado1 = '';
    let contador1 = 1;
    while (contador1 <= 5) {
        resultado1 += `<li>${contador1}</li>`;
        contador1++;
    }
    document.getElementById('whileList').innerHTML = resultado1;
    
}
