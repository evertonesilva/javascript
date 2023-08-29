const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

// forma de obetar dados de OBJECT
console.log(Object.keys(pessoa)) // pega so o atributo 'chave' do OBJECT
console.log(Object.values(pessoa)) // pega o atributo 'valor' do OBJECT
console.log(Object.entries(pessoa)) // pega o conjunto de atributo par 'Chave / Valor' do OBJECT

Object.entries(pessoa).forEach(([chave, valor]) =>{ // destruturing o OBJECT 
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c:3, a: 4}
const obj = Object.assign(dest, o1, o2) // faz com que os outros atributos sejam adicionados em 'dest' (concatenar)

Object.freeze(obj)
obj.c = 1234
console.log(obj)