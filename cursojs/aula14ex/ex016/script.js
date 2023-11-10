function contar() {
    var inicio = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    while (Number.inicio <= Number.fim) {
        inicio =+ passo

        res.innerHTML += `Contando: ${inicio}`
    } 
}