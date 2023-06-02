function calcular(){
    var nr = document.getElementById("numero1").value
    var nr2 = document.getElementById("numero2").value
    var dobro = nr * nr2
    var metade = nr / nr2 
    var soma = nr + nr2
    var sub = nr - nr2
    var Exp = nr ** nr2
    var resto = nr % nr2
    document.getElementById("resultados").innerHTML += `${nr} x ${nr2} = ${dobro} <br>
    ${nr} + ${nr2} = ${soma} <br> ${nr} - ${nr2} = ${sub} <br>
    ${nr} ** ${nr2} = ${Exp} <br> ${nr} % ${nr2} = ${resto} <br> ${nr} / ${nr2} = ${metade} <br>`
} 