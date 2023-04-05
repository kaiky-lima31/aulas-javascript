/* Objeto 
Estrutura de dados não- indexados
baseada em pares compostos por uma chave 
e por um valor. Estes pares são conhecidos 
como Propriedades ou Atributos.  */

// Exemplo 1: objeto simples 
let livro = {
    //chave : valor
    titiulo : "Senhor do Anéis",// propriedades
    ano : 1954, 
    volumes : 3,
    autor : "J.R.R. Tolkien"
};

console.log(livro.titiulo); // titulo
console.log(livro.ano); // ano
console.log(livro.volumes); // volumes
console.log(livro.autor); // autor 

console.log("-------");

// Exemplo 2: objeto com array e outro objteto
let pessoa = {
    nome : "Kaiky Lima", 
    idade : "18",
    telefone: ["11-96000-4789", "11-2135-0300"],
    endereco: {
        logradouro: "Rua kaiky bonitão",
        numero: "71",
        bairro: "Ponte-Rasa",
        cidade: "São Paulo"
    }

};

console.log(pessoa.nome); // kaiky
console.log(pessoa.telefone[0]);

console.log("-------");

// Exemplo 3: Array (sempre []) de objetos 
let livros = [
    {
        titiulo: "Inside Out",
        autor: "Nick Mason",
        ano: 2012
    },
    {
        titiulo: "O Hobbit",
        autor: "J.R.R. Tolken",
        ano: 2010
    }
] 

console.log(livros[1].titiulo);
console.log(livros[0].autor);