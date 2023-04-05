/* Array
Relação de dados indexados.
Também conhecido como vetores 
ou matrizes. 

Finalidade deste recurso é armanezar 
uma série de dados num mesmo espaço 
de memória. */

// Exemplos 
let  alunos = ["Raphael", "Kaiky", "Thiago"];

console.log(alunos);

// Acessando o dado pelo ímdice
console.log(alunos[1]);
console.log(alunos[0]);
console.log(alunos[2]);

/* Mini-exercício:
- Crie um array com uma lista de 5 comidas 
que voce mais gosta.
- Exiba no console uma mensagem dizendo qual 
o nome da terceira e da última comida.*/ 


let  comidas =  ["Strogonoff", "Lasanha", "Macarrão"];

console.log("---------");


console.log(comidas[1]);
console.log(comidas[0]);
console.log(comidas[2]);

console.log("---------");

console.log( `Minha comida preferida é a ${comidas[1]}`);
console.log(`E a segunda preferida é o ${comidas[0]}`)
console.log(`E por ultimo e terceira preferida ${comidas[2]}`);

console.log("--------");

// Matriz de 2 dimensões 
let tecnologias = [
    ["HTML", "CSS", "JS"],
    ["PHP", "Node", "java", "SQL"],
    ["Figma", "Photoshop"]
];

console.log(tecnologias);
console.log(tecnologias[0][2]);// JS
console.log(tecnologias[1][1]);// Node
console.log(tecnologias[2][1]);// Photoshop









