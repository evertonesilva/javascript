function calcular(){
    let numero = window.document.getElementById('num')
    let res = window.document.querySelector('select#txttabuada')
    if (numero.value.length == 0 ){
        window.alert('Por favor, digite um número!')
    } else { 
        let n = Number(numero.value)
        let c = 1
        res.innerHTML = ''
        while (c <= 10){
            let item = window.document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `res${c}`
            res.appendChild(item)
            c++
        }
        
    }

}