import { FC, useReducer } from "react";
import { apiEcommerce } from "../../config";
import { PropsChildren } from "../../interfaces";
import { BestQuotationResponse } from "../../interfaces/quotation";
import { QuotationContext, quotationReducer } from "./";

export interface QuotationState {
  bestQuotations: BestQuotationResponse[];
  quotation?: BestQuotationResponse;
}

const Quotation_INITIAL_STATE: QuotationState = {
  bestQuotations: [],
  quotation: undefined,
};

export const QuotationProvider: FC<PropsChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(
    quotationReducer,
    Quotation_INITIAL_STATE
  );

  const getBestQuotations = async () => {
    try {
      const { data } = await apiEcommerce.get<BestQuotationResponse[]>(
        "/quotation/most/famous"
      );
      dispatch({ type: "Quotation - bestQuotations", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  const getQuotationBYId = async (id: string) => {
    try {
      const { data } = await apiEcommerce.get(`/quotation/${id}`);
      dispatch({ type: "Quotation - quotationSelected", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <QuotationContext.Provider
      value={{
        ...state,
        getBestQuotations,
        getQuotationBYId,
      }}
    >
      {children}
    </QuotationContext.Provider>
  );
};
