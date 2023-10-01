let a = 1
console.log(a)

let p = new Promise(function (cumprirPromessa) {
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

p
    .then(valor => valor[1])
    .then(valor => console.log(valor))