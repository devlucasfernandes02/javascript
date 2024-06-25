
const notab = /[^ab]/;

console.log(notab.test("a"));
console.log(notab.test("Aqui tem a"));

const nottoaz = /[^a-z]/;

console.log(nottoaz.test('flasflsakgas'));
console.log(nottoaz.test('flasflsakgas123'));

const az = /[a-z]/;

console.log(az.test("sadadasdadads12"))


