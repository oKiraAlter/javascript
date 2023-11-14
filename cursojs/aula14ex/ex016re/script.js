function contar() {
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Não foi possível contar!'
    } else {
        res.innerHTML = `Contando: <br>`
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <=0) {
            window.alert('Não foi possível Contar! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
        //Contagem crescente
            for(c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }

        } else {
        //Contagem regressiva
            for(c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }

        res.innerHTML += `\u{1F3C1}`
    }       
}