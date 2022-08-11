/*let num = [5,8,2,9,3]
console.log(num)*/
//console.log(`Nosso vetor é o ${num}`)


/*let num = [5,8,4]

num[3] = 6

console.log(num)*/

//console.clear() para limpar o terminal
let num = [5,8,2,9,3]

num.push(1)
num.sort()

//console.log(num)

//console.log(num.length)//mostra o comprimento do array
//num.sort//coloca os elementos em ordem crescente
console.log(num)

//indexOf procura um valor dentro de um vetor
let pos = num.indexOf(5)
//console.log(pos) ou console.log(`O valor 8 está na posição ${pos}`)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
}else {
    console.log(`O valor está na posição ${pos}`)
}
