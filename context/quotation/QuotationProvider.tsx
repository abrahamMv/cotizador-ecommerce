import { FC, useReducer } from "react";
import { apiEcommerce } from "../../config";
import {
  PropsChildren,
  BestQuotationResponse,
  GetQuotationByUserResponse,
} from "../../interfaces";
import { QuotationContext, quotationReducer } from "./";

export interface QuotationState {
  bestQuotations: BestQuotationResponse[];
  quotation?: BestQuotationResponse;
  myQuotation?: GetQuotationByUserResponse[];
}

const Quotation_INITIAL_STATE: QuotationState = {
  bestQuotations: [],
  quotation: undefined,
  myQuotation: undefined,
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
      const { data } = await apiEcommerce.get<BestQuotationResponse>(
        `/quotation/${id}`
      );
      dispatch({ type: "Quotation - quotationSelected", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const getQuotationByUser = async (id: string) => {
    try {
      const { data } = await apiEcommerce.get(`/quotation/all/${id}`);
      dispatch({ type: "Quotation - quotationByUser", payload: data });
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
        getQuotationByUser,
      }}
    >
      {children}
    </QuotationContext.Provider>
  );
};
