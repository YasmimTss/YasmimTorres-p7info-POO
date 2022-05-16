//Cria classe
class banana
{
    //  Atributos da classe

    Pessoa: string[] = []
    maxbanana = 5
    fim = 0
    nprimeiro = 0
    nItems = 0

    // Verificando se a Fila está vazia

    isEmpty(): number{
        if(this.nItems == 0){
            return 1
        }else{
            return 0
        }
    }

    // Verificando se a Fila está cheia

    isFull(): number{
        if(this.fim == this.maxbanana){
            return 1
        }else{
            return 0
        }
    }

    // Metódo para inserir elementos na Fila

    addbanana(nome: string): void{
        if(this.isFull() == 1){
            console.log('Fila está cheia!')
        }else{
            this.Pessoa[this.fim] = nome
            console.log(nome+' entrou na fila')
            this.fim++
            this.nItems++
        }
    }

    // Metódo para remover elementos da Fila

    removebanana():string | void {
        if(this.isEmpty() == 1){
            console.log('Fila vazia!')
        }else{
            let temp = this.Pessoa[this.nprimeiro]
            console.log(this.Pessoa[this.nprimeiro]+' sai da frentee')
            this.nprimeiro++
            this.nItems--
            return temp
        }
    }

    // Metódo para mostrar a Fila

    viewbanana(): void{
        if(this.isEmpty() == 1){
            console.log('Fila vazia')
        }else{
            let np = this.nprimeiro
            for(let i=0; i < this.nItems; i++){
                console.log(this.Pessoa[np]+' Aqui na fila')
                np++
            }
        }
    }
}

// Criando um objeto do tipo banana

let fila: banana = new banana()

// Inserindo pessoas na fila


fila.addbanana('Samira')
fila.addbanana('Camila')
fila.addbanana('Jamile')
fila.addbanana('roberto')
console.log('-------------------------')

// Removendo pessoas da fila

fila.removebanana()
fila.removebanana()
fila.removebanana()
console.log('-------------------------')

// Inserindo mais um na fila

fila.addbanana('Samanta')
console.log('-------------------------')

// Mostrar fila (Possui 2 pessoas)

fila.viewbanana()
console.log('-------------------------')

// Removendo pessoas da fila

fila.removebanana()
fila.removebanana()
console.log('-------------------------')

// Mostra fila (Vazia)

fila.viewbanana()
