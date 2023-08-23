const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice}. ${nome}`)
}
fabricantes.forEach(imprimir)
fabricantes.forEach(function(fabricantes){
    console.log(fabricantes)
})

fabricantes.forEach(fabricantes => console.log(fabricantes)) // função arrow
