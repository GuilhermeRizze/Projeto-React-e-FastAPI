import React, { useState } from 'react';
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

import { Link } from 'react-router-dom';

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
  const produtos = [
    { id: 1, nome: 'Produto 1', preco: 10.0 },
    { id: 2, nome: 'Produto 2', preco: 15.0 },
    { id: 3, nome: 'Produto 3', preco: 20.0 },
  ];

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  const calcularTotal = () => {
    return carrinho.reduce((total, produto) => total + produto.preco, 0).toFixed(2);
  };

  return (
    <Container style={styles.container}>
      <Typography variant="h4" gutterBottom>
        Carrinho de Compras
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper style={styles.paper}>
            <Typography variant="h6">Produtos Disponíveis</Typography>
            <List style={styles.productList}>
              {produtos.map((produto) => (
                <ListItem key={produto.id}>
                  <ListItemText primary={produto.nome} secondary={`R$ ${produto.preco.toFixed(2)}`} />
                  <Button variant="contained" color="primary" onClick={() => adicionarAoCarrinho(produto)}>
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
                  <ListItemText primary={item.nome} secondary={`R$ ${item.preco.toFixed(2)}`} />
                </ListItem>
              ))}
            </List>
            <Typography variant="h6" style={styles.total}>Total: R$ {calcularTotal()}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CarrinhoDeCompras;





