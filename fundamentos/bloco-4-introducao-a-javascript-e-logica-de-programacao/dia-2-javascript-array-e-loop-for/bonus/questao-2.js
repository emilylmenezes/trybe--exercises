let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function ordenando(numeroUm,numeroDois){
    if(numeroUm < numeroDois){
        return 1;
    }
    if(numeroUm > numeroDois){ 
        return -1;
    }
}

numbers.sort(ordenando);
console.log(numbers);