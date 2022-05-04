import { Box, Button, Checkbox, Grid, Input, Typography } from "@mui/material";
import { AuthInfo } from "../../components/UI";

const LoginPage = () => {
  return (
    <Grid container>
      <Grid
        item
        xs={7}
        sx={{
          width: "100%",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            padding: 8,
            width: "600px",
          }}
        >
          <Typography variant="h5">Inicia</Typography>
          <Typography variant="h4" color="primary">
            Sesión
          </Typography>
          <hr />

          <form
            style={{
              marginTop: 15,
              width: "100%",
            }}
          >
            <Box
              sx={{
                marginTop: 5,
              }}
            >
              <label>Correo electrónico</label>
              <Input fullWidth placeholder="correo@correo.com" type="email" />
            </Box>

            <Box
              sx={{
                marginTop: 5,
              }}
            >
              <label>Contraseña</label>
              <Input fullWidth type="password" placeholder="********" />
            </Box>
          </form>
          <Box
            sx={{
              marginTop: 10,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Checkbox
                defaultChecked
                sx={{
                  borderRadius: 10,
                }}
              />
              <Typography
                sx={{
                  fontSize: 15,
                  margin: 1,
                  marginLeft: 0,
                }}
              >
                Mantener
              </Typography>
              <Typography
                color="primary"
                sx={{
                  fontSize: 15,
                  margin: 1,
                  marginLeft: 0,
                }}
              >
                sesión iniciada
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                width: 180,
                height: 40,
              }}
            >
              Iniciar Sesión
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={5}>
        <AuthInfo />
      </Grid>
    </Grid>
  );
};

export default LoginPage;
