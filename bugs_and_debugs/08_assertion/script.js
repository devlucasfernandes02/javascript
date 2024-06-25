let arr = [10,25,35,44,52];
let arr2 = [];

function iterarArray(arr) {
    if(arr.length == 0) {
        throw new Error('O array precisa ter pelo menos um elemento')
    } else {
        for(let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }
}

function arrayVazio(arr) {
    if(arr.length > 0) {
        throw new Error('O array não pode ter elementos')
    } else {
        console.log("Agora deu certo");
    }
}

iterarArray(arr);
iterarArray(arr2);

