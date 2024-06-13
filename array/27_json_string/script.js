let pessoa = {
    "nome": "Lucas",
    "idade": 22,
    "profissão": "Programador",
    "hobbies": ["Video game", "Leitura", "Correr"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);

let pessoaTexto2 = JSON.parse(pessoaTexto);

console.log(pessoaTexto2);

for(i = 0; i < 3; i ++) {
    console.log(pessoaTexto2.hobbies[i]);
}