//Ejercicio 8 

window.onload=function() {

    function calculadora(operador, n1, n2) {
        if (operador == 'resta') {
            return n1 - n2;
        } else if (operador == 'suma') {
            return n1 + n2;
        }else if (operador == 'multiplicacio'){
            return n1 * n2;
        } else {
            return 'Introdueix un operador vàlid';
        }
    }
    
    let resultat = calculadora('resta',40,20);
    
    console.log(resultat);
    document.getElementById('resultado').value = resultat;
    
    }
    