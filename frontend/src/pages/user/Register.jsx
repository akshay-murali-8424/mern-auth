import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const schema = yup.object().shape({
  name: yup.string().required().min(6).matches(/^[a-zA-Z][a-zA-Z ]+[a-zA-Z]*$/,"enter a valid name"),
  email: yup.string().required().email(),
  password: yup.string().required(),
  confirmPassword: yup
    .string().required()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitHandler = (data) => {
    console.log(data);
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(submitHandler)}
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            fullWidth
            id="name"
            autoFocus
            label="Name"
            error={!!errors.name}
            helperText={errors.name ? errors.name.message : ""}
            {...register("name")}
          />
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
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
          <TextField
            margin="normal"
            fullWidth
            label="Confirm password"
            type="password"
            id="confirmPassword"
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword ? errors.confirmPassword.message : ""}
            {...register("confirmPassword")}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xxl>
              <Link href="#" variant="body2">
                Already have an account? Sign In
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
