const cachorro = {
    uivar: function() {
        console.log("Auuuuuuu");
    },
    latir: function() {
        console.log("Au au");
    },
    rosnar: function() {
        console.log("Grrrrrr")
    }
}

cachorro.uivar();
cachorro.latir();
cachorro.rosnar();

const pessoa = {
    nome: function(n) {
        console.log(`Olá, me chamo ${n}`); 
    },
    idade: function(i) {
        console.log(`E tenho ${i} anos.`);
    }
}

pessoa.nome("Lucas");
pessoa.idade(22);

persona = function(n,i) {
    if(n == "Lucas" && i >= 18) {
        return true;
    } else {
        return false;
    }

}

console.log(persona("Lucas", 2));