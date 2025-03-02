let valores = ['yuri', 18, 8, 18.9, 26.9, 5.6]
console.log(valores[0], valores[1]) // yuri e 18    
console.log(valores[2], valores[3]) // 8 e 18.9
console.log(valores[18])

valores[18] = 55
console.log(valores[18]) // 55

console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, "teste")
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)