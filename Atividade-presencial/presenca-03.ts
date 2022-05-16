
//Cria a classe

class cambada{

    // Passando os atributos dessa classe

    cambada: number[] = []
    topo: number = -1
    maxcambada = 4

                    /*Metódos*/

    // Verificar se a Pilha está vazia


    isEmpty(): number{
        if(this.topo == -1){
            return 1
        }else{
            return 0
        }
    }

    // Verificar se a Pilha está cheia

    isFull(): number{
        if(this.topo == this.maxcambada){
            return 1
        }else{
            return 0
        }
    }

    // Inserir elementos na Pilha

    push(num: number): void{
        if(this.isFull() == 1){
            console.log('Pilha lotada')
        }else{
            this.topo++
            this.cambada[this.topo] = num
            console.log('O elemento '+num+' Foi adicionado com suscesso!')
        }
    }

    //  Remover elementos na Pilha


    pop(): number | void{
        if(this.isEmpty() == 1){
            console.log('Pilha vazia')
        }else{
            let aux = this.cambada[this.topo]
            console.log('Elemento '+aux+' Retirado')
            this.topo--
            return aux
        }
    }

    // Mostra a Pilha

    view(): void{
        if(this.isEmpty() == 1){
            console.log('Pilha Vazia')
         }else{
            for(let i = 0; i <= this.topo; i++){
                console.log('Pilha tem o elemento '+this.cambada[i])    
            }
        }
    }
}

// Cria um objeto do tipo: cambada

let pilha: cambada = new cambada()

// Colaca elementos na Pilha

pilha.push(1)
pilha.push(2)
pilha.push(3)
pilha.push(4)
console.log('-------------------------')

// Mostra a Pilha (4 elementos)

pilha.view()
console.log('-------------------------')

// Remove 2 elementos da Pilha

pilha.pop()
pilha.pop()
console.log('-------------------------')

// Mostra a Pilha (2 elementos)

pilha.view()
console.log('-------------------------')

// Remove 2 elementos da Pilha

pilha.pop()
pilha.pop()
console.log('-------------------------')

// Mostra pilha (Vazia)

pilha.view()


