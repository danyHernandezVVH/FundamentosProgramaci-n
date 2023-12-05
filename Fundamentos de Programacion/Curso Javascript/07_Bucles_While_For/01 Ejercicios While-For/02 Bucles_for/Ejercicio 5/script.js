
    //Ejercicio 5: Encontrar los N primeros Pares

    function encontrarPares(){

        let n = parseInt(prompt("Ingrese un numero por favor"));
        let array = [];

        for(let i = 1;i <= n; i++){
            array.push(i*2);
        }
        alert(`Primeros ${n} pares: ${array}`);
    }