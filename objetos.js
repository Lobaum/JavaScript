var ListaCarros = []


// Declarando um obj e informando os atributos
// Todo obj declaro com { }
var carro = {
    ano: '2023',
    modelo: 'R8',
    Marca: 'Audi'
}

// Para exibir i atributo do obj faço da seguinte forma
// Objeto.atributo
console.log (carro.ano + " - " + carro.modelo)
console.log (`${carro.ano} - ${carro.modelo}`)

ListaCarros.push (carro)
console.log (ListaCarros.length) // 1 - só existe 1 item
// Novo obj
carro = {
    ano: '2022',
    modelo:'M5',
    marca: 'Bmw'
}
// Adicionando novo obj carro ao vetor "listacarros"
ListaCarros.push (carro)
console.log (ListaCarros)
// Exibindo uma lista apenas com o modelo do carro
for (var pos in ListaCarros) {
    console.log (ListaCarros[pos].modelo)
}