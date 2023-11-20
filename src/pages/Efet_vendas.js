import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import ShopIcon from '@mui/icons-material/ShoppingCart';
import ShopAddIcon from '@mui/icons-material/AddShoppingCart';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';


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
            >COLOCAR A LOGO
              vITEpila
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Sua compra foi efeitivada
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              
              <Link to='/' > <Button variant="contained"> VOLTAR PARA HOME</Button> </Link>
            
            </Stack>
          </Container>
        </Box>
        
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