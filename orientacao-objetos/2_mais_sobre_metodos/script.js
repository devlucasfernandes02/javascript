const cachorro = {
    raca: '',

    uivar: function() {
        console.log("Auuuuuuuuuu");
    },
    rosnar: function() {
        console.log("grrrrrrrr");
    },
    setRaca: function(raca) {
        this.raca = raca;
    },
    getRaca: function() {
        return "a Raça é " + this.raca;    
    }
}

cachorro.setRaca('Pastor Alemão');

console.log(cachorro.raca);

console.log(cachorro.getRaca());
