let pessoa = {
    nome: "Matheus",
    profissao: "Programador",
    idade: 28,
};


console.log(pessoa.nome);

delete pessoa.nome;

console.log(pessoa.nome);
console.log(pessoa);

pessoa.casado = false;

console.log(pessoa.casado);
console.log(pessoa);