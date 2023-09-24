for(let letra of 'Cod3r'){
    console.log(letra)
}

const assuntoEcma = ['Map', 'Set', 'Promisse']

for(let i in assuntoEcma){
    console.log(i)
}

for(let assunto of assuntoEcma){
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', {aboradado: true}],
    ['Set', {aboradado: true}],
    ['Promisse', {aboradado: false}]
])

for(let assunto of assuntosMap){
    console.log(assunto)
}

for(let chave of assuntosMap.keys()){
    console.log(chave)
}

for(let valor of assuntosMap.values()){
    console.log(valor)
}

for (let[ch, vl] of assuntosMap.entries()){
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for(let letras of s){
    console.log(letras)
}