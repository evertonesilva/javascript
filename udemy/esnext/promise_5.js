function funcionarOuNao ( valor, chanceErro){
    return new Promise((resolve, reject)=> {
        try{
            if(Math.random() < chanceErro){
                reject('Ocorreu um erro!')
            } else{
                resolve(valor)
            }
        } catch(e){
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(v => console.log(`Valor: ${v}`))
    .catch(err => console.log(`Erro: ${err}`)) // geralmente o catch fica no final
    .then(()=> console.log('Fim!'))