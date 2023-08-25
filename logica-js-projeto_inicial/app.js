alert('Boas vindas ao jogo do número secreto');

//Criação de armazenamento de variaveis
let numeroSecreto = 10;
//exibe uma mensagem no console com a informação aramzenada na variavel
console.log(numeroSecreto);
let chuteUsuario;
let tentativas = 1;

//Enquando o chuteUsuario não for igual ao númeroSecreto ele fica repetindo
while (chuteUsuario != numeroSecreto) {
  //cria uma caixa de texto permitindo o usuario escrever um valor e está armazenando em uma variavel
  chuteUsuario = prompt('Escolha um numero de 1 a 30');
  console.log(chuteUsuario);

  //Condicional
  if (chuteUsuario == numeroSecreto) {
    alert(`Você acertou o número secreto é ${numeroSecreto}. Você acertou com ${tentativas} tentativas.`);
    break;
  } else {
    if (chuteUsuario > numeroSecreto) {
      alert(`O número secreto é menor ${chuteUsuario}`);
    } else {
      alert(`O número secreto é maior ${chuteUsuario}`);
    }
    //soma as tentativas a cada loop 
    tentativas++;
  }
}
