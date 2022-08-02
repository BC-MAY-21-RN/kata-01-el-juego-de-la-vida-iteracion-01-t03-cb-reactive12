
/*

"↵"

gen1
........
....*...
...**...
........

gen2
........
...**...
...**...
........

*/
cuadros('........\n....*...\n...**...\n........')

function formato_iteracion(entrada_O_X){
    let impresion = ""
    if (entrada_O_X == ""){
        impresion = "."
    } else if (entrada_O_X == "1"){
        impresion = "*"
    }
    return impresion
}

function cuadros (entrada){
    let numeros = new String(entrada)
    let arreglo = numeros.split('')
    console.log(arreglo)

    let impresion = "" 

    // Iteracion 1:
    for (let i = 0; i < 8; i++){   

        if (i < arreglo.length-1){
            impresion = impresion + formato_iteracion_1(arreglo[i])         
        } else if(i = arreglo.length-1){
            impresion = impresion + formato_iteracion_1(arreglo[i])+"\n"         
        }

    }
    // Iteracion 2:
    for (let i = 9; i < 17; i++){   

        if (i < arreglo.length-1){
            impresion = impresion + formato_iteracion_2(arreglo[i])         
        } else if(i = arreglo.length-1){
            impresion = impresion + formato_iteracion_2(arreglo[i])+"\n"
        }

    }
    // Iteracion 3:
    for (let i = 18; i < 26; i++){   

        if (i < arreglo.length-1){
            impresion = impresion + formato_iteracion_3(arreglo[i])         
        } else if(i = arreglo.length-1){
            impresion = impresion + formato_iteracion_3(arreglo[i])+"\n"           
            console.log(impresion)
        }

    }
    // Iteracion 4:
    for (let i = 27; i <=34; i++){   

        if (i < arreglo.length-1){
            impresion = impresion + formato_iteracion_4(arreglo[i])         
        } else if(i = arreglo.length-1){
            impresion = impresion + formato_iteracion_4(arreglo[i])+"\n"           
            console.log(impresion)
        }

    }
}


