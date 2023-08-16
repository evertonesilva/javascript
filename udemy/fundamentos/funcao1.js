//Função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(3, 5, 8, 7, 9)
imprimirSoma()

//Função com retorno

function soma(a, b = 1){
    return a + b
}

console.log(soma(6, 3))
console.log(soma(2))
