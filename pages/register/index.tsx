import { Box, Grid, Typography } from "@mui/material";
import { AuthInfo } from "../../components/UI";

const RegisterPage = () => {
  return (
    <Grid container spacing={2}>
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
        </Box>
      </Grid>
    </Grid>
  );
};

export default RegisterPage;
