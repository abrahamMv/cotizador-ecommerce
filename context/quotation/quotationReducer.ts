import {
  BestQuotationResponse,
  GetQuotationByUserResponse,
} from "../../interfaces/";
import { QuotationState } from "./QuotationProvider";

type QuotationActionType =
  | { type: "Quotation - bestQuotations"; payload: BestQuotationResponse[] }
  | { type: "Quotation - quotationSelected"; payload: BestQuotationResponse }
  | {
      type: "Quotation - quotationByUser";
      payload: GetQuotationByUserResponse[];
    }
  | { type: "Quotation - allQuotations"; payload: BestQuotationResponse[] };

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
    case "Quotation - quotationByUser":
      return {
        ...state,
        myQuotation: action.payload,
      };
    case "Quotation - allQuotations":
      return {
        ...state,
        bestQuotations: action.payload,
      };
    default:
      return state;
  }
};
