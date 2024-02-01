function User(nome,email){
    this.nome = nome
    this.email = email

    this.exibirInfos = function(){
        return `O nome é ${nome} e email é ${email}`
    }
}

//forma de construir objetos com javascript utilizando construtor
const novoUser = new User('Juliana','j@j.com')
console.log(novoUser.exibirInfos())