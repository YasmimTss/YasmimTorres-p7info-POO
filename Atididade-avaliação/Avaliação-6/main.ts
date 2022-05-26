import {Ponto} from './ponto'
import {Quadrilatero} from "./quadrilatero"

let pontoA = new Ponto(0, 7)
let pontoB = new Ponto(11, 0)

let pontoC = new Ponto(6, 5)
let pontoD = new Ponto(8, 3)
let pontoE = new Ponto(12, 4)

let Quad = new Quadrilatero(pontoA,pontoB)

console.log(Quad.pertencerArea(pontoC)? "Ponto C está dentro do Quadrilátero": "Ponto C não está dentro Quadrilátero")
console.log(Quad.pertencerArea(pontoD)? "Ponto D está dentro ao Quadrilátero": "Ponto D não está dentro Quadrilátero")
console.log(Quad.pertencerArea(pontoE)? "Ponto E está dentro ao Quadrilátero": "Ponto E não está dentro Quadrilátero")

