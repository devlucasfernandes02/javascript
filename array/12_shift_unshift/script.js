let nomes = ["Lucas", "Maria", "José"];

let elementoRemovido = nomes.shift();
console.log(elementoRemovido);
console.log(nomes);

nomes.unshift('Pedro');
console.log(nomes);

let carros = ['BMW', 'Audi', 'VW', 'Fiat'];

let elementoRemovido2 = carros.shift();
let elementoRemovido3 = carros.shift();
console.log(elementoRemovido2);
console.log(elementoRemovido3);
console.log(carros);

carros.unshift('Renault');
carros.push('Mercedes');
console.log(carros);
