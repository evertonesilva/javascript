Array.prototype.forEach2 = function(callback) { // implementando o proprio foreach
    for ( let i = 0; i < this.length; i++)
        callback(this[i], i, this)
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice){ // tem um for em sua api, foreach tem 3 parametros, o primeiro o nome do atributo o segundo o indice e o terceiro o array.
    console.log(`${indice +1}) ${nome} `)
})
