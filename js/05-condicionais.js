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
let nota2 = 5;
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


