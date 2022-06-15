let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function ordenar(numeroUm,numeroDois){
    if(numeroUm > numeroDois){
        return 1;
    }

    if(numeroUm < numeroDois){ 
        return -1;
    }
}

numbers.sort(ordenar);
console.log(numbers);