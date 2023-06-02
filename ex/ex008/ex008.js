function media(){
    var nm = document.getElementById("aluno").value
    var nr = document.getElementById("nota1").value
    var nr2 = document.getElementById("nota2").value
    nr = Number(nr)
    nr2 = Number(nr2)
    var soma = (nr + nr2) / 2
    if (soma >= 7) {
      document.getElementById ("passou").innerHTML = `<b>PASSOU DE ANO</b>`
    } else {
        document.getElementById ("npassou").innerHTML = `<b>NAO PASSOU DE ANO</b>`
    }
    document.getElementById("resultados").innerHTML +=
     `O aluno ${nm} tirou nota ${nr} e ${nr2} sua média foi ${soma} <br>`
}

function calcularmedia (nota1)