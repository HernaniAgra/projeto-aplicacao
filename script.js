let idade = 20

function verificarIdade(idade){
    if( idade <= 18 ){
        console.log('Você é de menor.')
    } else if ( idade > 18 ){
        console.log('Você é de maior.')
    } else {
        console.log('Digite uma idade válida.')
    }
}

verificarIdade(17)