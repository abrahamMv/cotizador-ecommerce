import { Avatar, Button, List, ListItem, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";
import { credentials } from "../../utils";

import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

export const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="nav_container">
      <Link href="/">
        <div className="container_logo">
          <img src="Logo_Purple.png" className="logo_navbar" alt="logo" />
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              marginTop: 1,
            }}
          >
            /Cetre
          </Typography>
        </div>
      </Link>
      <div className="container_list_nav">
        <List className="list_nav">
          <Link href="/">
            <ListItem
              className={`${
                router.pathname === "/" && "list_nav_item_active"
              } list_nav_item`}
            >
              Inicio
            </ListItem>
          </Link>
          <Link href="/quote">
            <ListItem
              className={`${
                router.pathname === "/quote" && "list_nav_item_active"
              } list_nav_item`}
            >
              Cotizaciones
            </ListItem>
          </Link>
          <Link href="/catalog">
            <ListItem
              className={`${
                router.pathname === "/catalog" && "list_nav_item_active"
              } list_nav_item `}
            >
              Catálogo
            </ListItem>
          </Link>
        </List>
      </div>
      {credentials.getToken() ? (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link href={`/perfil/${credentials.getUser().id}`}>
            <div className="container_perfil">
              <p className="name_navbar">
                {credentials.getUser().firstName +
                  " " +
                  credentials.getUser().lastName}
              </p>
              <Avatar
                src=""
                alt="profile photo"
                sx={{
                  marginTop: 1,
                }}
              />
            </div>
          </Link>
          <div
            style={{ cursor: "pointer", marginLeft: "0.5rem" }}
            onClick={() => {
              credentials._clear();
              router.push("/login");
            }}
          >
            <PowerSettingsNewIcon />
          </div>
        </div>
      ) : (
        <Link href="/login">
          <Button
            variant="contained"
            sx={{
              width: 180,
              height: 35,
              backgroundColor: "#AB4FE9",
              borderRadius: "1rem",
            }}
          >
            Iniciar Sesión
          </Button>
        </Link>
      )}
    </nav>
  );
};
