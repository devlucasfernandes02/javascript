function numeroDecrementadoPar(n) {
    /*while(n > 0) {
        if(n % 2 == 0) {
            console.log(n);
        }
        n--;
    }*/

    for(let i = n; i >= 0; i--) {
        if(i % 2 == 0) {
            console.log(i);
        }
    }
}

numeroDecrementadoPar(20);