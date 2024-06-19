function criaCachorro(raca, patas, cor) {
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function() {
        console.log("Au au");
    }
    return cachorro;
}

let doberman = criaCachorro('Doberman', 4, 'Preto');
console.log(doberman);
console.log(doberman.cor);
doberman.latir();

function cachorro(raca) {
    this.raca = raca;
}

let husky = new cachorro('Husky');
console.log(husky.raca);