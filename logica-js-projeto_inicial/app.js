alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 30;

/*Criação de armazenamento de variaveis e criação de um número secreto aleatorio.
To usando o parseInt para ele gerar um número inteiro está 30 + 1 porque ele le
de 0 até 29 então coloco mais 1 para ler 30*/
let numeroSecreto = parseInt(Math.random() * (numeroMaximo + 1) );
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

/*Utilizando um operador ternario eu pergunto se tentativas é maior que 1 se for
ele emprime tentativas se não que é representado por : ele imprime tentativa */
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

 alert(`Você acertou o número secreto é ${numeroSecreto}. Você acertou com ${tentativas} ${palavraTentativa}.`);
  

