
let miboton = document.getElementById('myBtn');

let numero1 = 15, numero2 = 20;

miboton.addEventListener('click', function(){
    
    let suma = 0; // inicializacion
    //let caja = document.getElementsByClassName('caja')
    let selector = document.getElementById('resultado');
    
    suma = numero1 + numero2; // operacion
    
    selector.innerText = suma; // imprimo el resultado
    
    //  caja[0].style.display = 'block';

});

let edad = 51;
/*
ESTRUCTURA IF = CONDICIONAL

if(condificion SI se cumple ){
    // BLOQUE DE CODIGO 
}

ESTRUCTURA IF ELSE 

if(condicion SI se cumple){
    // SI SE CUMPLE
}else{
    // EJECUTA SI NO SE CUMPLE
}


ESTRUCTURA IF ELSE IF ELSE

*/

let suma = 1

let nombre = undefined
/*
// nombre existe 
if(nombre){
    alert('mi nombre es: '+ nombre)
}

// nombre no existe 
if(!nombre){
    alert('no hay nombre para mostrar')
}
*/

//undefined null false 0 '' // valores falsos




/*
if(true){
    alert('soy un niño');
}else if(true) {
    alert('soy adolescente');
}else if(true) {
    alert('soy adulto');
}else{
    false
    // si no cumple se cumple esta condicion
    alert('soy una persona mayor');
}
*/

// operadores logicos

// AND (y) => && =>  true && true = false // ambos tienen que cumplir
// OR (O)  => || => true && false = true // uno tiene que cumplir 
// NEGATION => ! =>  !true = falso ---- !false = verdadero


let primernombre = 'Nelson', segundonombre 

let nombrecompleto = `${(primernombre && primernombre)} ${(segundonombre || segundonombre)}`;

//alert(nombrecompleto)


let nombreMascota = 'Fifi' && 'Lola'

let isDog = true; 

// mivariable = condicion ? valor verdadero : mi valor falso
let animal =  isDog ? 'Bethoven' : 'Garfield'; 
console.log(animal);


// SWITCH 

let numero = prompt('Ingrese el numero de dia');

switch(+numero){
    case 1:
        alert('Hoy es lunes');
        break;
    case 2:
        alert('Hoy es martes');
        break;
    case 3:
        alert('Hoy es miercoles');
        break;
    case 4:
        alert('Hoy es jueves');
        break;
    case 5:
        alert('Hoy es viernes');
        break; 
    case 6:
        alert('Hoy es sabado');
        break; 
    case 6:
        alert('Hoy es sabado');
        break; 
    case 7:
        alert('Hoy es domingo');
        break;
    default:
        alert('no se que dia es hoy')
        break;
}

try {
    //correcto
    let nombre = 'Nelson'
    if(!nombre){
        throw('El nombre no asignado')
    }
    console.log('hola '+ nombre)
} catch (error) {
    //incorrecto
    console.error('el nombre no ha sido definido')
}