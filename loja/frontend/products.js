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
        <div onclick="remover('${produto.id}')"> <i class="bi bi-trash"></i> </div> 
        </td> <td> <i class="bi bi-pencil"></i> </td> </tr>`
    })
    // vamos colocar o conteúdo na tabela
    document.getElementById("linhasTabela").innerHTML = linhasTabela
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
    // mostra o objeto json
    const product = {description, price, quantity}
    console.log(product)
    // consome a api - verbo é post
    const novoProduto = await fetch('http://localhost:3333/product', {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
            'Content-Type': 'application/json;charset="UTF-8"'
        }
    })
    .then(resposta => {
        alert('Cadastro foi realizado com sucesso')
    })
    .catch(error => {
        alert('Erro ao cadastrar')
    })
    // atualiza a tabela no frontend
     consultaProdutos()
}