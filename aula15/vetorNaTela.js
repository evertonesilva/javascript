let valores = [2, 8, 6, 5, 12, 98]

//for (let pos=0; pos < valores.length; pos++){
//    console.log(`A posicção ${pos} tem o valor ${valores[pos]}`)
//}

for (let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}