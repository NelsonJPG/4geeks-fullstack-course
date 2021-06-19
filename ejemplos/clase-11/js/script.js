

// SPREAD OPERATOR
let numerosASumar = [1,2,3,4,5]; // primer arreglo
const numerosAMultiplicar = [...numerosASumar, 6]; // segundo arreglo
numerosASumar.push(7);

const mifuncion = (miLista) => {
    let lista = [...miLista];
    lista[2] = 8;
    return lista;
} 

const mivalorNuevo = mifuncion(numerosASumar);
console.log(numerosAMultiplicar, numerosASumar, mivalorNuevo); // mostrando el segundo

let vocales = ["a", "e", "i"];
let consonantes = ["b", "c", "d"];

let letras = [...vocales, ...consonantes];
console.log(letras);


let persona = {
    nombre: "Nelson",
    apellido: "Gonzalez",
    direccion: {
        zip: 1090,
        telefono: "5844555555"
    },
    habilidades: ["javascript", "react", "html"]
}


// DESTRUCTURING
let { nombre: primerNombre, apellido, direccion: { zip } } = persona;
console.log(primerNombre, apellido, persona, zip)

// ARROW FUNCTION 
let factorial = (lista) => lista.reduce( (current, next) =>  current * next , 1)   

console.log(factorial([1,2,3,5,6]));

// functiones javascript para arrays definidas

let estudiantes = [
    {firstname: "Ana", lastname: "Doe"}, 
    {firstname: "Carlos", lastname: "Doe"}, 
    {firstname: "Samanta", lastname: "Doe"}, 
    {firstname: "Ramon", lastname: "Doe"}, 
    {firstname: "Lis", lastname: "Doe"}
];

console.log( estudiantes.find( estudiante => estudiante.firstname === 'Carlos'));
console.log( estudiantes.filter( estudiante => estudiante.firstname.length === 3));
console.log( estudiantes.map( estudiante => estudiante.firstname));
console.log( ["Nelson", "Jean Pierre", "Gonzalez", "Hernandez"].reduce( (previo, actual) => previo +" "+ actual ,'')  )