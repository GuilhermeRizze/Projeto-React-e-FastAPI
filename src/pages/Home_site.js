import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import ShopIcon from '@mui/icons-material/ShoppingCart';
import ShopAddIcon from '@mui/icons-material/AddShoppingCart';
import Card from '@mui/material/Card';
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

const defaultTheme = createTheme();

export default function Album() {
    const [cursos, setCursos] = React.useState([]);
  
    React.useEffect(() => {
      const obterCursos = async () => {
        try {
          const response = await axios.get('http://localhost:8000/curso/list');
          setCursos(response.data);
        } catch (error) {
          console.error('Erro ao obter cursos:', error);
        }
      };
  
      obterCursos();
    }, []);

  
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="static" sx={{ backgroundColor: '#0D7048' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ShopIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="white" noWrap>
            vITEpila
          </Typography>
        </Box>
        <Link to='/Carrinho'>
          <ShopAddIcon sx={{ ml: 'auto', color: 'white' }} />
        </Link>
      </Toolbar>
    </AppBar>
      <main>
        
            <img src="https://i.imgur.com/DtHWPGml.png" alt="Logo" style={{ width: '1344px', height: '500px' }} />           
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              
              <Link to='/Cliente'>
                <Button variant="contained" sx={{ backgroundColor: '#0D7048', color: 'white' }}>
                  CLIENTE
                </Button>
              </Link>

              <Link to='/Login'>
                <Button variant="contained" sx={{ backgroundColor: '#0D7048', color: 'white' }}>
                  ADMINISTRACAO
                </Button>
              </Link>
            
            </Stack>
   
       
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
                    image={cursos.imagem}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                      {cursos.nome}
                    </Typography>
                    <Typography>
                      {cursos.descricao}
                    </Typography>
                    <Typography color="#0D7048">
                      R$ {cursos.preco}
                    </Typography>
                  </CardContent>
                  
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Box sx={{ bgcolor: '#0D7048', p: 6 }} component="footer">
        
        <Typography
          variant="subtitle1"
          align="center"
          component="p"
          color = "white"
        >
          Obrigado por escolher nossos serviços!
        </Typography>
        
      </Box>
    </ThemeProvider>
  );
}