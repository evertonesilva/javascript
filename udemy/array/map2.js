const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apneas com os preços

const paraObjeto = json => JSON.parse(json)
const apneasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apneasPreco)

console.log(resultado)