// adicionarProduto.js
import { carregarProdutos } from './carregarProdutos.js';

export function adicionarProduto() {
  const formulario = document.getElementById('produto-form');

  formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault();

    const nome = document.getElementById('nome').value;

    let valorInput = document.getElementById('valor').value;
    valorInput = valorInput.replace(",", ".");
    const preco = parseFloat(valorInput);
    
    const imagem = document.getElementById('imagem').value;

    const novoProduto = { nome, preco, imagem };

    try {
      await fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novoProduto),
      });

      // Recarrega os produtos após adicionar
      carregarProdutos();

      // Limpa o formulário
      formulario.reset();
    } catch (erro) {
      console.error('Erro ao adicionar produto:', erro);
    }
  });
}
