function transformarEmDinheiro ( valorDecimal){
    valorEmReais = `R$ ${valorDecimal.toFixed(2).replace('.', ',')}`
    console.log(valorEmReais)
}

transformarEmDinheiro(0.1 + 0.2)

