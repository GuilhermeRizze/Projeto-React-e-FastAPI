import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import ShopIcon from '@mui/icons-material/ShoppingCart';
import ShopAddIcon from '@mui/icons-material/AddShoppingCart';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';


//const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const defaultTheme = createTheme();

export default function Album() {
    const [cursos, setCursos] = React.useState([]);
  
    React.useEffect(() => {
      // Fazer uma solicitação GET ao endpoint FastAPI para obter a lista de produtos
      const obterCursos = async () => {
        try {
          const response = await axios.get('http://localhost:8000/list');
          setCursos(response.data);
        } catch (error) {
          console.error('Erro ao obter cursos:', error);
        }
      };
  
      obterCursos();
    }, []);

  const adicionarAoCarrinho = async () => {
    try {
      const response = await axios.post('http://localhost:8000/add_car', {
        cursos: 'nome',
        cursos: 'id',
        cursos: 'preco', // Substitua com a lógica real VER
      });

      console.log('Resposta da API:', response.data);
    } catch (error) {
      console.error('Erro ao adicionar ao carrinho:', error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <ShopIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="white" noWrap>
            Produtos
          </Typography>
          <Link to='/Carrinho' > <ShopAddIcon sx={{ mr: 2 }} position="end"/></Link>
        </Toolbar>
        
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Produto
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Bem vindo a loja
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              
              <Link to='/Cliente' > <Button variant="contained"> CLIENTE</Button> </Link>
             <Link to='/Login' > <Button variant="contained"> ADMINISTRACAO</Button> </Link>
            
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 3 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={2}>
            {cursos.map((cursos) => (
              <Grid item key={cursos.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="{cursos.imagem}"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                      {cursos.nome}
                    </Typography>
                    <Typography>
                      {cursos.descricao}
                    </Typography>
                    <Typography color="red">
                      {cursos.preco}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to='/Carrinho'>
                      <ShopAddIcon sx={{ mr: 2 }} position="end" onClick={adicionarAoCarrinho} />
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'green', p: 6 }} component="footer">
        
        <Typography
          variant="subtitle1"
          align="center"
          component="p"
          color = "white"
        >
          Obrigado por escolher nossos serviços!
        </Typography>
        
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}