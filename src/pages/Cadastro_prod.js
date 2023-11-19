import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Paper,
} from '@mui/material';

const styles = {
  container: {
    marginTop: 20,
  },
  paper: {
    padding: 20,
  },
  imageInput: {
    display: 'none',
  },
  imageLabel: {
    display: 'block',
    marginTop: 10,
  },
  productImage: {
    maxWidth: 200,
    maxHeight: 200,
  },
};

function CadastroDeProduto() {
  const [produto, setProduto] = useState({
    nome: '',
    preco: '',
    descricao: '',
    imagem: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto({
      ...produto,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProduto({
      ...produto,
      imagem: URL.createObjectURL(file),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do produto:', produto);
  };

  return (
    <Container style={styles.container}>
      <Typography variant="h4" gutterBottom>
        Cadastro de Produto
      </Typography>
      <Paper style={styles.paper}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nome do Produto"
                name="nome"
                value={produto.nome}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Preço"
                name="preco"
                type="number"
                value={produto.preco}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Quantidade"
                name="quantidade"
                type="number"
                value={produto.quantidade}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Tipo"
                name="tipo"
                value={produto.tipo}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Descricao"
                name="descricao"
                multiline
                rows={4}
                value={produto.tipo}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <input
                type="file"
                accept="image/*"
                id="product-image"
                style={styles.imageInput}
                onChange={handleImageChange}
              />
              <label htmlFor="product-image" style={styles.imageLabel}>
                Selecione a imagem
              </label>
              {produto.imagem && (
                <img
                  src={produto.imagem}
                  alt="Imagem do Produto"
                  style={styles.productImage}
                />
              )}
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Cadastrar Produto
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default CadastroDeProduto;
