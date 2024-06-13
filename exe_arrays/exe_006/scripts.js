let nums = [0, 5, 10, 15, 20, 25];

let nums2 = [50, 100, 150];

let nums3 = [50, 100, 150, 1, 2];

function qtdNumeros(arr) {
    if(arr.length < 5) {
        console.log("Poucos elementos")
    } else {
        console.log("Muitos elementos")
    }
}

qtdNumeros(nums);
qtdNumeros(nums2);
qtdNumeros(nums3);

let Qtdnumeros = function() {
    if(nums2.length < 5) {
        console.log("Poucos elementos")
    } else {
        console.log("Muitos elementos")
    }
}

Qtdnumeros();