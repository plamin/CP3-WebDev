const form = document.getElementById("form")
const inputProduto = document.getElementById("produto")
const inputPreco = document.getElementById('preco')
const inputCategoria = document.getElementById('categoria')
const erro = document.getElementById('textErro')

btnCadastrar.addEventListener("click", function (event) {
    event.preventDefault()
    let produto = inputProduto.value
    let preco = parseFloat(inputPreco.value)
    let categoria = inputCategoria.value

    if (produto === "" || preco === "" || categoria === "") {
        erro.textContent = "Preencha os campos vazios*"
        erro.style.color = "#ff0000"
        return
    }

    let precoDepois = preco.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    const cardEstoque = document.createElement('ul')
    cardEstoque.innerHTML = `
<li>${produto} - ${precoDepois} - Categoria: ${categoria}</li>
`
    if (categoria === 'Tecnologia') {
        cardEstoque.style.fontWeight = 'bold'
    } else if (categoria === 'Alimentos') {
        cardEstoque.style.backgroundColor = 'yellow'
    }

    
    divEstoque.append(cardEstoque)

})