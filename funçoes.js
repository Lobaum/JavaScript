function exibirinfo(){
    console.log ('Executei a função exibir info')
}
exibirinfo()
exibirinfo()
exibirinfo()

function calculco(nr) {
    for (var i = 0; i<= 30; i++){
    console.log (`${nr} x ${i} = ${nr * i}`)
    }
}

calculco(3)

function calculco(nr){
    let dobro = nr * 2
    return dobro
}

var rslt = calculco(7)
console.log (rslt)
var rslt = calculco(65)
console.log (rslt)
