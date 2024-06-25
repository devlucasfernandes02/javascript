const validarDataDeNascimento = /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}$/;

console.log(validarDataDeNascimento.test("64/05/2002"));
console.log(validarDataDeNascimento.test("04/01/1994"));
console.log(validarDataDeNascimento.test("04/01/20065"));
console.log(validarDataDeNascimento.test("01/1147/2002"));
console.log(validarDataDeNascimento.test("312/11/2002"));