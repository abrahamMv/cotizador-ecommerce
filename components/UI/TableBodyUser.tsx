import { GetQuotationByUserResponse } from "../../interfaces";
import { credentials } from "../../utils";

interface Props {
  infoUserQuotation: GetQuotationByUserResponse;
}

export const TableBodyUser = ({ infoUserQuotation }: Props) => {
  return (
    <tr className="table_body">
      <td>{infoUserQuotation.name}</td>
      <td>{infoUserQuotation.description}</td>
      {/* <td>{credentials.getUser().firstName}</td> */}
      <td>{infoUserQuotation.products.length}</td>
      {/* <td>{infoUserQuotation.name}</td> */}
    </tr>
  );
};
