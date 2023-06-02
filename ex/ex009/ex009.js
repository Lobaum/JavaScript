function cnh(){
    var nm = document.getElementById("nome").value
    var nr = document.getElementById("idade").value
    if (nr >= 18) {
        document.getElementById ("aprv").innerHTML += `Parabéns ${nm}, <b>Você pode tirar CNH</b><br>`
        aprv.style.color = 'green'
      } else {
          document.getElementById ("naprv").innerHTML += `Poxa ${nm}, <b>Você não pode tirar CNH</b><br>`
          naprv.style.color = 'red'
      }
    }