let idade = 22;

if(idade == 22) {
    console.log("A idade é igual a 19.");
}

if(idade > 25) { 
    console.log("A idade é maior que 25.");
}

let nome = "Lucas"

if (nome == "Lucas" && idade < 18) {
    console.log("Apto!");
} else {
    console.log("Não Apto!");
}

let passaporte = true;

if((nome == "Lucas" && idade > 30) || passaporte == true) {
    console.log("Liberado!");
}

let velocidade = 100;

if(velocidade <= 80) {
    console.log("Não foi multado.");
}
else {
    console.log("Foi multado.");
}