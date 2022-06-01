import { createContext } from "react";
import {
  BestQuotationResponse,
  GetQuotationByUserResponse,
} from "../../interfaces/";

interface ContextProps {
  bestQuotations: BestQuotationResponse[];
  quotation?: BestQuotationResponse;
  myQuotation?: GetQuotationByUserResponse[];

  getBestQuotations: () => Promise<void>;
  getQuotationBYId: (id: string) => Promise<void>;
  getQuotationByUser: (id: string) => Promise<void>;
}

export const QuotationContext = createContext({} as ContextProps);
