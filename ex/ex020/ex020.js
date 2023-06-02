function veri() {
    var filmes = ['Filme Barbie', 'Filme  Panico', 'Filme  Shazam', 'Filme  Batman', 'Filme  Tiringa e o lobisomem']
    for (var i = 0; i < filmes.length; i++) {
        document.getElementById("aprv").innerHTML += `Posição do vetor ${i} - ${filmes[i]} <br>`
}
}
