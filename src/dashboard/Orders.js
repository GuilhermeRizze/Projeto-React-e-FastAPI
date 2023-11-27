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
        const response = await axios.get('http://localhost:8000/curso/compra');
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
            <TableCell>ID do Cliente</TableCell>
            <TableCell align="right">Valor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vendas.map((venda) => (
            <TableRow>
              <TableCell>{venda.id_cli}</TableCell>
              <TableCell align="right">{`$${venda.total}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}