function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 13) {
                //Criança
                img.setAttribute('src', 'criancaH.png')
            } else if (idade < 23) {
                //Jovem
                img.setAttribute('src', 'jovemH.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'adultoH.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 13) {
                //Criança
                img.setAttribute('src', 'criancaM.png')
            } else if (idade < 23) {
                //Jovem
                img.setAttribute('src', 'jovemM.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'adultoM.png')
            } else {
                //Idosa
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}