import { Avatar, List, ListItem, Typography } from "@mui/material";
import { useRouter } from "next/router";

export const Navbar = () => {
  return (
    <nav className="nav_container">
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
      <div className="container_list_nav">
        <List className="list_nav">
          <ListItem className="list_nav_item_active">inicio</ListItem>
          <ListItem>cotizaciones</ListItem>
          <ListItem>tiendas</ListItem>
        </List>
      </div>
      <div className="container_perfil">
        <p className="name_navbar">jhon Doe</p>
        <Avatar
          src=""
          alt="profile photo"
          sx={{
            marginTop: 1,
          }}
        />
      </div>
    </nav>
  );
};
