function criar_cartao(categoria, pergunta, resposta){
    let container = document.getElementById("container")

    let cartao = document.createElement("article")
    cartao.className = 'cartao'

    cartao.innerHTML = `
        <div class="conteudo">
            <h3>${categoria}</h3>
            <div class="pergunta">
                ${pergunta}
            </div>
            <div class="resposta">
                ${resposta}
            </div>
        </div>
    `

    container.appendChild(cartao)
}

function adicionarCartao(){
    let categoria = prompt("Categoria")
    let pergunta = prompt("Pergunta")
    let resposta = prompt("Resposta")

    if(categoria && pergunta && resposta){
        criar_cartao(categoria, pergunta, resposta)
    } else {
        alert("da uma Preenchida melhor. ")
    }
}