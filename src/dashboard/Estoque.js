import * as React from 'react';
import { Link} from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Estoque() {
  const [produtos, setProdutos] = React.useState([]);
  const navigate = useNavigate();


  React.useEffect(() => {
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
  
  const handleEditar = (codigo) => {
    
    navigate(`/Editar/${codigo}`);
  };

  const handleExcluir = async (codigo) => {
    // Implemente a lógica para excluir o produto com o código fornecido.
    try {
      await axios.delete(`http://localhost:8000/curso/delete/${codigo}`);
      // Atualize a lista de produtos após a exclusão.
      const updatedProdutos = produtos.filter((produto) => produto.codigo !== codigo);
      setProdutos(updatedProdutos);
      console.log(`Produto de código ${codigo} excluído com sucesso`);
    } catch (error) {
      console.error(`Erro ao excluir produto de código ${codigo}:`, error);
    }
  };


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
            <TableRow>
              <TableCell>{produto.codigo}</TableCell>
              <TableCell>{produto.nome}</TableCell>
              <TableCell>{produto.tipo}</TableCell>
              <TableCell>{produto.quantidade}</TableCell>
              <TableCell>{produto.preco}</TableCell>
              <TableCell>
                <Button onClick={() => handleEditar(produto.codigo)}>EDITAR</Button>
              </TableCell>
              <TableCell align="right">
                <Button onClick={() => handleExcluir(produto.codigo)}>Excluir</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}