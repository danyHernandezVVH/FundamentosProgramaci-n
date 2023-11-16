// Ejercicios con while

// Ejercicio 1: Mostrar los números del 1 al 5 utilizando while
let resultado1 = '';
let contador1 = 1;
while (contador1 <= 5) {
    resultado1 += `<li>${contador1}</li>`;
    contador1++;
}
document.getElementById('whileList').innerHTML = resultado1;

    // Ejercicio 2: Calcular la suma de los números del 1 al 10 utilizando while
    let resultado2 = 0;
    let contador2 = 1;
    while (contador2 <= 10) {
        resultado2 += contador2;
        contador2++;
    }
document.getElementById('whileList').innerHTML += `<li>La suma del 1 al 10 es: ${resultado2}</li>`;

// Ejercicio 3: Mostrar los números pares del 1 al 10 utilizando while
    let resultado3 = '';
    let contador3 = 1;
    while (contador3 <= 10) {
    if (contador3 % 2 === 0) {
        resultado3 += `<li>${contador3}</li>`;
    }
    contador3++;
    }
    document.getElementById('whileList').innerHTML += resultado3;


    // Ejercicios con for

    // Ejercicio 1: Mostrar los números del 1 al 5 utilizando for
    let resultadoFor1 = '';
    for (let i = 1; i <= 5; i++) {
    resultadoFor1 += `<li>${i}</li>`;
    }
    document.getElementById('forList').innerHTML = resultadoFor1;

    // Ejercicio 2: Calcular la suma de los números del 1 al 10 utilizando for
    let resultadoFor2 = 0;
    for (let i = 1; i <= 10; i++) {
    resultadoFor2 += i;
    }
    document.getElementById('forList').innerHTML += `<li>La suma del 1 al 10 es: ${resultadoFor2}</li>`;

    // Ejercicio 3: Mostrar los números pares del 1 al 10 utilizando for
    let resultadoFor3 = '';
    for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        resultadoFor3 += `<li>${i}</li>`;
    }
    }
    document.getElementById('forList').innerHTML += resultadoFor3;
