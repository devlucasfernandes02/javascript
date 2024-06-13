function number(n) {
    console.log(`Esse dado é um ${typeof(n)}`);
}

function boolean(b) {
    console.log(`Esse dado é ${typeof(b)}`);
}

function string(s) {
    console.log(`Esse dado é uma ${typeof(s)}`);
}

number(5);
boolean(true);
string("A");

function verificaTipoDeDado(dado) {
    if(typeof dado === 'string') {
        console.log("Este dado é uma string.");
    } else if(typeof dado === 'number') {
        console.log("Este dado é um número.");
    } else {
        console.log("Este dado é Boolean.");
    }
}

verificaTipoDeDado(5);
verificaTipoDeDado("a");
verificaTipoDeDado(true);