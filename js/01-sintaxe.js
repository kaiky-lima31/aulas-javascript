// crtl ; (comentario de uma linha) 

/*shift alt a (comentario de bloco)*/

/* Variaveis e Constantes 
São recursos para armazenamento e 
manipulação de dados na memória RAM.

let -> indica variavel
const -> indica constante

*/
// Criando Variáveis
let ano = 2023;
let curso = "Programador Web";
let cidade = "São Paulo";

// Criando Constantes
const nome = "Kaiky";
const escola = "Senac Penha";

// Saida de Dados (no console)
console.log("Exemplos");
console.log(curso);
console.log(escola);
console.log(ano);

let produto = "TV Led"
let  preco = 1499.715;
let  quantidade = 3;
let total = preco * quantidade;

console.log(produto);
console.log(preco, quantidade);
console.log(total);
/*Função tofixed(número)
 Usada para determinar quantidade
 de casa decimais.*/
console.log( total.toFixed(2) );


/* Saida de dados estáticos e dinamicos*/

// Forma 1 (moderna) : Template String
console.log(`Olá1 Me chamo ${nome} e estou fazendo
o curso de ${curso} no ${escola} `);

// Forma 2 (antiga/tradicional): Concatenação
console.log("Olá! Me chamo "+nome+" e estou fazendo o curso de "+curso+" no "+escola);