function veri() {
    var cont = 1
    var nr = document.getElementById("nome").value
    while (cont <= 20) {
      if (cont % 2 == 1) {
        document.getElementById ("aprv").innerHTML += `${nr}x${contador} = ${multi}<br>`
      } else {}
      cont++
    }
}