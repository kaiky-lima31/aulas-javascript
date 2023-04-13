/* Métodos/Funções 
de acesso/seleção do DOM 

-document.geftElementById("identificador")
Permite acessar/selecionar UM 
elemento no DOM desde que ele esteja
com um atributo "id".

-querySelector("seletor qualquer")
permite acessar/selecionar UM elemnto no
DOM através de um selector CSS.

-querySelectorA11(seletor/res qualquer)
Permite acessar/selecionar UM ou MAIS elementos
no DOM atrvés de um ou mia sseletores CSS.*/

/* Exemplos */

// Exemplo 1: getElementById()
const titulo = document.getElementById("exemplo1")
console.log(titulo);

// Modificando o conteúdo dinamicamente 
titulo.innerHTML = "<i>Brincando com JS!</i>"

// "Injetando" CSS inline
titulo.style.color = "red";
titulo.style.textAlign = "center";
titulo.style.backgroundColor = "blue"; 



// Exemplo 2: querySelector
const exemplo2 = document.querySelector("h2");
console.log(exemplo2);

// Adicionando classe CSS via JS 
exemplo2.classList.add("destaque-item");

// Exemplo 3: querySelectorall
const links = document.querySelectorAll("li a")
console.log(links);

/* NA pratica, o resultado do querySelectorALL sempre 
será um ARRAY (ou  NODElist) */

/* Aplicando o atributo target="_blanck" aos
links selecionados. */
for(let link of links){
    link.setAttribute("target", "_blanck");
};











