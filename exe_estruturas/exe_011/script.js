let idade = 22;
let cnh = true;

if(idade >= 18 && cnh == false) {
    console.log("Não tem cnh, não está apto para dirigir.")
}   else if(idade >= 18 && cnh == true) {
        console.log("Está apto para dirigir.")
}   else {
        console.log("Não possui idade, nem cnh. Não está apto para dirigir.")
}
    