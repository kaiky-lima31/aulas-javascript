let valorEmDolares = 500;

function covertMoeda(valor){
    return valor * 4.94;
}

let valorConvertido = covertMoeda(valorEmDolares);

console.log(
    `Valor em dólares: ${valorEmDolares}`
);

console.log(
    `Valor em reais (convertido): ${valorConvertido}`
);


  