const imprimirResultado = function(nota){
    if(nota >= 7) {
        console.log('Aprovado! Sua nota foi ' + nota)
    } else {
        console.log('Reprovado! Sua nota foi ' + nota)
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa') // cuidado!!!