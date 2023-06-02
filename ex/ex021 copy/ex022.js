var filmes = []
var imagens = []
function veri() {
    var nome = document.getElementById('in').value
    var image = document.getElementById('img').value
    filmes.push(nome)
    imagens.push(image)
    document.getElementById('aprv').innerHTML = ``
    document.getElementById('mage').innerHTML = ``
    for(var i = 0; i < filmes.length; i++){
        document.getElementById('aprv').innerHTML += `<img src="${imagens[i]}" width="150px" height="225px"><br>`
        document.getElementById('aprv').innerHTML += `${filmes[i]}<br>`
    }
}
function faz(){
    var num = parseInt(Math.random() * filmes.length)
        document.getElementById('indi').innerHTML += `<img src="${imagens[num]}" width="150px" height="225px"><br>`
        document.getElementById('indi').innerHTML += `${filmes[num]}<br>`
}