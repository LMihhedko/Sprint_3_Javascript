//Ejercicio 7 

let items = ['taula', 'cadira', 'ordinador', 'llibreta'];

for (var i = 0; i < items.length; i++) {
    let item = items[i];
    let position = items.indexOf(item);
    console.log(`L'objecte ${item} està a la posició ${position}`);
}