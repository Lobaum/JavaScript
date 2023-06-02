// Tipo de exibição de mensagens no console

console.error("Esta é uma mensagem de erro")
console.warn("Esta é uma mensagem de alerta")
console.info("Mensagem de informação")


//alert("olá mundo!!!")
console.log("olá mundo, estou utilizando o console")
function Botao1() {
    alert("Vc apertou o botao")
}
function Botaocorfundo() {
    document.body.style.backgroundColor = "green"
}

function BotaoNome() {
    var nome2 = prompt("digite o seu nome")
    confirm("Olá " + nome2 + " , entendeu variavel?")
    confirm(`Olá ${nome2}, entendeu variavel?`)
}
// String - conjunto de caracteres - declarar com "" ou ''   
var nome = "Pedro"
var sobrenome = "Henrique"

// Number - todo numero em js é do tipo Number - declarar sem ""

var idade = 17

// Boolean - Somente recebe true ou false

var aprovado = true

//Utilizamos o typeof para saber o tipo de dado

console.log(typeof nome)

// Concatenando strings com o +

console.log(nome + ' ' + sobrenome)

// Numeros

var n1 = 10
var n2 = 15
console.log(n1 + n2)
var n3 = "10"
var n4 = "15"
console.log(n3 + n4)

// Variavel recebe o valor de outra variavel

n1 = n2
console.log("n1 =   " + n1 + ' e o n2 = ' + n2)

// Para atribuir um valor decimal usamos . e nao a ,

var salario = 7000
salario = salario + 200
console.log(salario)

// Juntar texto e variavel

console.log('Olá, ' + nome + ' voce tem ' + idade + ' anos')
console.log(`Olá, ${nome} voce tem ${idade} anos`)

// Botao de somar

function Botaosmr() {
    var nm1 = prompt("digite um numero:")
    var nm2 = prompt("Digite o valor do outro numero")
    
    nm1 = parseFloat(nm1)
    nm2 = Number(nm2)
    var soma = nm1 + nm2    
    // Pegar elemento pelo id e alterando o conteudo do html
    document.getElementById ("res-soma").innerHTML += 
    `<br>A Soma de ${nm1} + ${nm2} = ${soma}`
}


function Botaocidade(){
    var cidade = document.getElementById("cidade").value
    document.getElementById("resultadocidade").innerHTML +=
    `<br> O nome da cidade ${cidade}`
}

//Operados aritmeticos e Ordem de procedencia
var opSoma = 5 + 2 //Operador de soma +
console.log(opSoma) //7
var opSubtracao = 5 - 2 //Operador de subtração -
console.log(opSubtracao) //3
var opMultiplicacao = 5 * 2 //Operador de multiplicacao *
console.log(opMultiplicacao) //10
var opDivisao = 5 / 2 //Operador de divisao /
console.log(opDivisao) //2.5
var opExpoenciacao = 5 ** 2 //Operador de expoenciacao **
console.log (opExpoenciacao) //25
var opResto = 5 % 2 //Operador de resto da divisao %
console.log(opResto) //1
//Ordem de precedencia
var ordemPrecedencia1 = 5 + 3 / 2
console.log(ordemPrecedencia1) //6.5
var ordemPrecedencia2 = (5 + 3) / 2
console.log(ordemPrecedencia2) //4
/* 1º ()
   2º **
   3º * /
   4º %
   5º + -
   */
  //Constantes - o valor nao pode ser alterado depois de atribuido
  const pi = 3.14
  // pi = 3 - Se o valor for alterado dará erro no javascript 


  //Operadores racionais
  var n1 = 5
  var n2 = 2
  console.log (n1 > n2) // Maior
  console.log (n1 < n2) // Menor
  console.log (n1 >= n2) // Maior ou igual que
  console.log (n1 <= n2) // Menor ou igual que
  console.log (n1 == n2) // igual
  console.log (n1 != n2) // Não igual


  // Estruturas condicionais
  if (n1 > n2) { //Verificando a condição entre parenteses
    // Se a condição for verdadeira "entra" nesse bloco
    console.log ("O n1 é maior que o n2")

  } else {
    // Se a condiçao NAO for verdadeira "entra" nesse bloco ELSE
    console.log ("O n1 é maior que o n2")
  }

  //Exemplo de condição

  var minhaIdade = 16
  if (minhaIdade >= 16) {
    console.log ("voce pode votar")
  } else {
    console.log ("Voce nao pode votar")
  }


  // Operadores Lógicos
  // && representa o E
  var login = "adm"
  var senha = "123"
  // Para entrar na condição TRUE as 2 condições precisa ser verdadeiras
  if (login == "adm" && senha == "123") {
  } else {
    //Executa esse bloco se pelo menos 1 condição for FALSE
  }

  var contador = 1 //iniciando o contador de x q irá executar
  while (contador <=10) { // Enquanto a condiçao for verdadeira
    if (contador % 2 == 0){ //Condicao para o contador for par
      console.log (`${contador} é par`)
    } else {
      console.log (`${contador} é impar`)
    }
    contador++ // add +1 ao contador para nao ficar em loop
  }

  // Array-Vetores

  var meuvetor = []

  // Criando vetores com dados
  var numeros = [4,1, 8, 5, 2, 7]
  var nomes = ['Silvia', 'Marcos', 'Sandra']
  var novoVetor = [20, 'SESI', true]

  console.log ( nomes [1] )
  console.log ( novoVetor [1] )

  // Verificando o atributo de tamanho do vetor
  console.log (nome.length)
  var frutas = ('Maçã', 'Laranja', 'Pera', 'Morango', 'Uva')
  for (var i = 0; i < frutas.length; i++) {
  }

  // Adicionando novo valor no final do vetor
  frutas.push('abacaxi')
  for (var i = 0; i < frutas.length; i++){
  console.log (frutas[i]) 
  }
var novalistafrutas = []
novalistafrutas.push('Limao')
novalistafrutas.push('Melancia')
console.log(novalistafrutas)
// Modificando o valor de um indice do vetor
novalistafrutas [0] = 'Melao'
console.log (novalistafrutas)





// Criando um array vazio
var vetin = []

// Criando vetores cm dados
var nms = [4, 1, 8, 5, 2, 7]
var names = ['Silvia, Marcos, Sandra']
var nvvetin = [20, 'Sesi', true]

// Acessando os dados de um vetor
console.log ( names[1] )
console.log ( nvvetin[1])

// Verificando o atributo de tamanho do vetor
console.log (nms.length) //  6

// Indice     0       1        2        3       4
var frts = ['Maçã','Laranja','Pera','Morango','Uva']

// faço um for para percorrer todo o tamanho do vetor
for (var i = 0; i < frts.length; i++) {
  console.log ( frutas[i] )
}

// Para lermos todos os elementos de um vetor, podemos também
// Utilizar o -- for in -- como o exemplo abaixo
for (var pos in frts) {
  console.log ( frts[pos])
}

frutas.forEach( item => {
  console.log ('Item pelo forEach', item)
} )