import { FC, useReducer } from "react";
import { PropsChildren } from "../../interfaces";
import { QuotationContext, quotationReducer } from "./";

export interface QuotationState {
  property: boolean;
}

const Quotation_INITIAL_STATE: QuotationState = {
  property: false,
};

export const QuotationProvider: FC<PropsChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(
    quotationReducer,
    Quotation_INITIAL_STATE
  );
  return (
    <QuotationContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </QuotationContext.Provider>
  );
};
