import * as React from 'react';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { Button } from '@mui/material';
import axios from 'axios';

export default function Estoque() {
  const [produtos, setProdutos] = React.useState([]);

  React.useEffect(() => {
    const obterProdutos = async () => {
      try {
        const response = await axios.get('http://localhost:8000/list');
        setProdutos(response.data);
      } catch (error) {
        console.error('Erro ao obter produtos:', error);
      }
    };

    obterProdutos();
  }, []);

  return (
    <React.Fragment>
      <Title>Estoque de Produtos</Title>
      <Link to='/Cadastro'><Button>NOVO PRODUTO</Button></Link>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Codigo</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Tipo</TableCell>
            <TableCell>Quantidade</TableCell>
            <TableCell>Valor</TableCell>
            <TableCell>Editar</TableCell>
            <TableCell align="right">Excluir</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {produtos.map((produto) => (
            <TableRow key={produto.codigo}>
              <TableCell>{produto.codigo}</TableCell>
              <TableCell>{produto.nome}</TableCell>
              <TableCell>{produto.tipo}</TableCell>
              <TableCell>{produto.quantidade}</TableCell>
              <TableCell>{produto.valor}</TableCell>
              <TableCell>Editar </TableCell> //Colocar caminho para o link
              <TableCell align="right">Excluir Lógica</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}