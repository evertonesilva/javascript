const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){ // tem um for em sua api, foreach tem 3 parametros, o primeiro o nome do atributo o segundo o indice e o terceiro o array.
    console.log(`${indice +1}) ${nome} `)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)