alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 8;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 10');

if (chute == numeroSecreto){
    alert(`Isso aí, Você descobriu o número secreto (${numeroSecreto})!`);
} else {
    alert('Você errou :(');
}
















// desafio 1
// let diaSemana = prompt('Qual é o dia da semana? ')
// console.log(`dia da semana: ${diaSemana}`)
// if (diaSemana == 'sabado' || diaSemana == 'domingo') {
//     alert('Bom final de semana!')
// } else {
//     alert('Boa semana!')
// }

// desafio 2
// let numero = prompt('Informe qualquer número natural: ')
// console.log(`O número natural é: ${numero}`)
// if (numero >= 0) {
//     alert(`${numero} é positivo!`)
// } else {
//     alert(`${numero} é negativo!`)
// }

// desafio 3
// let pontuacao = prompt('Digite a pontuação: ')
// if (pontuacao >= 100) {
//     alert(`A pontuação foi ${pontuacao}! Parabéns, você venceu!`)
// } else {
//     alert(`A pontuação foi ${pontuacao}! Tente novamente para ganhar.`)
// }

// desafio 4 
// let saldo = 500
// let deposito
// alert(`Seu saldo atual é: R$${saldo},00`)

// let escolha = prompt('Digite 1 para despositar ou 2 para sair')
// if(escolha == 1) {
//     let deposito = prompt(`Quanto deseja depositar? `)
//     resultado = parseInt(saldo) + parseInt(deposito)
//     alert(`Seu saldo agora é R$${resultado},00`)  
// } else if (escolha == 2) {
//     alert(`Obrigado pelo uso de nosso serviço. Seu saldo continua em R$${saldo},00`)
// } 

// desafio 5
// let nome = prompt(`Digite seu nome, por favor: `)
// alert(`Bem Vindo(a) ${nome}!`)