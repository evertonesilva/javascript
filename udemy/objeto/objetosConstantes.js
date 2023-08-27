// pessoa -> endereço de memoria '123' -> {...}
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro' // não mudou o endereço de memoria '123', mudou apenas o dado 
console.log(pessoa)

//pessoa esta tentando alterar o endereço '123' para o '456'
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa) // ninguem pode excluir, nem adicionar 

pessoa.nome = 'Maria'
console.log(pessoa.nome)