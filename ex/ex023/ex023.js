var listafilmes = []

listafilmes = JSON.parse(localStorage.getItem('bdfilmes'))
if (listafilmes == null){
    listafilmes = []
}

exibirfilmes()

console.log(listafilmes)

function validarcadastro(nomefilme, imagemfilme){
    if (nomefilme != '' && imagemfilme != ''){
        return true
    } else {
        return false
    }
}

function veri() {
    var nomefilme = document.getElementById('in').value
    var imagemfilme = document.getElementById('img').value

    var possocadastrar = validarcadastro(nomefilme, imagemfilme)
    if (possocadastrar == false) {
        document.getElementById('erro').innerHTML  = `<b>Verifique os dados antes de cadastrar`
        erro.style.color = 'red'
        return
    }

    var filme = {
        nome: nomefilme,
        link: imagemfilme
    }
    listafilmes.push(filme)
    // Utilizando o ""localstorage" que irá gravar o nosso vetor de filmes
    // no metodo "setitem", precso passar como parametro o nome do espaço
    // Que o navegador ira reservar e passo tambem o vetor de filmes
    // Convertido em formato JSON
    localStorage.setItem ('bdfilmes', JSON.stringify(listafilmes))  

    exibirfilmes()

    document.getElementById("in").value = ''
    document.getElementById("img").value = ''
    document.getElementById("in").focus

}
function faz(){ 
    var num = parseInt(Math.random() * listafilmes.length)
        document.getElementById('indi').innerHTML = 
        `<div>
            <img src="${listafilmes[num].link}" width="150px" height="225px">
            <p>${listafilmes[num].nome}</p>
        </div>`
    }

function exibirfilmes(){
    document.getElementById('aprv').innerHTML = ``
    
    for (var i in listafilmes){
        document.getElementById('aprv').innerHTML += 
        `<div>
            <img src="${listafilmes[i].link}" width="150px" height="225px"><br>
            <p>${listafilmes[i].nome}</p>
        </div>`
    }
}

function Limpar(){
    listafilmes = []
    localStorage.setItem ('bdfilmes', JSON.stringify(listafilmes))
    exibirfilmes()
}