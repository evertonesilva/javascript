const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // retira o ultimo array
console.log(pilotos)

pilotos.push('Vestappen') //adiciona um elemento ao ultimo indice do array
console.log(pilotos)

pilotos.shift()//remove o elemento da primeira posicao
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona um elemento a primeira posicao do array
console.log(pilotos)

//splice pode adicionar ou remover elementos ao array   
//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') //adicionou
console.log(pilotos)
pilotos.splice(3, 1,) // retirou o indece 3
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // gera um novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) // gera um novo array apartir do indice [1] ate o indice [3]
console.log(algunsPilotos2)
