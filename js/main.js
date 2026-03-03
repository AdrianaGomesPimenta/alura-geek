// main.js
import { carregarProdutos } from './carregarProdutos.js';
import { adicionarProduto } from './adicionarProduto.js';
import { removerProduto } from './removerProduto.js';

// Carrega os produtos ao iniciar a página
carregarProdutos();

// Configura eventos de adicionar e remover
adicionarProduto();
removerProduto();
