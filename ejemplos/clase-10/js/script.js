
let arreglo = [1,2,3,4,5,6,7,8,9,10] // en serie sumatorias de numeros
                           //i k
let tabla = [[1,2], [3,6], [4,5]] // tabla filas y columnas

let jagged = [[1,1,1,1], [2,2], [3,3,3]]


console.log("**************** ARREGLO *************************")
for(let i = 0; i < arreglo.length; i++){
    console.log(i);
}

console.log("**************** MULTIDIMENCIONALES *************************")

    for(let filas = 0; filas < tabla[i].length; filas++){
        for(let columnas = 0; columnas < tabla[filas].length; columnas++){
            console.log(tabla[filas][columnas]);
        }
    }


console.log("***************** JAGGED ************************")

for(let i = 0; i < jagged.length; i++ ){
    for(let k = 0; k < jagged[i].length; k++){
        console.log(jagged[i][k]);
    }
}