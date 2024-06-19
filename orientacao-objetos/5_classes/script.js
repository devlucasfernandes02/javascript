let cachorro = {
    patas: 4,
    raca: 'SRD',
    latir: function() {
        console.log("Au Au");
    }
}

let pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = 'Pastor Alemão';
console.log(pastorAlemao.raca);
console.log(pastorAlemao.patas);
pastorAlemao.latir();

let pitbull = Object.create(pastorAlemao);
pitbull.raca = 'Pitbull';
console.log(pitbull.raca);
console.log(pitbull.patas);
pitbull.latir();


let labrador = Object.create(pitbull);
labrador.raca = 'Labrador';
console.log(labrador.raca);
console.log(labrador.patas);
labrador.latir();
