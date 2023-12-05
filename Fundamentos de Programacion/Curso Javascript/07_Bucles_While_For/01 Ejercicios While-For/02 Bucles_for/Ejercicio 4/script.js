   // Ejercicio 1: Mostrar los números del 1 al 5 utilizando for
      let resultadoFor1 = '';
      for (let i = 1; i <= 5; i++) {
      resultadoFor1 += `<li>${i}</li>`;
      }
      document.getElementById('forList').innerHTML = resultadoFor1;
