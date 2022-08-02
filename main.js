
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

    let posVida = []
    for (let i = 0; i < entrada_O_X.length ; i++){   

        
        if (entrada_O_X == "."){
           
        } else if (entrada_O_X[i] == '*'){
            
            console.log(i)
        }     
    
        

    }

    
    
}

function cuadros (entrada){
    let numeros = new String(entrada)
    let arreglo = numeros.split('')
    console.log(arreglo)


    let arr1 = []
    let arr2 = []
    let arr3 = []
    let arr4 = []

    let impresion = "" 

    // Iteracion 1:
    for (let i = 0; i < 8; i++){   
            arr1.push(arreglo[i])       
    }
    for (let i = 9; i < 17; i++){    
        arr2.push(arreglo[i])       
    }
    for (let i = 18; i < 26; i++){     
        arr3.push(arreglo[i])       
    }
    
    formato_iteracion(arr1)
    formato_iteracion(arr2)
    formato_iteracion(arr3)
    
}


