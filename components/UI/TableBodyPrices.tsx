import React, { useState } from "react";
import { Button } from "@mui/material";
import { Price, GetQuotationByUserResponse } from "../../interfaces";
import { formatMoney } from "../../utils";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { ModalQuotations } from "./ModalQuotations";

interface Props {
  shopInfo: Price;
  myQuotation?: GetQuotationByUserResponse[];
  addToQuotation: Function;
}

export const TableBodyPrices = ({
  shopInfo,
  myQuotation,
  addToQuotation,
}: Props) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <tr className="table_body_shop">
      <td className="item_table_shop">{shopInfo.name}</td>
      <td className="item_table_shop">{formatMoney(shopInfo.price)}</td>
      <td className="item_table_shop">Disponible</td>
      <td>
        <Button
          variant="contained"
          sx={{
            width: 150,
            height: 35,
            backgroundColor: "#8367C7",
            borderRadius: "1rem",
            marginTop: 2,
            fontSize: 10,
          }}
          onClick={() => {
            setOpenModal(!openModal);
          }}
        >
          <KeyboardArrowDownOutlinedIcon />
          Agregar a cotizacion
        </Button>

        <ModalQuotations
          open={openModal}
          quotationList={myQuotation}
          handleClose={setOpenModal}
          shopInfo={shopInfo}
          addToQuotation={addToQuotation}
        />
      </td>
    </tr>
  );
};
