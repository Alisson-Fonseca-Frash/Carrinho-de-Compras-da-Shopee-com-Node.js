// Importa a classe Produto do arquivo produto.js
const Produto = require('./produto');

// A classe CarrinhoDeCompras gerencia os itens e as operações.
class CarrinhoDeCompras {
  constructor() {
    this.itens = [];
  }

  // Adiciona um produto ao carrinho.
  adicionarItem(produto) {
    const itemExistente = this.itens.find(item => item.id === produto.id);

    if (itemExistente) {
      itemExistente.quantidade += produto.quantidade;
      console.log(`\n✅ Quantidade do produto "${produto.nome}" atualizada para ${itemExistente.quantidade}.`);
    } else {
      this.itens.push(produto);
      console.log(`\n✅ Produto "${produto.nome}" adicionado ao carrinho.`);
    }
  }

  // Remove um produto do carrinho pelo seu ID.
  removerItem(idProduto) {
    const indiceItem = this.itens.findIndex(item => item.id === idProduto);

    if (indiceItem !== -1) {
      const nomeProduto = this.itens[indiceItem].nome;
      this.itens.splice(indiceItem, 1);
      console.log(`\n🗑️  Produto "${nomeProduto}" removido do carrinho.`);
    } else {
      console.log(`\n❌ Erro: Produto com ID ${idProduto} não encontrado.`);
    }
  }

  // Atualiza a quantidade de um produto.
  atualizarQuantidade(idProduto, novaQuantidade) {
    const item = this.itens.find(item => item.id === idProduto);

    if (item) {
      if (novaQuantidade > 0) {
        item.quantidade = novaQuantidade;
        console.log(`\n🔄 Quantidade do produto "${item.nome}" atualizada para ${novaQuantidade}.`);
      } else {
        this.removerItem(idProduto);
      }
    } else {
      console.log(`\n❌ Erro: Produto com ID ${idProduto} não encontrado.`);
    }
  }

  // Calcula o valor total do carrinho.
  calcularTotal() {
    let total = this.itens.reduce((soma, item) => soma + (item.preco * item.quantidade), 0);
    return total.toFixed(2);
  }

  // Exibe o conteúdo do carrinho.
  exibirCarrinho() {
    if (this.itens.length === 0) {
      console.log("\n🛒 O carrinho está vazio.");
      return;
    }

    console.log("\n--- Seu Carrinho de Compras Shopee ---");
    this.itens.forEach((item) => {
      console.log(`- ${item.nome} (x${item.quantidade}) | R$ ${item.preco.toFixed(2)} cada`);
      console.log(`  Subtotal: R$ ${(item.preco * item.quantidade).toFixed(2)}`);
    });
    console.log("---------------------------------------");
    console.log(`\nTotal do Carrinho: R$ ${this.calcularTotal()}`);
    console.log("---------------------------------------");
  }

  // Esvazia completamente o carrinho.
  esvaziarCarrinho() {
    this.itens = [];
    console.log("\n🧹 O carrinho foi esvaziado com sucesso.");
  }
}

// Exporta a classe CarrinhoDeCompras
module.exports = CarrinhoDeCompras;