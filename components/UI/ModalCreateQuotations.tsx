import { TextField, Typography, Modal, Button } from "@mui/material";
import React, { useState } from "react";

interface Props {
  open: boolean;
  handleClose: Function;
  createQuotation: Function;
}

export const ModalCreateQuotations = ({
  open,
  handleClose,
  createQuotation,
}: Props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Modal
      open={open}
      onClose={() => handleClose(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="modal_style">
        <div className="title">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Crear Nueva Cotización
          </Typography>
          <span onClick={() => handleClose(false)}>X</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            id="standard-basic"
            style={{ width: "100%", marginBottom: "1rem" }}
            label="Nombre de la Cotización"
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="standard-basic"
            style={{ width: "100%", marginBottom: "3rem" }}
            label="Descripción de la Cotización"
            variant="standard"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <Button
          variant="contained"
          sx={{
            width: "100%",
            backgroundColor: "#AB4FE9",
            borderRadius: "1rem",
          }}
          onClick={() => {
            createQuotation({ name, description });
            handleClose(false);
          }}
        >
          Crear Cotización
        </Button>
      </div>
    </Modal>
  );
};
