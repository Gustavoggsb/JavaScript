{
  {
    {
      {
        var sera = "Sera??";
        console.log(sera);
      }
    }
  }
}
console.log(sera); // variavel global

function teste() {
  var local = 123;
  console.log(local);
}
teste();
//console.log(local); //Erro! Variavel visivel apenas dentro da função
