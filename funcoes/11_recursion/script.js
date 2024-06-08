function retornarNumeroPar(n) {
    if(n % 2 == 0) {
        console.log(`o número agora é par: ${n}`);
    } else {
        console.log(n);
        retornarNumeroPar(n - 1);
    }
}

retornarNumeroPar(33);
retornarNumeroPar(31);
retornarNumeroPar(29);
retornarNumeroPar(27);

function recursao(n) {

    if( n - 1 < 2) {
        console.log("Recursão parou");
    } else if(n % 2 != 0) {
        console.log("Número impar: " + n);
        recursao(n - 1);
    } else {
        console.log("Número par: " + n);
        recursao(n - 1);
    }
        
 }

 recursao(39);