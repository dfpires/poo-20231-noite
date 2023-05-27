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

async function comprar(){
    // recupera os dados do formulário
    const id = document.getElementById("idSelecionado").value
    const quantity = Number(document.getElementById("quantity").value)
    const corpo = {id, quantity}
    const prodUp = await fetch('http://localhost:3333/product/compra', {
                method: 'PATCH',
                body: JSON.stringify(corpo),
                headers: {
                    "Content-Type": "application/json;charset=UTF-8"
                }
            })
            .then (resp => {
                return resp.json()
            })
            
    alert(`Compra realizada com sucesso. A nova quantidade é ${prodUp.quantity}`)
}