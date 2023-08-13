function contar(){
let inicio = window.document.getElementById('ini')
let fim = window.document.getElementById('fim')
let passo = window.document.querySelector('input#passo')
let res = window.document.querySelector('div#res')

if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
    res.innerHTML = 'Impossivel Contar!'
    window.alert('[ERRO] Dados incompletos...')
} else {
    res.innerHTML = 'Contando: <br> '
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (p <= 0){
        window.alert('Passo inválido! considerando PASSO 1')
        p = 1
    }

    if(i < f){ //contagem crescente
        for (let c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1f449}`
        }
      
    } else { //contagem decrescente
        for (let c = i; c >= f; c -= p )
        res.innerHTML += `${c} \u{1f449}`
    } res.innerHTML += `\u{1f3c1}`
    
}
}
