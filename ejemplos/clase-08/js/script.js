
/*

while(// condicion = true ){
    // ME REPITO UNA Y OTRA VEZ
    // SI NO CUMPLE LA CONDICION SE SALE DEL WHILE Y CONTINUA
}

*/

// paso 1 inicializar variables
let contador = 0; // declarando mi variable
let estudiantes = ['Octavio', 'Daniel','Oriana', 'Juan', 'Jonathan'];

// bloque de codigo o estructuras de codigo
console.log("TODOS", estudiantes, ' tamaño ', estudiantes.length);

/*
while( condicion = true ){
    // REPITE HASTA QUE DEJE DE CUMPLIR LA CONDICION

}
*/
while(contador < estudiantes.length)
{
    console.log("INDICE => ", contador, " Estudiante =>", estudiantes[contador])
    contador = contador + 1; // asignacion de varible
}


console.log('FUERA DEL CICLO WHILE', contador);

// 
delete contador// liberar

let dameUnNumero;
let acumulador = 0;
/*
do {
   // PRIMERO INICIA EL BLOQUE Y LUEGO REPITE
   // A DIFERENCIA DEL WHILE... DO WHILE EJECUTA AL MENOS 1 VEZ
   
    dameUnNumero = prompt('Ingrese un número: ')
    
} while (dameUnNumero != 0 && isNaN(dameUnNumero));
*/

/* 

    for( inicializacion; condicion ;  cierre ){
        // repite hasta
    }
*/


let notas = [10,15,3,15,16,20];
let promedio = 0;

for(let indice = 0; indice < notas.length; indice++){
    console.log(indice, notas[indice]);
    promedio += notas[indice];
}

let total = promedio / notas.length;
console.log(total, 'TOTAL')

let animales = ['perro', 'gato', 'foca', 'ballena','tigre', 'iguana'];

for(let animal of animales){
    console.log(animal);
}

animales.forEach( (individual) => {
    console.log("INDIVIDUAL", individual)
});


/// 


// FUNCION ANONIMA AUTOINVOCADA 
( function (nombre, apellido) {
        console.log( `Hola ${nombre} ${apellido}`)
    }
)('Nelson', 'Gonzalez') // AUTOINVOCACION


// FUNCIONES DE NOMBRES => SE ELEVA HOISTIC
function Suma (primerValor = 0, segundoValor = 0){
    return primerValor + segundoValor;
}


// FUNCIONES DE EXPRESION 
let Resta = function(primerValor = 0, segundoValor = 0){
    return segundoValor - primerValor;
}

console.log(Resta(10, 20))// funcion pura 




let totalSuma = Suma(10, 50); // llamado a la funcion ejecutar la funcion 
//console.log(suma(5, 2), totalSuma);


// funciones de flecha 

let Multiplicar = (primerValor = 1, segundoValor = 1) => primerValor * segundoValor;


console.log(Multiplicar(2, 3));

console.log(new Date())
// funciones anonimas X
// funciones literales de expresion X 
// funciones de nombre  X
// arrow funciones de flechas X
// funciones puras e impuras
// funciones autoinvocadas X




