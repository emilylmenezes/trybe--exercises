function numeroPar(a,b,c){
    let numeroPar = a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0;
    return numeroPar ? true:false;
}

console.log(numeroPar(4,2,6))