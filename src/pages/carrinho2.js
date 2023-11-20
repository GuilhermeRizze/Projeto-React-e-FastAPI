import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCarrinho } from './CarrinhoContext';

const Produto = ({ produto }) => {
  const { dispatch } = useCarrinho();
  const [produtoDetalhes, setProdutoDetalhes] = useState(null);

  useEffect(() => {
    const obterDetalhesDoProduto = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/produtos/${produto.id}`);
        setProdutoDetalhes(response.data);
      } catch (error) {
        console.error('Erro ao obter detalhes do produto:', error);
      }
    };

    obterDetalhesDoProduto();
  }, [produto.id]);

  const adicionarAoCarrinho = () => {
    dispatch({ type: 'ADICIONAR_ITEM', item: produtoDetalhes });
  };

  return (
    <div>
      <h3>{produto.nome}</h3>
      <p>Preço: ${produto.preco}</p>
      {produtoDetalhes && (
        <div>
          <p>Detalhes:</p>
          <p>ID: {produtoDetalhes.id}</p>
          <p>Nome: {produtoDetalhes.nome}</p>
          <p>Preço: ${produtoDetalhes.preco}</p>
          <button onClick={adicionarAoCarrinho}>Adicionar ao Carrinho</button>
        </div>
      )}
    </div>
  );
};

export default Produto;