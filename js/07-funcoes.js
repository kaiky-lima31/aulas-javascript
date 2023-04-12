/* Relemdrando:
Funções nativas do JS já usadas 

log()
prompt()
alert()
toLocaleString()
parseInt()*/

/* Funções personalizadas 
- Organização de lógica, com separação de responsabilidades - Reaproveitamento de código*/ 

/* Sintaxe 1 (tradicional)
Função anõnima/literal */ 
const exemplo1 = function(){
    // Corpo da função (ações)
    console.log("Função anônima!");
};

/* Obs.: para uma função fazer 
oque ela foi programada para 
fazer, em algum mommento ela precisa
ser "chamada/invocada". */ 

// Chamada de função 
exemplo1( ); 

/* Sintaxe 2 (tradicional)
Função nomeada/declarada */
function exemplo2(){
    // corpo da função (ações)
    console.log("Função nomeada!");
};

exemplo2();


/* Sintaxe 3 (moderna/atual): 
Arrou Function (Função "flecha/seta")  

Obs.: Esta é a sintaxe usada nso 
frameworks JS mais populares: React,
Angular, Vue, React Native  */
const exemplo3 = () => {
    console.log("Arrow Function!");
};

exemplo3();

console.log("---------");

/* Funções com parametros/argumentos 
Parâmetros (ou argumentos) são 
dados passados ´para a função "entender"
O que ela deve processar/falar

Exemplo: uma função que calcule um frete 
precisa pelo menos de um parametro com
o CEp do local de entrega. */

function login(usuario, senha){
    /* Base de dados
    com úsuario tiagobsanto e senha
    123abc */

    if(usuario == "tiagobsantos" && senha == "123abc"){
        console.log("Dados corretos, o usuário entrou");
    } else {
        console.log("Dados incorretos, acesso bloqueado,");
    }

};

login("tiagobsantos", "123abc");

console.log("----------");

function soma(valor1, valor2){
    // variavel de escopo LOCAL
    let total = valor1 + valor2;
    
    return total;
}

let resultadoA = soma(10, 500);
let resultadoB = soma(5, 1200);
let resultadoC = soma(8.9, 147.56);

console.log(resultadoA);
console.log(resultadoB);
console.log(resultadoC);

//function dobra(valor){

    // let resultadoDobrado = valor * 2;
    // return resultadoDobrado;

   // return valor * 2;
//}

// Versão 2: sintaxe Arrow Function
// const dobra = () => {
//     return valor * 2;
// };

// Versão 3: sintaxe Arrow Function com return imlpicito
/* pbds.: quando o Arrow function possui somente UM 
parâmetro; voçe pode omitir os parenteses. E 
se a arrow funvtion faz apenas uma única operação/retorno.
Na prática, voçe consegue criar uma função de uma única 
linha com arow function. */
const dobra = valor => valor * 2;

let exemploDobra = dobra(10);
console.log(exemploDobra);



