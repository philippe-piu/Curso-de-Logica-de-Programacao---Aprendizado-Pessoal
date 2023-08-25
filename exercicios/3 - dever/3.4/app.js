let contador = 0;
let numUsuario= prompt('Escolha um número positivo e faça a contagem regressiva apartir dele: ')

//Contador está recebendo o valor passado pelo usuario em num Usuario e eu passo ele de String para inteiro
contador = parseInt(numUsuario);

//Enquanto o contador for maior ou igual a zero o loop do while diminue um do valor passado pelo usurio fazendo uma contagem regreciva até zero exemplo: 4 resposta 4,3,2,1,0.
while(contador >= 0){
  //Imprime toda a contagem regressiva do loop
  console.log(`Número ${contador}`);

  //Diminui sempre um no loop
  contador--;
}