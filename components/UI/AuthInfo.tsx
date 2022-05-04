import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

export const AuthInfo = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        padding: 5,
        height: "100%",
        backgroundColor: "primary.main",
      }}
    >
      <Box
        className={`logo ${
          router.asPath === "/register"
            ? "logo_direction_register"
            : "logo_direction_login"
        }`}
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
            <StoreOutlinedIcon
              fontSize="large"
              sx={{
                width: 100,
                height: 100,
                color: "white",
              }}
            />
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
            <DevicesOutlinedIcon
              fontSize="large"
              sx={{
                width: 90,
                height: 90,
                color: "white",
              }}
            />
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
            <ShareOutlinedIcon
              fontSize="large"
              sx={{
                width: 100,
                height: 100,
                color: "white",
              }}
            />
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
