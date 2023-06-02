var filmes = []
function veri() {
    document.getElementById("aprv").innerHTML = ''
    var nomes = document.getElementById('in').value
    filmes.push(nomes)
    document.getElementById('aprv')
    for (var i = 0; i < filmes.length; i++) {
        document.getElementById("aprv").innerHTML += `${filmes[i]} <br>`
}
}