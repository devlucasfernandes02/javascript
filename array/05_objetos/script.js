let pessoa = {
    nome: "Matheus",
    profissao: "Programador",
    idade: 28,
};

console.log(pessoa.nome);
console.log(pessoa.profissao);
console.log(pessoa.idade);

let pessoa2 = {
    nome: "Lucas",
    profissao: "Desenvolvedor",
    idade: 22,
    falar: function() {
        console.log("Olá");
    }
};

console.log(pessoa2.nome);
console.log(pessoa2.profissao);
console.log(pessoa2.idade);
pessoa2.falar();

// [] = array
// {} = obj