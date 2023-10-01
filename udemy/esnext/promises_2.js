
/*setTimeout(function(){
    console.log('Executando CallBack...')
    
    setTimeout(function(){
        console.log('Executando CallBack...')
        
        setTimeout(function(){
            console.log('Executando CallBack...')

        }, 2000)

    },2000)
},2000)*/

function esperarPor(valor = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando promise...')
            resolve('Vishhhh')
        }, valor)
    })
}

esperarPor()
    .then(() => esperarPor(2000))
    .then(esperarPor())