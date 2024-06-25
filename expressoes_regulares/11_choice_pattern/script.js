const reg = /\w+: (Lucas|Victor|Caio)/; //Nome: hsuahusada

console.log(reg.test("Nome: Lucas"));
console.log(reg.test("Nome: Andreza"));
console.log(reg.test("Nome: André"));
console.log(reg.test("Nome: Caio"));
console.log(reg.test("Nome: Victor"));