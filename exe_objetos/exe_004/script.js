class Carro {
    constructor(marca, cor, gasolinaRestante, consumoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
        this.consumoMedio = consumoMedio;
    }

    dirigir(km) {
       let litrosConsumidos = km / this.consumoMedio;
       this.gasolinaRestante -= litrosConsumidos;
    }

    abastecer(gasolina) {
        if(this.gasolinaRestante <=0) {
            this.gasolinaRestante += gasolina;
        }
    }
}

let carro = new Carro('Gol', 'Branco', 40, 10);

console.log(carro);

carro.dirigir(400);

carro.abastecer(20);

console.log(carro)

