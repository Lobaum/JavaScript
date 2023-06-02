function veri() {
    var nome = document.getElementById("nome").value
    var idade = document.getElementById("txt").value
    idade = Number (idade)
    if (idade >= 17 && idade <= 70) {
      document.getElementById("aprv").innerHTML = `Seu voto é obrigatório<br>`
      aprv.style.color = 'green'
    } else if (idade < 16) {
      document.getElementById("naprv").innerHTML = `Você não pode voltar<br>`
      naprv.style.color = 'red'
    } else{
        document.getElementById("opc").innerHTML = `Seu voto é opcional`
    }
  }