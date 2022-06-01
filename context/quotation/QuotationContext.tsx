import { createContext } from "react";
import { BestQuotationResponse } from "../../interfaces/quotation";

interface ContextProps {
  bestQuotations: BestQuotationResponse[];
  quotation?: BestQuotationResponse;

  getBestQuotations: () => Promise<void>;
  getQuotationBYId: (id: string) => Promise<void>;
}

export const QuotationContext = createContext({} as ContextProps);
