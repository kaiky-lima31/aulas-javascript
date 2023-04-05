/*  Exemplo: Cálculo de IMC*/

//Dados de entrada da aplicação
let = peso = 80;
let = altura = 1.81;

//Processsamento desses dados 
let imc = peso / (altura * altura);

// Saída
console.log(`Peso: ${peso} kg`);
console.log(`Altura: ${altura.toFixed(2)}`);
console.log(`IMC: ${imc.toFixed(2)}`)

console.log("----------")

let preco = 1000;
let desconto = 50;
let valorFinal = preco - desconto;

let configuracoes = {
    style: "currency",
    currency: "BRL"
}

console.log(
`Preço: ${preco.toLocaleString("pr-br", configuracoes)}`
);

console.log(`Preço: ${preco}`
);
console.log(`Desconto de: ${desconto.toLocaleString("pt-br", configuracoes)}`
);
console.log(`Valor Final: ${valorFinal.toLocaleString("pt-br", configuracoes)}`
);

