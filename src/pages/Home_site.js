import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import ShopIcon from '@mui/icons-material/ShoppingCart';
import ShopAddIcon from '@mui/icons-material/AddShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
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


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
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
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      NOME
                    </Typography>
                    <Typography>
                      DESCRIÇÃO
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Adicionar ao Carrinho</Button>
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