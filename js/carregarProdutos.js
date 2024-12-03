// carregarProdutos.js
export async function carregarProdutos() {
  const produtosContainer = document.querySelector('.produtos-container');

  try {
    const resposta = await fetch('http://localhost:3000/produtos');
    const produtos = await resposta.json();

    // Limpa o container
    produtosContainer.innerHTML = '';

    // Adiciona os produtos na página
    produtos.forEach(produto => {
      const card = document.createElement('article');
      card.classList.add('produto-card');
      card.innerHTML = `
        <img src="${produto.imagem}" alt="Imagem do produto ${produto.nome}">
        <h3>${produto.nome}</h3>
        <div class="card-footer">
          <p>R$ ${produto.preco.toFixed(2)}</p>
          <button class="delete-btn" aria-label="Remover ${produto.nome}" data-id="${produto.id}">🗑️</button>
        </div>
      `;
      produtosContainer.appendChild(card);
    });
  } catch (erro) {
    console.error('Erro ao carregar produtos:', erro);
  }
}
