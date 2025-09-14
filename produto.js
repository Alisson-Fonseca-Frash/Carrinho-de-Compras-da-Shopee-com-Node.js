// A classe Produto representa um item no carrinho.
class Produto {
  constructor(id, nome, preco, quantidade) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }
}

// Exporta a classe para que ela possa ser importada em outros arquivos.
module.exports = Produto;