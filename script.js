// script.js

function adicionarProduto() {
    // Lógica de adicionar o produto à tabela pode ser mantida aqui
    const form = document.getElementById('formProduto');
    const tabela = document.getElementById('tabelaProdutos').getElementsByTagName('tbody')[0];

    const nome = form.elements['nome'].value;
    const marca = form.elements['marca'].value;
    const preco = form.elements['preco'].value;

    // Adiciona o produto à tabela
    const novaLinha = tabela.insertRow(tabela.rows.length);
    const celulaNome = novaLinha.insertCell(0);
    const celulaMarca = novaLinha.insertCell(1);
    const celulaPreco = novaLinha.insertCell(2);

    celulaNome.innerHTML = nome;
    celulaMarca.innerHTML = marca;
    celulaPreco.innerHTML = preco;

    // Limpa o formulário após adicionar o produto
    form.reset();
}
