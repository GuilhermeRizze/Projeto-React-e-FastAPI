import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(data:image/jpeg;base64,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)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'green' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              
              <Link to='/dashboard' > <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: 'green' }}
              >
                Acessar
              </Button></Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
