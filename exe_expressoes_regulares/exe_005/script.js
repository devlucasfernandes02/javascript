const validarNome = /^(?=.{3,16}$)[\w+-_]/;

console.log(validarNome.test("lu"));
console.log(validarNome.test("Luacas_s15"))