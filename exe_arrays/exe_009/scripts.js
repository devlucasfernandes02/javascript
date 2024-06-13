let frase = "Sou um programador e me chamo Lucas";

let fraseArray = frase.split(" ");

console.log(fraseArray);
for(c = 0; c < fraseArray.length; c++ ) {
    console.log(fraseArray[c]);
}

let novaFrase = fraseArray.join(";");

console.log(novaFrase);