//Exemplo 1
const exemplo1 = document.querySelector("span")

/* Ouvinte / monitor de evento 
addEventListener
("tipo de evento",função com as açoes) */
exemplo1.addEventListener("click", function(){
    exemplo1.textContent = "BOM DIAAAAAAA!"
    exemplo1.style.fontFamily = "verdana"
    exemplo1.style.textTransform = "uppercase"
    exemplo1.style.color = "red"
});

exemplo1.addEventListener("mouseout", function(){
    exemplo1.textContent = "Exemplo 01:";
    exemplo1.style.all = "unset";
    exemplo1.style.fontFamily = "times new roman"
    exemplo1.style.textTransform = "none"
    exemplo1.style.color = "black"

    if(pagina.classList.contains("modo-noturno")){
        exemplo1.style.color = "white";
    }else {
        exemplo1.style.color = "black";
    }
});

// Exemplo 2: modo noturno 

/* etapa : selecionar o objeto/elemento que será modificado */
const pagina = document.querySelector("body");

/* etapa 2: selecionar do objeto/elemento 
que será o repsonsavel por ativar/dasativar
a classe */

const botao = document.querySelector("#noturno")

/* etapa 3: progamação do evento de clique no botão */
botao.addEventListener("click", function(){
    // Etapa 4: colocar a classe na pagina

    pagina.classList.toggle("modo-noturno")

    /* etapa 5: Condicional para mudar o texto do botao */
    
    if(botao.textContent == "ativar"){
       botao.textContent = "Dasativar";
    }
    else {
    botao.textContent = "ativar"
    }
});

/* Exemplo 3: sumulação de cadastro
Captura de dados de formulario, cálculos de valores,
verificação condicional, criação de HTML via JS,
adição de conteudo/resultados na pagina (DOM) */

// Acessar e selecionar elementos que serão usados 
// pegou os elemento e jogu na memoria
const formulario = document.querySelector("form");
const camponome = document.querySelector("#nome");
const camponota1 = document.querySelector("#nota1");
const camponota2 = document.querySelector("#nota2");
const divResultados = document.querySelector("#resultados");

/* Etapa 2
Monitorar o evento de acionamento do formulário,
ou seja, detactar quando o usario clica no botao do formulario
OU pressiona ENTER */
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    /* Usamos o comando abaixo para anular o 
    comportamento padrao do navegador de tentar fazer um redirecionamento de página
    ao acionar o formulario. isso é importante para as açoes progamadas na função possam
    ser interpretadas. */

    // Etapa 3: capturar os valores digitados 

    let nome = camponome.value; 
    let nota1 = parseFloat(camponota1.value); 
    let nota2 = parseFloat(camponota2.value); 
    /* Exercicios */

    // 1) Calcule e guarde a média destas notas 
    
    /* 2) Com a média calculada, determine a situação do 
    aluno (aprovado/reprovado). Para aprovação, média tem que ser maior ou igual a 7.
    
    3) Mostre no console o nome do aluno, suas notas 
    sua média e sua situação (aprovado ou reprovado.) */


    //testes
    console.log(nome, nota1, nota2);

    let media =( nota1 + nota2 ) / 2;
    console.log(media);
    let desempenho;

     if(media >= 7 ){
        desempenho = "aprovado";
    }else if(media <= 6 ){
        desempenho = "reprovado";
    }
    console.log(desempenho);

    /* Programação para colocar os resultados no HTML */
    
    // 1)Criar o elemento/tag que será colocada no HTML
    let paragrafo = document.createElement("p");

    // 2) Montar o conteúdo da nova tag 
    paragrafo.innerHTML = `${nome} - ${media} - ${desempenho}`;
    
   // console.log(paragrafo);

    // 3) Adicionar ao HTML de destino (injetar no DOM)
    divResultados.appendChild(paragrafo);

    // Limpar os campos
    formulario.reset();

    // Devolver o foco (cursor) para o campo nome
    camponome.focus();
});
 
   











