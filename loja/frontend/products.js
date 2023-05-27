// quem a chama não precisa aguardar a resposta para processar outra atividade
async function consultaProdutos(){
    // consome API no backend com verbo GET /product
    // é preciso esperar uma resposta para continuar
    const produtos = await fetch('http://localhost:3333/products')
        .then( resposta => { // quando trouxe a resposta
            return resposta.json() // retorna os dados do servidor
        })
        .catch( error => {
            alert('Erro ao consultar')
        })
    
    // vamos percorrer o vetor produtos e jogar na tabela
    let linhasTabela = ''
    produtos.forEach(produto => {
        linhasTabela += `<tr> <td> ${produto.description} </td> <td> ${produto.price} </td> <td> ${produto.quantity} </td> <td> 
        <div onclick="remover('${produto.id}')"> <i class="bi bi-trash"></i> </div> </td> <td> <div onclick="editar('${produto.id}', '${produto.description}', ${produto.price}, ${produto.quantity})" <i class="bi bi-pencil"></i> </div> </td> </tr>`
    })
    // vamos colocar o conteúdo na tabela
    document.getElementById("linhasTabela").innerHTML = linhasTabela
}

function editar(id, description, price, quantity){
    document.getElementById("description").value = description
    document.getElementById("price").value = price
    document.getElementById("quantity").value = quantity
    document.getElementById("id").value = id
}
async function remover(id){
    const confirma = confirm('Deseja realmente remover o produto?')
    if (!confirma){
        return // sai da função e não remove
    }
    // quer remover
    await fetch(`http://localhost:3333/product/id/${id}`, {
        method: 'DELETE'
    })
    .then(resposta => {
        alert('Remoção com sucesso')
    })
    .catch(erro => {
        alert('Problema na remoção')
    })
    // atualizar tabela
    consultaProdutos()
}

async function cadastrarProduto(){
    // recupera os dados do formulário
    const description = document.getElementById("description").value
    const price = Number(document.getElementById("price").value)
    const quantity = Number(document.getElementById("quantity").value)
    const id = document.getElementById("id").value
    let metodo
    let url
    if (id) { // tem o id
        metodo = 'PUT'
        url = `http://localhost:3333/product/id/${id}` 
        document.getElementById("id").value = ''
    }
    else {
        metodo = 'POST'
        url = `http://localhost:3333/product`
    }
    // mostra o objeto json
    const product = {description, price, quantity}
    // consome a api - verbo é post
    const novoProduto = await fetch(url, {
        method: metodo,
        body: JSON.stringify(product),
        headers: {
            'Content-Type': 'application/json;charset="UTF-8"'
        }
    })
    .then(resposta => {
        alert('Operação foi realizada com sucesso')
    })
    .catch(error => {
        alert('Erro durante a tentativa')
    })
    // atualiza a tabela no frontend
     consultaProdutos()
}