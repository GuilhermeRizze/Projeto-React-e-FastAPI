import React, { useState } from 'react';
import axios from 'axios';
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
    quantidade: '',  
    tipo: '',     
    descricao: '',
    imagem: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto({
      ...produto,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Enviar dados para a API FastAPI
      const response = await axios.post('http://localhost:8000/create', produto); //
      console.log('Resposta da API:', response.data);
    } catch (error) {
      console.error('Erro ao enviar dados para a API:', error);
    }
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
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Descricao"
                name="descricao"
                multiline
                rows={4}
                value={produto.descricao}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Imagem"
                name="imagem"
                multiline
                rows={4}
                value={produto.imagem}
                onChange={handleChange}
                required
              />
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
