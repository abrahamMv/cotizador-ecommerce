import { FC, useReducer } from "react";
import { apiEcommerce } from "../../config";
import { PropsChildren } from "../../interfaces";
import { BestQuotationResponse } from "../../interfaces/quotation";
import { QuotationContext, quotationReducer } from "./";

import { NextRouter } from "next/router";
import { credentials } from "../../utils";

export interface QuotationState {
  bestQuotations: BestQuotationResponse[];
  quotation?: BestQuotationResponse;
  quotationByUser: any;
}

const Quotation_INITIAL_STATE: QuotationState = {
  bestQuotations: [],
  quotation: undefined,
  quotationByUser: [],
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

  const likeQuotation = async (id: string, redirect: NextRouter) => {
    if (!credentials.getToken()) {
      redirect.push("/login");
    } else {
      try {
        const { data } = await apiEcommerce.put(`/quotation/like/${id}`);

        if (data.status) {
          getQuotationBYId(id);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getUserQuotations = async () => {
    try {
      const { data } = await apiEcommerce.get(
        `/quotation/all/${credentials.getUser()?.id}`
      );

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <QuotationContext.Provider
      value={{
        ...state,
        getUserQuotations,
        getBestQuotations,
        getQuotationBYId,
        likeQuotation,
      }}
    >
      {children}
    </QuotationContext.Provider>
  );
};
