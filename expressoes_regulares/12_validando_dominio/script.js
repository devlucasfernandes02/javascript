let validarDominio = /[?www.]\w+\.com.br|.com/;

console.log(validarDominio.test("www.google.com"));
console.log(validarDominio.test("www.teste"));
console.log(validarDominio.test("teste.com.br"));
console.log(validarDominio.test("www.horadecodar.com.br"));