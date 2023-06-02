function veri() {
    var contador = 1
    var nr = document.getElementById("nome").value
    while (contador <= 10) {
        var multi = nr * contador
        document.getElementById ("aprv").innerHTML += `${nr}x${contador} = ${multi}<br>`
        contador++
    }
}