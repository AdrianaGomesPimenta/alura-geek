// removerProduto.js
import { carregarProdutos } from './carregarProdutos.js';

export function removerProduto() {
  const produtosContainer = document.querySelector('.produtos-container');

  // Adiciona um ouvinte de evento para capturar os cliques nos botões de remoção
  produtosContainer.addEventListener('click', async (evento) => {
    // Verifica se o clique foi em um botão com a classe "delete-btn"
    if (evento.target.classList.contains('delete-btn')) {
      const id = evento.target.getAttribute('data-id'); // Obtém o ID do produto

      try {
        // Faz uma requisição DELETE para a API
        const resposta = await fetch(`http://localhost:3000/produtos/${id}`, {
          method: 'DELETE',
        });

        if (!resposta.ok) {
          throw new Error('Erro ao tentar remover o produto');
        }

        // Recarrega os produtos após a remoção
        carregarProdutos();
      } catch (erro) {
        console.error('Erro ao remover o produto:', erro);
      }
    }
  });
}

