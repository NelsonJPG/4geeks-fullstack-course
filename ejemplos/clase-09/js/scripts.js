


// accediendo a nuestro documento 
/*
console.log(document)
console.log(document.head) // el elemento html de head y sus descendientes
console.log(document.body) // el elemento html de body y sus descendientes
console.log(document.links) // solo muestra la lista de enlaces 
console.log(document.forms) // solo muestra la lista de formularios 
console.log(document.title) // el titulo de la pagina



let misnoticias = document.getElementById('noticias'); // selectores de id
console.log(misnoticias);

let todosLosJorges = document.getElementsByClassName('solo-jorge');

console.log(todosLosJorges);


let mietiquetaSeleccionada = document.getElementsByTagName('span');
console.log(mietiquetaSeleccionada);

let selectorPersonalizado = document.querySelector('#noticias')
console.log(selectorPersonalizado)

misnoticias.style.backgroundColor = 'red';

let mitituloPersonalizado = document.createElement('h2'); // <h2></h2>
mitituloPersonalizado.innerHTML = 'Prueba de Inserción';


misnoticias.appendChild(mitituloPersonalizado)



/*
//before
<div id=noticias>
    // PREPEND agrego al inicio de mi lista
    - nodo (hijo 1) 
    - nodo (hijo 2)
    - nodo (hijo N)
    // APPEND agrego al final de mi lista
</div>
// after
*/


// movernos en el dom

let body = document.querySelector('body')
//console.log(body.children) // hijos de body



// estudiantes 
let estudiantes = document.querySelector('#menuEstudiantes');
estudiantes.children[1].classList.add('lista') // agrego clases css
estudiantes.children[1].classList.remove('otra') // elimino clases css




let buttonAgregar = document.querySelector("#addStudent");

let inputText = document.querySelector("[name='estudiante']");

buttonAgregar.addEventListener("click", function() {
    console.log("clickeando")
    let value = inputText.value;

    let menuEstudiantes = document.querySelector('#menuEstudiantes')
    
    let lista = document.createElement('li'); // creando un elemento HTML
    //lista.innerText = value; // propiedades texto
    lista.innerHTML = `${value} <a href="javascript::void()">Editar</a> <a href="javascript::void()">Eliminar</a>`
    menuEstudiantes.appendChild(lista);


});



let canva = document.querySelector('#canva')
/*
canva.addEventListener('click', function() {
    setInterval( () => 
        console.log(window.scrollX, window.scrollY)
    , 1000)
})
*/
//console.log("boton", buttonAgregar, inputText);

let minombre = document.querySelector('#minombre');
/*
minombre.addEventListener('keydown', function(){

    let imprimir = document.querySelector('#imprimir');

    if(isNaN(this.value)){
        imprimir.innerText = "solo puedes escribir numeros"
        return
    }
    imprimir.innerText = this.value;
})
*/
let initialSTate = [
    {nombre: 'Nelson', apellido: 'Gonzalez', cedula: 22670148}
]

let tablaCurso = document.querySelector('#curso');

let btnCurso = document.querySelector("#enviarCurso");

let nombre = document.querySelector("#input1"),
apellido = document.querySelector("#input2"),
cedula = document.querySelector("#input3");


let control = document.querySelectorAll('.form-control')

function validar(element){
    if(element.value){
        element.classList.remove('is-invalid')
        element.classList.add('is-valid')
        element.nextElementSibling.innerText = '';
    }else{
        element.classList.remove('is-valid')
        element.classList.add('is-invalid')
        element.nextElementSibling.classList.add('text-danger')
        element.nextElementSibling.innerText = 'El campo es requerido';
    }
}

/*control.addEventListener('keyup', function(){
    let campo = this;
    if(campo.value){
        nombre.classList.remove('is-invalid')
        nombre.classList.add('is-valid')
        nombre.nextElementSibling.innerText = '';
    }else{
        nombre.classList.remove('is-valid')
        nombre.classList.add('is-invalid')
        nombre.nextElementSibling.classList.add('text-danger')
        nombre.nextElementSibling.innerText = 'El campo es requerido';
    }

});*/

btnCurso.addEventListener('click', function(e){
        e.preventDefault();// solo se aplica si el boton es submit

        if(!nombre.value){
            nombre.classList.add('is-invalid') 
            nombre.nextElementSibling.classList.add('text-danger')
            nombre.nextElementSibling.innerText = 'El campo es requerido';
        }
        if(!apellido.value){
            apellido.nextElementSibling.classList.add('text-danger')
            apellido.nextElementSibling.innerText = 'El campo es requerido';
        }
        if(!cedula.value){
            cedula.nextElementSibling.classList.add('text-danger')
            cedula.nextElementSibling.innerText = 'El campo es requerido';
        }

        let fila = document.createElement('tr')
        fila.innerHTML = `
            <td>${nombre.value}</td>
            <td>${apellido.value}</td>
            <td>${cedula.value}</td>
        `;
        console.log(fila);
        tablaCurso.children[tablaCurso.children.length - 1].append(fila) // tbody
        console.log( tablaCurso.children[tablaCurso.children.length - 1])


    
    //console.log(this)
})