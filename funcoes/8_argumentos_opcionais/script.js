/*
    function nomeComIdade(nome, idade) {
        if(idade === undefined) {
            console.log(`Seu nome é ${nome}`);
        } else {
            console.log(`Seu nome é ${nome} e você tem ${idade}`);
        }
    }

    nomeComIdade("Lucas");
    nomeComIdade("Lucas", 22);
*/

function soma(a,b) {

    if(a === undefined || b === undefined) {
        console.log("ESta função precisa ter os dois argumentos.")
    } else {
        return a + b;
    }
}

console.log(soma(1));

console.log(soma(1,5));

function saudacao(nome , idade) {
    if(idade === undefined) {
        console.log("Olá, me chamo " +nome);
    } else {
        console.log("Olá, me chamo " + nome, "e tenho " + idade, "anos.");
    }
}

saudacao("Lucas");
saudacao("Lucas", 22);