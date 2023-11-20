import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import axios from 'axios';

export default function Orders() {
  const [vendas, setVendas] = React.useState([]);

  React.useEffect(() => {
    const obterVendas = async () => {
      try {
        // Substitua a URL abaixo pela URL real do seu endpoint FastAPI para obter dados de vendas
        const response = await axios.get('http://localhost:8000/vendas');
        setVendas(response.data);
      } catch (error) {
        console.error('Erro ao obter vendas:', error);
      }
    };

    obterVendas();
  }, []);

  return (
    <React.Fragment>
      <Title>Vendas Realizadas</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Produto</TableCell>
            <TableCell>Retirar Coluna</TableCell>
            <TableCell align="right">Valor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vendas.map((venda) => (
            <TableRow key={venda.id}>
              <TableCell>{venda.data}</TableCell>
              <TableCell>{venda.nome}</TableCell>
              <TableCell>{venda.produto}</TableCell>
              <TableCell>{/* Lógica para a coluna que você deseja retirar */}</TableCell>
              <TableCell align="right">{`$${venda.valor}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}