const Cliente = require('../model/ClienteModel')

module.exports = class ClienteController {

    static async send(req, res){
        
        const {nome, cep, rua, bairro, num, comp, cidade, documento } = req.body

        const newCliente = Cliente(nome, cep, rua, bairro, num, comp, cidade, documento)

        return newCliente
    }
}