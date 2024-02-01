import User from "./User.js";

export default class Docente extends User{
    constructor(nome, email, nasimento, role = "docente", ativo = true){
        super(nome, email, nasimento, role, ativo)

}
    aprovaEstudante(estudante, curso){
        return `estudante ${estudante} passou no curso ${curso}`
    }

}
