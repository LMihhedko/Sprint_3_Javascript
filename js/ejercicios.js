//Ejercicio 5 
let nota_examen = 4.6;

if (nota_examen < 0 || nota_examen > 10){
    alert('Nota fuera de rango')
} else if (nota_examen > 5) {
    alert(`Felicidades, has aprobado el examen con un ${nota_examen}`)
} else if (nota_examen < 5){
    alert(`Ooooh has suspendido el examen con un ${nota_examen}`)
}else {
    alert('Por favor, introduce una nota válida')
}



