let {readFile, writeFile} = require('fs');

readFile("arquivo.txt", "utf8", (error, texto) => {
    if(error) {
        throw error;
    } else {
        console.log(texto);
    }
});

writeFile("arquivo.txt", "Texto por Lucas", (error) => {
    if(error) {
        throw error;
    } else {
        console.log('Texto escrito por Lucas');
    }
});