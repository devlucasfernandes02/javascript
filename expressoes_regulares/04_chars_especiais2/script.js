const dia = /\d\d/;

console.log(dia.test('05') && '05'.length == 2);
console.log(dia.test('0') && '0'.length == 2);
console.log(dia.test('051') && '051'.length == 2);
console.log(dia.test('asd12') && 'asd12'.length == 2);

const palavraTresLetras =  /\w\w\w/;

console.log(palavraTresLetras.test('asd') && 'asd'.length === 3);
console.log(palavraTresLetras.test('asddas') && 'asddas'.length === 3);
console.log(palavraTresLetras.test('12a') && '12a'.length === 3);







