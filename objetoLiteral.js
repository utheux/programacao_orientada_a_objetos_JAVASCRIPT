const user = {
    nome: "Juliana",
    email: "j@j.com",
    nasimento: "2021/01/01",
    role: "admin",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email)
    }

}

const admin = {
    nome: "Mariana",
    email: "m@m.com",
    role: "admin",
    criarCurso(){
        console.log('curso criado!')
    }

}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()

//herança de protótipo

// const exibir = function(){
//     console.log(this.nome)
// }

// exibir()

// const exibirNome = exibir.bind(user)
// exibirNome()