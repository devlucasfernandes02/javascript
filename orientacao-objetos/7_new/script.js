
function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function(){
        console.log("Auuuuuuuuuuu");
    }
}

let husky = new Cachorro('Husky', 4, 'Branco');
console.log(husky.raca);
console.log(husky.patas);
console.log(husky.cor);
husky.uivar();