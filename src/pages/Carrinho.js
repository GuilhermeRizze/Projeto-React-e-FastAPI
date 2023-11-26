import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
  Grid,
  Paper,
} from '@mui/material';
import axios from 'axios';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const styles = {
  container: {
    marginTop: 20,
  },
  paper: {
    padding: 20,
  },
  productList: {
    maxHeight: 250,
    overflow: 'auto',
  },
  total: {
    marginTop: 20,
  },
};

function CarrinhoDeCompras() {
  const [carrinho, setCarrinho] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Função para obter produtos da API
    const obterProdutos = async () => {
      try {
        const response = await axios.get('http://localhost:8000/curso/list');
        setProdutos(response.data);
      } catch (error) {
        console.error('Erro ao obter produtos:', error);
      }
    };

    obterProdutos();
  }, []);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  const calcularTotal = () => {
    return carrinho.reduce((total, produto) => total + produto.preco, 0);
  };

  const confirmarCompra = async () => {
    try {
      // Enviar o total para a API FastAPI
      console.log('Total a ser enviado:', calcularTotal());
      const total= calcularTotal()
      console.log('Total a ser enviado:', total);
      await axios.post('http://localhost:8000/curso/confirmar-compra', null, {
        params: {
          total: total
        },
      });
      // Redirecionar para a tela de confirmação ou realizar outras ações necessárias.
      // Exemplo de redirecionamento usando React Router:
      navigate('/Conf');
    } catch (error) {
      console.error('Erro ao confirmar a compra:', error);
    }
  };

  return (
    <Container style={styles.container}>
      <Typography variant="h4" gutterBottom>
      <Link to='/' > 
        <ArrowBackIcon sx={{ ml: 'auto', color: 'black' }} />
      </Link>
        Carrinho de Compras
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper style={styles.paper}>
            <Typography variant="h6">Produtos Disponíveis</Typography>
            <List style={styles.productList}>
              {produtos.map((produto) => (
                <ListItem key={produto.codigo}>
                  <ListItemText
                    primary={produto.nome}
                    secondary={`R$ ${produto.preco.toFixed(2)}`}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ backgroundColor: '#0D7048', color: 'white' }}
                    onClick={() => adicionarAoCarrinho(produto)}
                  >
                    Adicionar
                  </Button>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={styles.paper}>
            <Typography variant="h6">Seu Carrinho</Typography>
            <List style={styles.productList}>
              {carrinho.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={item.nome}
                    secondary={`R$ ${item.preco}`}
                  />
                </ListItem>
              ))}
            </List>
            <Typography variant="h6" style={styles.total}>
              Total: R$ {calcularTotal()}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Button
        type="button"
        variant="contained"
        color="primary"
        sx={{ backgroundColor: '#0D7048', color: 'white' }}
        onClick={confirmarCompra}
      >
        Confirmar Compra
      </Button>

      
    </Container>
  );
}

export default CarrinhoDeCompras;