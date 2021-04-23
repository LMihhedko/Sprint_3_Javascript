//Nivel 2

		//variables globales
		let acumulador='';
        let n1= 0;
        let n2 = 0;
        let operador = '';

		//activar listeners
		window.onload=function() {
            init();
            
			//botones numéricos y operaciones
			let botones = document.querySelectorAll('.valores')

			botones.forEach(function(boton){
                boton.addEventListener("click", acumular);
			})

			//boton total
			document.querySelector('.total').addEventListener("click", calcular);

			//botones borrar
			let botonBorrar = document.querySelectorAll('.borrar')

			botonBorrar.forEach(function(boton) {
				boton.addEventListener("click", borrar);
			})

		}


		//funciones
        function acumular () {
			//recuperar el valor de la tecla pulsada
			let valor = this.value 
			//guardar el valor en un acumulador
			acumulador += valor
			//mostrar el acumulador en el display de la calculadora
			document.getElementById('resultado').value = acumulador

            //saber operador, n1 y n2 a partir de acumulador
                if (acumulador.includes("+")) {
                    operador = '+';
                    n1 = parseFloat(acumulador.substr(0, acumulador.indexOf('+'))); 
                    n2 = parseFloat(acumulador.substring(acumulador.indexOf('+') + 1));

                } else if (acumulador.includes("-")) {
                    operador = '-';
                    n1 = parseFloat(acumulador.substr(0, acumulador.indexOf('-'))); 
                    n2 = parseFloat(acumulador.substring(acumulador.indexOf('-') + 1));

                }else if (acumulador.includes("*")) {
                    operador = '*';
                    n1 = parseFloat(acumulador.substr(0, acumulador.indexOf('*'))); 
                    n2 = parseFloat(acumulador.substring(acumulador.indexOf('*') + 1));

                } else if (acumulador.includes("/")){
                    operador = '/';
                    n1 = parseFloat(acumulador.substr(0, acumulador.indexOf('/'))); 
                    n2 = parseFloat(acumulador.substring(acumulador.indexOf('/') + 1));
                }

		}


        function calcular() {
            let resultado = 0;

            if (operador == '-') {
                resultado = n1 - n2;
            } else if (operador == '+') {
                resultado = n1 + n2;
            }else if (operador == '*'){
                resultado =  n1 * n2;
            }else if(operador == '/') { 
                if (n2 === 0) {
                    document.getElementById('resultado').style.fontSize = '18px';
                    resultado = 'No se puede dividir entre cero'
                } else {
                    resultado = n1 / n2;
                }
            }
            document.getElementById('resultado').value = resultado
        }

        
		function borrar () {
			//identificar el boton pulsado
			let boton = this.value

			//borrar todo
			if(boton == 'C') {
				//borrar todo
				acumulador='';
				document.getElementById('resultado').value = ''
                document.getElementById('resultado').className = '40px';
			} 
		}

        function init() {
            document.getElementById('resultado').value = "";
            }


      