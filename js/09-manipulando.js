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

// Exemplo 3: simulação de cadastro 
/* Captura de dados de formulário, cálculos de valores,
verificação condicional, criação de HTML via JS, adição 
de conteúdo/resultados da página (DOM) */
