// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome , idade)

const { nome: n, idade: i} = pessoa // retirando de pessoa os atributos 
console.log(n, i) // nome e assumindo a const (n) e idade assumindo a const (i).

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome , bemHumorada)

const { endereco:{ logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

const { conta: {ag, num}} = pessoa // cuidado, o caminho até os ultimos dados tem que
console.log(ag, num) // está certo, pois vai dar erro. so o ultimo dado tem que esta errado