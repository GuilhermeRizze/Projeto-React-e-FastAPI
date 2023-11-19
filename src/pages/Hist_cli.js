import React from 'react';
import { Button, Container, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const styles = {
  container: {
    marginTop: 20,
  },
  paper: {
    padding: 20,
  },
};



const historicoDeCompras = [
  {
    id: 1,
    data: '2023-01-15',
    total: 50.0,
    itens: [
      { nome: 'Produto 1', preco: 10.0 },
      { nome: 'Produto 2', preco: 15.0 },
      { nome: 'Produto 3', preco: 25.0 },
    ],
  },
  {
    id: 2,
    data: '2023-02-10',
    total: 35.0,
    itens: [
      { nome: 'Produto 4', preco: 15.0 },
      { nome: 'Produto 5', preco: 20.0 },
    ],
  },
  {
    id: 3,
    data: '2023-03-05',
    total: 75.0,
    itens: [
      { nome: 'Produto 2', preco: 15.0 },
      { nome: 'Produto 3', preco: 25.0 },
      { nome: 'Produto 6', preco: 35.0 },
    ],
  },
];


    const Deslogar = () =>{
        //axios.post(url,data).then(retorno => {})
       // localStorage.removeItem('token')
        window.location = '/'
    }


function HistoricoCompras() {
  return (
    <Container style={styles.container}>
      <Typography variant="h4" gutterBottom>
        Histórico de Compras
      </Typography>
      <Button variant='contained' onClick={ () => Deslogar ()}>
            Sair
    </Button>
      <Paper style={styles.paper}>
        <List>
          {historicoDeCompras.map((compra) => (
            <ListItem key={compra.id}>
              <ListItemText
                primary={`Data: ${compra.data}`}
                secondary={`Total: R$ ${compra.total.toFixed(2)}`}
              />
              <List>
                {compra.itens.map((item, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={item.nome}
                    />
                  </ListItem>
                ))}
              </List>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

export default HistoricoCompras;
