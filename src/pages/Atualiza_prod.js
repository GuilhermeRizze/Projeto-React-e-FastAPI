import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
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

function EdicaoDeProduto() {
  const { codigo } = useParams();


  const [produto, setProduto] = useState({
    nome: '',
    preco: '',
    quantidade: '',
    tipo: '',
    descricao: '',
    imagem: '',
    codigo: codigo,
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
      // Enviar dados para a API FastAPI Desenvolvida
      const response = await axios.put(`http://localhost:8000/curso/update/${produto.codigo}`, produto); //
      console.log('Resposta da API:', response.data);
      setProduto({
        nome: '',
        preco: '',
        quantidade: '',
        tipo: '',
        descricao: '',
        imagem: '',
        codigo: produto.codigo,
      });
    } catch (error) {
      console.error(`Erro ao enviar dados para a API: ${produto.codigo}`, error);
    }
  };
  return (
    <Container style={styles.container}>
      <Typography variant="h4" gutterBottom>
      <Link to='/Dashboard' > 
        <ArrowBackIcon sx={{ ml: 'auto', color: 'black' }} />
      </Link>
        Atualização de Produto
      </Typography>
      <Paper style={styles.paper}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
         
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nome do Produto"
                name="nome"
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
            <Button type="submit" variant="contained"  sx={{ backgroundColor: '#0D7048', color: 'white' }}>
                Atualizar Produto
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default EdicaoDeProduto;
