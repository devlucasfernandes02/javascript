const string = /\w+[id]$/;

console.log(string.test("Olá, que tal?"));
console.log(string.test("Olá, que tal? 124"));
console.log(string.test("Olá, que tal? 124  id"));
console.log(string.test("id Olá, que tal? 124"));
console.log(string.test("id Olá, id que tal? 124"));
console.log(string.test("555 id"))
