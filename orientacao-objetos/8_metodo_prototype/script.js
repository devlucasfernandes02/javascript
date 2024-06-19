
function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

Cachorro.prototype.uivar = function() {
    console.log("Auuuuuuuuuuuu");
}

Cachorro.prototype.latir = function() {
    console.log("Au au");
}

let husky = new Cachorro('Husky', 4, 'Branco');
console.log(husky.raca);
console.log(husky.patas);
console.log(husky.cor);
husky.uivar();
husky.latir();

let golden = new Cachorro('Golden', 4, 'Dourado');
console.log(golden);
golden.uivar();
golden.latir();

let pitbull = new Cachorro('Pitbull', 4, 'Marrom');
console.log(pitbull);
pitbull.uivar();
pitbull.latir();