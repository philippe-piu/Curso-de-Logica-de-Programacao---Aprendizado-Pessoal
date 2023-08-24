alert('Boas vindas ao jogo do número secreto')

//Cração de armazenamento de variaveis
let numeroSecreto = 10;
//exibe uma mensagem no console com a informação aramzenada na variavel
console.log(numeroSecreto);

//cria uma caixa de texto permitindo o usuario escrever um valor e está armazenando em uma variavel
let chuteUsuario = prompt('Escolha um numero de 1 a 30');

//Condicional
if (chuteUsuario == numeroSecreto) {
  alert(`Você acertou o número secreto é ${numeroSecreto}.`);
} else {
  alert(`Você errou o número secreto é ${numeroSecreto} e você digitou ${chuteUsuario}.`);
}
