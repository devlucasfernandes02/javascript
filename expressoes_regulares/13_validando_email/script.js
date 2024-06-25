const validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("Alfds10@hotmail.com"));
console.log(validarEmail.test("matheus@gmail"))
console.log(validarEmail.test("hotmail.com"));
console.log(validarEmail.test("gmail@gmail.gmail.gmail."));