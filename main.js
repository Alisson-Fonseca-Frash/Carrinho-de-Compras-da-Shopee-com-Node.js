// Importa os módulos necessários
const readline = require('readline');
const CarrinhoDeCompras = require('./src/carrinho');
const Produto = require('./src/produto');

// Configura a interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const carrinho = new CarrinhoDeCompras();

// --- Produtos disponíveis ---
// Lista de produtos que o usuário pode adicionar
const produtosDisponiveis = [
  new Produto(1, "Camiseta Casual", 39.90, 1),
  new Produto(2, "Fone Bluetooth", 89.90, 1),
  new Produto(3, "Capa de Celular", 15.50, 1),
  new Produto(4, "Carregador Portátil", 75.00, 1),
];

// --- Funções de interação ---
function exibirMenu() {
  console.log("\n--- Menu do Carrinho Shopee ---");
  console.log("1. Adicionar um item");
  console.log("2. Remover um item");
  console.log("3. Ver meu carrinho");
  console.log("4. Esvaziar o carrinho");
  console.log("5. Sair");
  console.log("-------------------------------");
}

function exibirProdutosDisponiveis() {
  console.log("\n--- Produtos Disponíveis ---");
  produtosDisponiveis.forEach(p => {
    console.log(`${p.id}. ${p.nome} - R$ ${p.preco.toFixed(2)}`);
  });
  console.log("----------------------------");
}

function solicitarAcao() {
  rl.question('Escolha uma opção (1-5): ', (opcao) => {
    switch (opcao) {
      case '1':
        adicionarItem();
        break;
      case '2':
        removerItem();
        break;
      case '3':
        carrinho.exibirCarrinho();
        solicitarAcao();
        break;
      case '4':
        carrinho.esvaziarCarrinho();
        solicitarAcao();
        break;
      case '5':
        console.log("\nObrigado por usar o carrinho! Até logo.");
        rl.close();
        break;
      default:
        console.log("\nOpção inválida. Por favor, escolha um número de 1 a 5.");
        solicitarAcao();
        break;
    }
  });
}

function adicionarItem() {
  exibirProdutosDisponiveis();
  rl.question('Digite o ID do produto que deseja adicionar: ', (id) => {
    const produtoSelecionado = produtosDisponiveis.find(p => p.id === parseInt(id));
    if (produtoSelecionado) {
      // Cria uma nova instância para evitar modificar o objeto original
      const novoProduto = new Produto(
        produtoSelecionado.id,
        produtoSelecionado.nome,
        produtoSelecionado.preco,
        1 // Adiciona apenas 1 unidade por vez
      );
      carrinho.adicionarItem(novoProduto);
    } else {
      console.log("\nID do produto não encontrado. Tente novamente.");
    }
    solicitarAcao();
  });
}

function removerItem() {
  carrinho.exibirCarrinho();
  if (carrinho.itens.length === 0) {
    solicitarAcao();
    return;
  }
  rl.question('Digite o ID do item que deseja remover: ', (id) => {
    carrinho.removerItem(parseInt(id));
    solicitarAcao();
  });
}

// --- Início da Aplicação ---
exibirMenu();
solicitarAcao();