/*Comandos condicionais 
if (SE) / else (SENÂO)
else if (SENÂO SE)
switch (ESCOLHA / ANALISE / case (CASO)

Operadores relacionais:
>  (MAIOR WUE) 
>  (MENOR QUE) 
>= (MAIOR OU IGUAL) 
>= (MENOR OU IGUAL)
== (IGUALDADE)
!= (DIFERENTE) */ 

// Exemplos 
const aluno = "Chaves";
let nota1 = 10;
let nota2 = 9;
let faltas = 11;
let media = (nota1 + nota2) / 2;

console.log(`Aluno (a): ${aluno}`);
console.log(`notas: ${nota1} e ${nota2}`);
console.log(`Média: ${media}`);


// Critério de aprovação 
const mediaMinima = 7;
const limitedefaltas = 10

/* ALGORITIMO:
Se a media obtida pelo aluno for maior ou 
igual a media minima da escola, então ele 
estara aprovado. Caso contrario, ele estara
reprovado.*/ 
 if(media >= mediaMinima && faltas < limitedefaltas){
    console.log("aprovado");
 } else {
    console.log("Reprovado");
 }

 console.log("--------");
 /* Condicional Encadeada */

 /* Algoritimo para ánalise de desempenho 

Média menor que 3? PÉSSIMO
Média menor que 5? RUIM 
Média menor que 7? REGULAR 
Média menor que 9? BOM
Nenhuma das anteriores? ÓTIMO */

// Variavel ira armazenar o texto/desempenho
let desempenho; // começa indefinida 
if(media < 3){
    desempenho = "PÉSSIMO";

} else if(media < 5){
    desempenho = "RUIM";
}else if(media < 7){
    desempenho = "REGULAR";
}else if(media < 9 ){
    desempenho = "BOM";
}else{
    desempenho = "ÓTIMO";
}

console.log(desempenho);
