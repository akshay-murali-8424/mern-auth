import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form';

const theme = createTheme();

const schema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required()
})

export default function Login() {
 const {register,
  handleSubmit,
  formState:{errors}
}= useForm({
    resolver:yupResolver(schema),
    
 })

  const submitHandler = (data) => {
    console.log(data)
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit(submitHandler)}  sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              
              fullWidth
              id="email"
              label="Email Address"
              autoFocus
              error={!!errors.email}
            helperText={errors.email ? errors.email.message : ""}
              {...register("email")}
            />
            <TextField
              margin="normal"
              
              fullWidth
              label="Password"
              type="password"
              id="password"
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ""}
              {...register("password")}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    
  );
}