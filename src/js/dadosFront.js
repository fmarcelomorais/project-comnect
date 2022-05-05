//const { default: axios } = require("axios")

async function cep(e){
    e.preventDefault()
    const $cep = document.getElementById("cep").value
    const data =  await fetch(`https://api.invertexto.com/v1/cep/${$cep.replace(/[^\d]+/g,'')}?token=640|31v4OVHsFaVud8E2VVvB168wtNHZyiZf`)
    const dados = await data.json()
    //console.log(dados)
    const endereco = {
        cep: dados.cep,
        rua: dados.street,
        bairro: dados.neighborhood,
        cidade: dados.city    
    }
    document.getElementById('rua').value = dados.street
    document.getElementById('bairro').value = dados.neighborhood
    document.getElementById('cidade').value = dados.city
    
    return endereco
  
}

document.getElementById("cep").addEventListener('focusout', cep)

function getImage(e){
    const arquivo = e.target.files[0]
    const nomeArquivo = arquivo.name   
    return arquivo
}

async function salvar(e){
    e.preventDefault()

    const endereco = await cep(e)
    const $nome = document.getElementById('nome').value
    const $tel = document.getElementById('tel').value
    const $num = document.getElementById('num').value
    const $comp = document.getElementById('comp').value

    const newCliente = {
        nome: $nome,
        telefone: $tel,
        cep: endereco.cep,
        rua: endereco.rua,
        bairro: endereco.bairro,
        numero: $num,
        complemento: $comp, 
        cidade: endereco.cidade,
        documento: null
    };

    
    axios.post('http://localhost:5000/clientes/create', newCliente)
}


document.getElementById("botao").addEventListener('click', salvar)

//module.exports = salvar;
