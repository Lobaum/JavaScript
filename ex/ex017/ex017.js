function veri() {
    var ini = document.getElementById("in").value
    var fin = document.getElementById("fin").value
    ini = Number(ini)
    fin = Number(fin)
    while ( ini <= fin  ){
        if (ini % 2 == 1){
            document.getElementById("aprv").innerHTML += `${ini}<br>`
        } else {}
        ini++
    }
}