function criarProduto (nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('leite', 10))
console.log(criarProduto('Ipad', 2149))