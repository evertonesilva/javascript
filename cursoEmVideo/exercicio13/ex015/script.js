function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('data')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano ){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'foto.xxx') // em todos
            }//criança
            else if (idade < 21){
            }//Jovem
            else if (idade < 50){

            }
            //adulto
            else {
                //idoso
            } 
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){

            }//criança
            else if (idade < 21){
            }//Jovem
            else if (idade < 50){

            }
            //adulto
            else {
                //idoso
            } 
        } res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    } 

}