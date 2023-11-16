
    // Ejercicio 2: Calcular la suma de los números del 1 al 10 utilizando for
    let resultadoFor2 = 0;
    for (let i = 1; i <= 10; i++) {
    resultadoFor2 += i;
    }
    document.getElementById('forList').innerHTML += `<li>La suma del 1 al 10 es: ${resultadoFor2}</li>`;
    1