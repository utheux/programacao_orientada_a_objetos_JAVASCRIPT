const user = {
    init: function(nome,email){
        this.nome = nome
        this.email = email
    },
    exibirInfos: function(nome){
        return this.nome
    }
}

const novoUser = Object.create(user)
novoUser.init('Juliana', 'j@j.com')
console.log(novoUser.exibirInfos())

// console.log(novoUser.exibirInfos('Matheus'))
// console.log(user.isPrototypeOf(novoUser))