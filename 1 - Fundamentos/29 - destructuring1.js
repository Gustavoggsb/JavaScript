//Novo recurso do ES2015

const pessoa = {
  nome: "Ana",
  idade: 20,
  endereco: {
    logradouro: "Rua Augusta",
    numero: 69,
  },
};

const {nome, idade} = pessoa
console.log(nome , idade)

const {nome: n, idade: i } = pessoa

console.log(n, i)

const {endereco:{logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)