import { Typography } from "@mui/material";

export const Footer = () => {
  return (
    <div className="nav_container">
      <Typography
        variant="h6"
        sx={{
          color: "gray",
          fontWeight: "light",
          fontSize: "13px",
        }}
      >
        Rubén Martínez, Abraham Martínez, Gabriel Ramírez, Bryan Henríquez ☺
        Seminario 2022-1
      </Typography>
    </div>
  );
};
