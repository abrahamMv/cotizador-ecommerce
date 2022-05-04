import { Box, Typography } from "@mui/material";

export const AuthInfo = () => {
  return (
    <Box
      sx={{
        padding: 5,
        height: "100vh",
        backgroundColor: "primary.main",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Typography variant="h4" color="white">
          Logo
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            marginBottom: 5,
          }}
        >
          <Box
            sx={{
              width: 150,
              height: 130,
              backgroundColor: "secondary.main",
              borderRadius: 8,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            icono
          </Box>
          <Box
            sx={{
              maxWidth: 340,
              paddingTop: 1,
              marginLeft: 3,
            }}
          >
            <Typography variant="h5" color="white">
              Conoce las tiendas disponibles
            </Typography>
            <Typography
              color="white"
              sx={{
                fontSize: 10,
              }}
            >
              Labore culpa minim velit Lorem magna elit incididunt amet aute ad
              Lorem nostrud non ipsum. Velit deserunt sint et aliquip enim non
              qui elit eu laboris eiusmod elit. Ali qua ullamco Lorem elit enim.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginBottom: 5,
          }}
        >
          <Box
            sx={{
              width: 150,
              height: 130,
              backgroundColor: "secondary.main",
              borderRadius: 8,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            icono
          </Box>
          <Box
            sx={{
              maxWidth: 340,
              paddingTop: 1,
              marginLeft: 3,
            }}
          >
            <Typography variant="h5" color="white">
              Cotiza tu equipo
            </Typography>
            <Typography
              color="white"
              sx={{
                fontSize: 10,
              }}
            >
              Labore culpa minim velit Lorem magna elit incididunt amet aute ad
              Lorem nostrud non ipsum. Velit deserunt sint et aliquip enim non
              qui elit eu laboris eiusmod elit. Ali qua ullamco Lorem elit enim.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginBottom: 3,
          }}
        >
          <Box
            sx={{
              width: 150,
              height: 130,
              backgroundColor: "secondary.main",
              borderRadius: 8,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            icono
          </Box>
          <Box
            sx={{
              maxWidth: 340,
              paddingTop: 1,
              marginLeft: 3,
            }}
          >
            <Typography variant="h5" color="white">
              Comparte tus cotizaciones
            </Typography>
            <Typography
              color="white"
              sx={{
                fontSize: 10,
              }}
            >
              Labore culpa minim velit Lorem magna elit incididunt amet aute ad
              Lorem nostrud non ipsum. Velit deserunt sint et aliquip enim non
              qui elit eu laboris eiusmod elit. Ali qua ullamco Lorem elit enim.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
