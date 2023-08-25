let contador = 0;

//Cria um alert onde o usuario informa um número 
let numUsuario = prompt('Informe um número positivo para nosso contador contar até seu número escolhido');

//Enquanto o contador não for menor e igual a número escolhido pelo o usuario ele não encerra o programa se o usuario escolheu 4 ele vai imprimir no console 0,1,2,3 e 4 até chegar no seu número informado
while(contador <= parseInt(numUsuario)){
  //imprime no console todos os números contados pelo o contador 
  console.log(`Número ${contador}`);
  //soma mais um a cada loop
  contador++;
}
