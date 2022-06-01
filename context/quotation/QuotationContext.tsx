import { NextRouter } from "next/router";
import { createContext } from "react";
import { CreateQuotation } from "../../interfaces/quotation";
import {
  BestQuotationResponse,
  GetQuotationByUserResponse,
} from "../../interfaces/";

interface ContextProps {
  bestQuotations: BestQuotationResponse[];
  quotation?: BestQuotationResponse;
  myQuotation?: GetQuotationByUserResponse[];

  createQuotation: (values: CreateQuotation) => Promise<void>;
  getAllQuotations: () => Promise<void>;
  getBestQuotations: () => Promise<void>;
  getQuotationBYId: (id: string) => Promise<void>;
  getQuotationByUser: (id: string) => Promise<void>;
  likeQuotation: (id: string, redirect: NextRouter) => Promise<void>;
  addToQuotation: (id: string, shopProductId: string) => Promise<void>;
}

export const QuotationContext = createContext({} as ContextProps);
