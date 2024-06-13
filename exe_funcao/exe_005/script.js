function numeroAleatorio(num) {
    return Math.floor(Math.random() * num) + 1;
}

console.log(numeroAleatorio(50));
console.log(numeroAleatorio(50));
console.log(numeroAleatorio(50));
console.log(numeroAleatorio(50));

function podeEntrarNaAuto(i) {
    if(i >=18) {
        console.log("Apta a entrar na autoescola.")
    } else {
        console.log("Não apta a entrar na autoescola.")
    }
}

podeEntrarNaAuto(14);
podeEntrarNaAuto(18);