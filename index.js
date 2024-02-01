import User from "./User.js"
import Admin from "./Admin.js"
import Docente from "./Docente.js"




const novoUser = new User('Leo', 'l@l.com','2010-01-01')
console.log(novoUser.exibirInfos())

const novoAdmin = new Admin('Rodrigo','r@r.com','2000-02-02')
console.log(novoAdmin.nome)
novoAdmin.nome = ''
console.log(novoAdmin.nome)
// console.log(novoDocente)
// console.log(novoDocente.exibirInfos())
// console.log(novoDocente.aprovaEstudante('Juliana', 'JS'))


// const novoAdmin = new Admin('Rodrigo','Rodrigo@gmail.com', '21-03-2003')
// console.log(novoAdmin)
// console.log(novoAdmin.criarCurso('JS', 20))