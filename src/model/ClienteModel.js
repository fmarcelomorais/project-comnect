module.exports = class ClienteModel {
    
    constructor(nome, tel, cep, rua, bairro, num, comp, cidade, documento){
        this.nome = nome,
        this.telefone = tel,
        this.cep = cep,
        this.rua = rua,
        this.bairro = bairro,
        this.num = num,
        this.comp = comp,
        this.cidade = cidade,
        this.documento = documento
    }
}