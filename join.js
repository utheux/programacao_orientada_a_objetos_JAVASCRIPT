const nome_completo = 'Matheus Ribeiro Silva'

console.log(nome_completo)

let[nome,...sobrenome] = nome_completo.split(' ')
console.log(nome)
console.log(sobrenome)
sobrenome = sobrenome.join(' ')
console.log(sobrenome)
