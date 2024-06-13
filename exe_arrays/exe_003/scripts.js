let onibus = {
    rodas: 8,
    limiteDePassageiros: 40,
    portas: 2
}

console.log(onibus.rodas);
console.log(onibus.limiteDePassageiros);
console.log(onibus.portas);

delete onibus.rodas;
console.log(onibus.rodas); /*verificação de delete*/

console.log(onibus);

onibus.janelas = 20;

console.log(onibus);
console.log(onibus.janelas);


