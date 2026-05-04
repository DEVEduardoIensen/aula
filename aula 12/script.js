let lista_nomes = ["dudu", "matias", "isadora"]

function renderizar(lista = lista_nomes) {
    let lista_pagina = document.getElementById("lista")
    lista_pagina.innerHTML = ""

    lista.forEach(function(item) {
        let elemento = document.createElement("li")
        elemento.innerText = item
        lista_pagina.appendChild(elemento)
    })
}

function adicionarFinal() {
    let nome = document.getElementById("nome").value

    if (nome != "") {
        lista_nomes.push(nome)
        renderizar()
        document.getElementById("nome").value = ""
    }
}

function adicionarInicio() {
    let nome = document.getElementById("nome").value

    if (nome != "") {
        lista_nomes.unshift(nome)
        renderizar()
        document.getElementById("nome").value = ""
    }
}

function removerUltimo() {
    lista_nomes.pop()
    renderizar()
}

function removerPrimeiro() {
    lista_nomes.shift()
    renderizar()
}

function contar() {
    let contador = 0

    lista_nomes.forEach(function(nome) {
        if (nome.length > 5) {
            contador++
        }
    })

    document.getElementById("resultado").innerText =
        "Tem " + contador + " nomes com mais de 5 letras"
}

function filtrar() {
    let nomes = lista_nomes.filter(function(nome) {
        return nome.length > 5
    })

    renderizar(nomes)
}

function maiusculo() {
    let nomes = lista_nomes.map(function(nome) {
        return nome.toUpperCase()
    })

    renderizar(nomes)
}

document.addEventListener("DOMContentLoaded", function() {
    renderizar()
})