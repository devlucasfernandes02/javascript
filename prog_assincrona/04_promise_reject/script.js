
function verificarNumero(num) {
    return new Promise((resolve, reject) => {
        if(num == 2) {
            resolve(console.log(`O numéro é ${num}`));
        } else {
            reject(new Error("Falhouuu"));
        }
    });
}

verificarNumero(2);
verificarNumero(3);