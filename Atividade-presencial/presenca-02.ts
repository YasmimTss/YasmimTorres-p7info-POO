
//*Criando funções*//

function printDecim(valor: number): string{

    let dec = (valor).toString(10)
    return dec
}
function printHexa(valor: number): string{

    let hexa = (valor).toString(16)
    return hexa
}
function printOcta(valor: number): string{

    let octa = (valor).toString(8)
    return octa
}
function printBina(valor: number): string{

    let bina = (valor).toString(2)
    return bina
}

function ExibeTabela(): void{

    console.log('Decimal Octal Hexadecimal  Binario')
    console.log('--------- ------ ----------- -------')
    for( let i = 0; i <=225; i++){
        console.log(`${printDecim(i)}  ${printOcta(i)}   ${printHexa(i)}   ${printBina(i)}`)
    }
}

ExibeTabela()