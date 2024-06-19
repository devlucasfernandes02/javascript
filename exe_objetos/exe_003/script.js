class Endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade; 
        this.estado = estado;
    }

    set novaRua(novaRua) {
        this.rua = novaRua;
    }

    set novoBairro(novoBairro) {
        this.bairro = novoBairro;
    }
    
    set novaCidade(novaCidade) {
        if(novaCidade == this.cidade) {
            return this.cidade;
        } else {
            this.cidade = novaCidade;
        }
    }

    set novoEstado(novoEstado) {
        if(novoEstado == this.estado) {
            return this.estado;
        } else {
            this.estado = novoEstado;
        }
    }

}

let endereco = new Endereco("Rua paula batista", "Casa Amarela", "Recife", "Pernambuco");

console.log(endereco);

endereco.novaRua = "Rua Aníbal Portela";

endereco.novoBairro = "Jardim São Paulo";

endereco.novaCidade = ("Recife");

endereco.novoEstado = ("Pernambuco");

console.log(endereco);




