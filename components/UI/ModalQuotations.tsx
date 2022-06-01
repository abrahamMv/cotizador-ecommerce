import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { GetQuotationByUserResponse, Price } from "../../interfaces";

interface Props {
  open: boolean;
  quotationList: GetQuotationByUserResponse[] | undefined;
  shopInfo?: Price;
  handleClose: Function;
  addToQuotation: Function;
}

export const ModalQuotations = ({
  open,
  quotationList,
  handleClose,
  addToQuotation,
  shopInfo,
}: Props) => {
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
            Tus cotizaciones
          </Typography>
          <span onClick={() => handleClose(false)}>X</span>
        </div>
        {quotationList?.map((e) => (
          <Typography
            className="option_quota"
            onClick={() => {
              addToQuotation(e.id, shopInfo?.shopProductId);
              handleClose(false);
            }}
          >
            {e.name}
          </Typography>
        ))}
      </div>
    </Modal>
  );
};
