var hora = 11
console.log(`Agora são exatamente ${hora} horas`)

if (hora < 12) {
    console.log('Período da Manhã.')
} else if (hora > 12 && hora < 18) {
    console.log('Perído da Tarde.')
} else {
    console.log('Período da Noite.')
}