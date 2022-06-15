// 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

function calcularMedia(){
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let aux = 0;
    
    for(let i of numbers){
        aux += i
    }
    
    let media = aux / numbers.length;

    if(media > 20){
        console.log("Valor maior que vinte")
    }else{
        console.log("Valor menor ou igual a vinte")
    }

    return media;
}
    
console.log(calcularMedia())
  
    

    