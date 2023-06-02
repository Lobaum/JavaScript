function calcular(){
    var nr = document.getElementById("numero").value
    var dobro = nr * 2
    var metade = nr / 2 
    document.getElementById("resultados").innerHTML += `O dobro do numero ${nr} é igual a ${dobro} e a metade é igual a ${metade} <br>`
}

function limpar(){
    document.getElementById("resultados").innerHTML = ""
    var nr = document.getElementById("numero").value
}