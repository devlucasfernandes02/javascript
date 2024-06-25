const pontoRegex = /./;

console.log('.');

console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("asd123"));

const dRegex = /\d/; // [0-9]

console.log('d');

console.log(dRegex.test("asd"));
console.log(dRegex.test(" "));
console.log(dRegex.test("123"));
console.log(dRegex.test("123sad"));

const dRegex2 = /\D/; // [^0-9]

console.log('D');

console.log(dRegex2.test("asd"));
console.log(dRegex2.test(" "));
console.log(dRegex2.test("123"));
console.log(dRegex2.test("123sad"));

const sRegex = /\s/; // caracteres em branco

console.log('s');

console.log(sRegex.test("asd"));
console.log(sRegex.test(" "));
console.log(sRegex.test("123"));
console.log(sRegex.test("123sad"));

const sRegex2 = /\S/; // não aceita caracteres em branco

console.log('S');

console.log(sRegex2.test("asd"));
console.log(sRegex2.test(" "));
console.log(sRegex2.test("123"));
console.log(sRegex2.test("123sad"));

const wRegex = /\w/; // caracteres alphanumericos

console.log('w');

console.log(wRegex.test("asd"));
console.log(wRegex.test(" "));
console.log(wRegex.test("123"));
console.log(wRegex.test("123sad"));

const wRegex2 = /\W/; // não aceitam caracteres alphanumericos

console.log('W');

console.log(wRegex2.test("asd"));
console.log(wRegex2.test(" "));
console.log(wRegex2.test("123"));
console.log(wRegex2.test("123sad"));


