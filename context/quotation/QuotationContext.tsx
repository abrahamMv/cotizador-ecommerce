import { NextRouter } from "next/router";
import { createContext } from "react";
import { BestQuotationResponse } from "../../interfaces/quotation";

interface ContextProps {
  bestQuotations: BestQuotationResponse[];
  quotation?: BestQuotationResponse;

  getUserQuotations: () => Promise<void>;
  getBestQuotations: () => Promise<void>;
  getQuotationBYId: (id: string) => Promise<void>;
  likeQuotation: (id: string, redirect: NextRouter) => Promise<void>;
}

export const QuotationContext = createContext({} as ContextProps);
