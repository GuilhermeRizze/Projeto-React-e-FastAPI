import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
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
      <AppBar position="relative" sx={{ bgcolor: '#0D7048' }}>
        <Toolbar>
        <Typography variant="h6" color="white" noWrap>
            vITEpila
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            backgroundImage: 'url("https://i.imgur.com/foSX7uC.png")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            pt: 20,
            pb: 30,
          }}
        >
          <Container maxWidth="sm">
            
            <Typography variant="h3" align="center" sx={{
                color: 'white',
                textShadow: '2px 2px 2px black',
                padding: '10px',
                borderRadius: '5px',
              }} >
              Sua compra foi efetivada
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Link to='/'>
                <Button variant="contained" sx={{ backgroundColor: '#0D7048' }}>VOLTAR PARA HOME</Button>
              </Link>
            </Stack>
          </Container>
        </Box>
      </main>
      <Box sx={{ bgcolor: '#0D7048', p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          component="p"
          color="white"
        >
          Obrigado por escolher nossos serviços!
        </Typography>
      </Box>
    </ThemeProvider>
  );
}
