let telefone = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(telefone.test("(81)4004-5050"));
console.log(telefone.test("(91)40045-5050"));
console.log(telefone.test("400-505"));
console.log(telefone.test("4004-5"));

const cep = /\d{5}-\d{3}/;

console.log(cep.test("52070-070"));
console.log(cep.test("asd"));
console.log(cep.test("52070-070"));
console.log(cep.test("5207-123"));