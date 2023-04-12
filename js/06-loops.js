/* Loops (ou estruturas/laços
de repetição) 

Tradicionais: while, do/while, for
Específicos: for/of (ARRAYS), for/in */

// Exemplo 1: while (enquanto)
// Este loop SOMENTE funcionará se
// a condição for verdadeira

// Variável de controle de repetição
/* let contador = 1;

while( contador <= 4 ){
    console.log(`Valor de contador: ${contador}`);
    contador++; // incremento
    // contador = contador + 1;
} */

// Exemplo 2: do/while (faça/enquanto)
// Este loop funcionará SEMPRE no mínimo
// uma vez, não importando a condição
/* let contador = 1;
do {
    console.log(`Contador vale ${contador}`);
    contador++;
} while(contador <= 5); */

// Exemplo 3: for (para)
//i, j, k (nomes comuns para variáveis de controle)

// for( variavel de controle; condição; atualização ){
/* for( let i = 1; i <= 5; i++ ){
    console.log(`Valor de i: ${i}`);
} */

// Exemplo 4: loop com array
const alunos = [
    "Daniel", "Raphael", "Camila", "Valeska",
    "Thiago", "Ricardo", "Vinicius", "Chaves",
    "Chapolin"
];

// Guardando o tamanho/comprimento do array
let quantidade = alunos.length; 

console.log("-- Resultado usando for --");
for( let i = 0; i < quantidade; i++ ){
    console.log(`Nome: ${alunos[i]}`);
}

console.log("-----------");
/* for/of para de/do*/ 
console.log("-- Resultado usando for/of --");


/* for/of é uma sintaxe exclusiva (e mais simples) manipulação de dados de um array */ 
for( let aluno of alunos ){
    console.log(`Nome: ${aluno}`);;
}


console.log("---------");

/* for/in sintaxe exclusiva para manipulção 
de dados de um objeto*/
let pessoa = {
    nome: "Kaiky Lima",
    idade: 66,
    cidade: "São Paulo"
};

for( let dados in pessoa ){
    
    // Exibe somente o nome das props
    /*console.log(dados);

    // Exibe os dados de cada prop.
    console.log(pessoa[dados]);*/

    console.log(`${dados}: ${pessoa[dados]}`
    );
}


