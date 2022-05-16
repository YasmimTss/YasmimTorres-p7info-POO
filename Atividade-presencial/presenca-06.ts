let Numbers: Array<number> = []
let controle = 0

while(controle < 6){
    let v1 = Math.floor(Math.random() * 10)
    let v2 = Math.floor(Math.random() * 10)
    let num = v1 * v2
    if(num <= 60 && num != 0) {
        Numbers.push(num)
        controle++
    }
}

for(let conta = 0; conta < 6; conta ++){
    for(let i=0; i<6; i++){
        if(Numbers[i] > Numbers[i+1]){
            let temps = Numbers[i]
            Numbers[i] = Numbers[i+1]
            Numbers[i+1] = temps
        }
    }
}

console.log(Numbers)