import { BestQuotationResponse } from "../../interfaces/quotation";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

interface Props {
  quotation: BestQuotationResponse;
}

export const TableBody = ({ quotation }: Props) => {
  const router = useRouter();

  const handleView = (id: number) => {
    router.push(`/quoteViews/${id}`);
  };
  return (
    <tr className="table_body">
      <td>{quotation.name}</td>
      <td>{quotation.description}</td>
      <td>{quotation.user.firstName + " " + quotation.user.lastName}</td>
      <td>{quotation.products.length}</td>
      <td>{quotation.likes.length}</td>
      <Button
        variant="contained"
        sx={{
          width: 80,
          height: 35,
          backgroundColor: "#8367C7",
          borderRadius: "1rem",
          marginTop: 2,
          fontSize: 10,
        }}
        onClick={() => handleView(quotation.id)}
      >
        <KeyboardArrowDownOutlinedIcon />
        ver
      </Button>
    </tr>
  );
};
