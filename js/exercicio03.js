const formulario = document.querySelector("form");
const campoPalpite = document.querySelector("#palpite");
const resultado = document.querySelector("#resultado")


formulario.addEventListener("submit", function(event){
    event.preventDefault();

    let palpiteDigitado = parseInt(campoPalpite.value);
    console.log(`Palpite: ${palpiteDigitado}`);

        /* Se o palpite digitado pelo usuário 
        for igual ao número aleatorio que o jogo gerou */
    if(palpiteDigitado == numeroAleatorio){
        // Então acertou!
        resultado.innerHTML = "Acertou mirezavi!!! 😎";
        resultado.style.color = "blue";
    /*Senão, se o palpite digitado for menor quje zero 
    OU maior que 10 */
    } else if( palpiteDigitado < 0 || palpiteDigitado > 10 ){
        // Então informar que os valores precisam ser entre 0 e 10
        resultado.innerHTML = "Digite um valor entre 0  e 10! 😉";
        resultado.style.color = "red";
    } else {
        // Senão, errou!
        resultado.innerHTML = "Xiiii errouuuuuuu :) 😂";
        resultado.style.color = "red";

        imagens.src = faustao;
    }


});

/* Gerar valores entre 0 a 10 (sem casa deciaml) */
let numeroAleatorio = parseInt(Math.random() * 11);
console.log(numeroAleatorio);

let numero = 1 & 10


