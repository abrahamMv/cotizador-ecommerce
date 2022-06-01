import { ProductQuotation } from "../../interfaces";
import { formatMoney } from "../../utils";

interface Props {
  productInfo: ProductQuotation;
}

export const TableBodyProducts = ({ productInfo }: Props) => {
  return (
    <tr className="table_body td">
      <td>{productInfo.name}</td>
      <td>{productInfo.shop}</td>
      <td>{formatMoney(productInfo.price)}</td>
      <td>{productInfo.createdAt}</td>
    </tr>
  );
};
