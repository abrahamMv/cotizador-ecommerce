import { Button } from "@mui/material";
import { Price } from "../../interfaces";
import { formatMoney } from "../../utils";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

interface Props {
  shopInfo: Price;
}

export const TableBodyPrices = ({ shopInfo }: Props) => {
  return (
    <tr className="table_body_shop">
      <td className="item_table_shop">{shopInfo.name}</td>
      <td className="item_table_shop">{formatMoney(shopInfo.price)}</td>
      <td className="item_table_shop">Disponible</td>
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
      >
        <KeyboardArrowDownOutlinedIcon />
        Agregar a cotizacion
      </Button>
    </tr>
  );
};
