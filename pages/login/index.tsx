import { Box, Button, Checkbox, Grid, Input, Typography } from "@mui/material";
import { AuthInfo } from "../../components/UI";
import { useFormik } from "formik";
import * as yup from "yup";

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("El email no es valido")
        .required("Este campo es obligatorio"),
      password: yup
        .string()
        .required("Este campo es obligatorio")
        .min(6, "la contraseña debe tener minimo 6 carcateres"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
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
            onSubmit={formik.handleSubmit}
          >
            <Box
              sx={{
                marginTop: 5,
              }}
            >
              <label>Correo electrónico</label>
              <Input
                fullWidth
                placeholder="correo@correo.com"
                type="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={
                  formik.errors.email && formik.touched.email ? true : false
                }
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email && (
                <span className="error-auth">{formik.errors.email}</span>
              )}
            </Box>

            <Box
              sx={{
                marginTop: 5,
              }}
            >
              <label>Contraseña</label>
              <Input
                fullWidth
                type="password"
                placeholder="********"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.errors.password && formik.touched.password
                    ? true
                    : false
                }
                onBlur={formik.handleBlur}
              />
              {formik.errors.password && formik.touched.password && (
                <span className="error-auth">{formik.errors.password}</span>
              )}
            </Box>
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
                type="submit"
                sx={{
                  width: 180,
                  height: 40,
                }}
              >
                Iniciar Sesión
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
      <Grid item xs={5}>
        <AuthInfo />
      </Grid>
    </Grid>
  );
};

export default LoginPage;
