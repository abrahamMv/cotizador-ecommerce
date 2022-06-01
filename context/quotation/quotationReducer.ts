import { BestQuotationResponse } from "../../interfaces/quotation";
import { QuotationState } from "./QuotationProvider";

type QuotationActionType =
  | { type: "Quotation - bestQuotations"; payload: BestQuotationResponse[] }
  | { type: "Quotation - quotationSelected"; payload: BestQuotationResponse }
  | { type: "Quotation - byUserId"; payload: any };

export const quotationReducer = (
  state: QuotationState,
  action: QuotationActionType
): QuotationState => {
  switch (action.type) {
    case "Quotation - bestQuotations":
      return {
        ...state,
        bestQuotations: action.payload,
      };
    case "Quotation - quotationSelected":
      return {
        ...state,
        quotation: action.payload,
      };
    case "Quotation - byUserId": {
      return {
        ...state,
        quotationByUser: action.payload,
      };
    }
    default:
      return state;
  }
};
