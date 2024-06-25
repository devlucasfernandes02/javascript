function checarNumero(num) {
    let numero = Number(num); 
    if(Number.isNaN(numero)) {
        alert("Por favor, passe só números para o programa.")
    } else {
        return numero;
    }
}

console.log(checarNumero(5));
checarNumero('ldkalçsjkf');

let number = prompt("Digite um número");

checarNumero(number);