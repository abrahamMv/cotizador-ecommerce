import { createContext } from "react";

interface ContextProps {
  property: boolean;
}

export const QuotationContext = createContext({} as ContextProps);
