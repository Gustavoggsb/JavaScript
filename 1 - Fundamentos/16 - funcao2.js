//armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
  console.log(a + b);
};
imprimirSoma(2, 3);

//armazenando uma função Arrow em uma variável
const soma = (a, b) => {
  return a + b;
};
console.log(soma(2, 5));

//retorno implícito
const subtracao = (a, b) => a - b;
console.log(subtracao(5, 3));

const imprimir = (a) => console.log(a);
imprimir(8);
