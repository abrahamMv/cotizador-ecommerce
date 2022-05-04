import {
  Box,
  Grid,
  Typography,
  Input,
  Select,
  MenuItem,
  Checkbox,
  Button,
} from "@mui/material";
import { AuthInfo } from "../../components/UI";

const RegisterPage = () => {
  return (
    <Grid
      container
      sx={{
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Grid item xs={5}>
        <AuthInfo />
      </Grid>
      <Grid item xs={7}>
        <Box
          sx={{
            padding: 8,
            width: "600px",
          }}
        >
          <Typography variant="h5">Crea gratis tu nueva</Typography>
          <Typography variant="h4" color="primary">
            Cuenta
          </Typography>
          <hr />

          <form>
            <Box
              sx={{
                marginTop: 3,
              }}
            >
              <label>Nombre</label>
              <Input fullWidth placeholder="Ingresa tu nombre" type="text" />
            </Box>
            <Box
              sx={{
                marginTop: 3,
              }}
            >
              <label>Apellido</label>
              <Input fullWidth placeholder="Ingresa tu apellido" type="text" />
            </Box>
            <Box
              sx={{
                marginTop: 3,
              }}
            >
              <label>Documento</label>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Select
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  sx={{
                    width: "7rem",
                    height: "2.3rem",
                    borderRadius: 3,
                    marginRight: 3,
                  }}
                >
                  <MenuItem value="">
                    <em>CC</em>
                  </MenuItem>
                  <MenuItem>TI</MenuItem>
                </Select>
                <Input
                  fullWidth
                  placeholder="Número de documento"
                  type="text"
                />
              </Box>
            </Box>
            <Box
              sx={{
                marginTop: 3,
              }}
            >
              <label>Correo electrónico</label>
              <Input fullWidth placeholder="correo@correo.com" type="email" />
            </Box>
            <Box
              sx={{
                marginTop: 3,
              }}
            >
              <label>Contraseña</label>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Input
                  placeholder="Contraseña"
                  type="password"
                  sx={{
                    width: "45%",
                  }}
                />
                <Input
                  placeholder="Repetir contraseña"
                  type="password"
                  sx={{
                    width: "45%",
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                marginTop: 3,
                display: "flex",
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
                />{" "}
                <Typography sx={{ fontSize: 12, margin: 1 }} color="black">
                  Acepto los{" "}
                  <span
                    style={{
                      color: "#5603AD",
                    }}
                  >
                    términos
                  </span>{" "}
                  y{" "}
                  <span
                    style={{
                      color: "#5603AD",
                    }}
                  >
                    condiciones
                  </span>{" "}
                </Typography>
              </Box>
              <Button
                variant="contained"
                sx={{
                  width: 180,
                  height: 40,
                }}
              >
                Registrame
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default RegisterPage;
