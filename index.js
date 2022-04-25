
async function cep(e){
    const $cep = document.getElementById("cep").value
    e.preventDefault()
    const data =  await fetch(`https://api.invertexto.com/v1/cep/${$cep.replace(/[^\d]+/g,'')}?token=640|31v4OVHsFaVud8E2VVvB168wtNHZyiZf`)
    const dados = await data.json()
    document.getElementById('rua').value = dados.street
    document.getElementById('bairro').value = dados.neighborhood
    document.getElementById('cidade').value = dados.city
    console.log(dados)
    
    
}

document.getElementById("cep").addEventListener('focusout', cep)