let porcentagem;

function converterPorcentagem(porcentagem){
    if(porcentagem >= 90 && porcentagem <= 100){
        return "A"
    }else if(porcentagem >= 80 && porcentagem < 90){
        return "B"
    }else if(porcentagem >= 70 && porcentagem < 80){
        return "C"
    }else if(porcentagem >= 60 && porcentagem < 70){
        return "D"
    }else if(porcentagem >= 50 && porcentagem < 60){
        return "E"
    }else{
        return "F"
    }
}

console.log(converterPorcentagem(40))