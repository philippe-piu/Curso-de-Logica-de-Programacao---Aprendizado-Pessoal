let numero = parseFloat(prompt(
  'Informe um valor inteiro para verificarmos se é um número positivo, negativo ou zero: '
));

if (numero > 0) {
  console.log('Positivo');
} else if (numero < 0) {
  console.log('Negativo');
} else if (numero == 0) {
  console.log('Zero');
}
