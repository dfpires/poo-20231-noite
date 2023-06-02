async function consultaProdutos(){
    let produtos = await fetch('http://localhost:3333/products')
        .then( resp => {
            return resp.json()
        })
        .catch( error => {
            alert('Erro ao buscar produtos')
        })
    let saida = ''    
    produtos.forEach(produto => {
        saida += `<option value="${produto.id}"> ${produto.description} </option>`
    })
    document.getElementById("idSelecionado").innerHTML = saida
}

async function recuperaQtde() {
    const idSelecionado = document.getElementById("idSelecionado").value
    const product = await fetch(`http://localhost:3333/product/${idSelecionado}`)
    .then(resp => {
        return resp.json()
    })
    .catch(error => {
        alert('Problema na consulta')
    })
    document.getElementById("disponivel").innerHTML = product.quantity
}

async function vender(){
    const id = document.getElementById("idSelecionado").value
    const quantity = Number(document.getElementById("quantity").value)
    const envia = {id, quantity}
    const resp = await fetch('http://localhost:3333/product/venda', {
        method: 'PATCH',
        body: JSON.stringify(envia),
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    })
    .then(resp => {
        return resp.json()
    }) 
    alert(resp.status)
}