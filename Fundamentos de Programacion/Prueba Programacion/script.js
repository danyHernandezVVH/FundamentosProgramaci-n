// Definición de la función para calcular el determinante de una matriz 3x3
function calcularDeterminante() {
    // Obtener los elementos de la matriz desde el textarea
    let inputMatrix = document.getElementById('inputMatrix').value;

    // Convertir la cadena de entrada en una matriz 3x3
    let matrixRows = inputMatrix.split('\n');
    let matrix = [];

    for (let i = 0; i < matrixRows.length; i++) {
        let row = matrixRows[i].split(',').map(num => parseInt(num));
        matrix.push(row);
    }

    // Verificar si la matriz es de tamaño 3x3
    if (matrix.length !== 3 || matrix[0].length !== 3 || matrix[1].length !== 3 || matrix[2].length !== 3) {
        alert('La matriz debe ser de tamaño 3x3. Por favor, ingrese nuevamente los elementos.');
        return;
    }

    // Calcular el determinante utilizando la regla de Sarrus
    let determinante = matrix[0][0] * matrix[1][1] * matrix[2][2] +
                       matrix[0][1] * matrix[1][2] * matrix[2][0] +
                       matrix[0][2] * matrix[1][0] * matrix[2][1] -
                       matrix[0][2] * matrix[1][1] * matrix[2][0] -
                       matrix[0][0] * matrix[1][2] * matrix[2][1] -
                       matrix[0][1] * matrix[1][0] * matrix[2][2];

    // Mostrar el resultado
    document.getElementById('resultado').innerText = 'Determinante: ' + determinante;
}
