import React, { useState, useEffect } from 'react';
import { Button, Container, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import axios from 'axios';

const styles = {
  container: {
    marginTop: 20,
  },
  paper: {
    padding: 20,
  },
};

function HistoricoCompras() {
  const [historicoDeCompras, setHistoricoDeCompras] = useState([]);

  useEffect(() => {
    // Função para obter histórico de compras da API
    const obterHistoricoDeCompras = async () => {
      try {
        const response = await axios.get('http://localhost:8000/curso/busca');
        setHistoricoDeCompras(response.data);
      } catch (error) {
        console.error('Erro ao obter histórico de compras:', error);
      }
    };

    obterHistoricoDeCompras();
  }, []);

  return (
    <Container style={styles.container}>
      <Typography variant="h4" gutterBottom>
        Histórico de Compras
      </Typography>
      <Paper style={styles.paper}>
        <List>
          {historicoDeCompras.map((compra) => (
            <ListItem>
              <ListItemText
                primary={`Cliente: ${compra.id_cli}`}
                secondary={`Total: R$ ${compra.total.toFixed(2)}`}
              />
              
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

export default HistoricoCompras;
