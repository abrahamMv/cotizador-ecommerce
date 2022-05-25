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
import { useFormik } from "formik";
import * as yup from "yup";

const RegisterPage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      typeDoc: "CC",
      document: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Este campo es obligatorio"),
      lastName: yup.string().required("Este campo es obligatorio"),
      document: yup.string().required("Este campo es obligatorio"),
      email: yup
        .string()
        .email("El email no es valido")
        .required("Este campo es obligatorio"),
      password: yup
        .string()
        .required("Este campo es obligatorio")
        .min(6, "la contraseña debe tener minimo 6 carcateres"),
      repeatPassword: yup
        .string()
        .oneOf([yup.ref("password"), null])
        .required("Este campo es obligatorio"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Grid
      container
      sx={{
        height: "100vh",
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

          <form onSubmit={formik.handleSubmit}>
            <Box
              sx={{
                marginTop: 3,
              }}
            >
              <label>Nombre</label>
              <Input
                fullWidth
                placeholder="Ingresa tu nombre"
                type="text"
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.errors.name && formik.touched.name ? true : false}
                onBlur={formik.handleBlur}
              />
              {formik.errors.name && formik.touched.name && (
                <span className="error-auth">{formik.errors.name}</span>
              )}
            </Box>
            <Box
              sx={{
                marginTop: 3,
              }}
            >
              <label>Apellido</label>
              <Input
                fullWidth
                placeholder="Ingresa tu apellido"
                type="text"
                id="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.errors.lastName && formik.touched.lastName
                    ? true
                    : false
                }
                onBlur={formik.handleBlur}
              />
              {formik.errors.lastName && formik.touched.lastName && (
                <span className="error-auth">{formik.errors.lastName}</span>
              )}
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
                  name="typeDoc"
                  value={formik.values.typeDoc}
                  onChange={formik.handleChange}
                  sx={{
                    width: "7rem",
                    height: "2.3rem",
                    borderRadius: 3,
                    marginRight: 3,
                  }}
                >
                  <MenuItem value="CC">
                    <em>CC</em>
                  </MenuItem>
                  <MenuItem value="TI">TI</MenuItem>
                </Select>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Input
                    sx={{
                      width: "100%",
                    }}
                    fullWidth
                    placeholder="Número de documento"
                    type="text"
                    id="document"
                    value={formik.values.document}
                    onChange={formik.handleChange}
                    error={
                      formik.errors.document && formik.touched.document
                        ? true
                        : false
                    }
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.document && formik.touched.document && (
                    <span className="error-auth">{formik.errors.document}</span>
                  )}
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                marginTop: 3,
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
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Input
                    placeholder="Contraseña"
                    type="password"
                    sx={{
                      width: "70%",
                    }}
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
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Input
                    placeholder="Repetir contraseña"
                    type="password"
                    sx={{
                      width: "70%",
                    }}
                    id="repeatPassword"
                    value={formik.values.repeatPassword}
                    onChange={formik.handleChange}
                    error={
                      formik.errors.repeatPassword &&
                      formik.touched.repeatPassword
                        ? true
                        : false
                    }
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.repeatPassword &&
                    formik.touched.repeatPassword && (
                      <span className="error-auth">
                        {formik.errors.repeatPassword}
                      </span>
                    )}
                </Box>
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
                type="submit"
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
