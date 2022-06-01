import { NextRouter } from "next/router";
import { FC, useReducer } from "react";
import { ProductContext, productReducer } from ".";
import { apiEcommerce } from "../../config";
import { PropsChildren } from "../../interfaces";
import { GetBestQualificated } from "../../interfaces";
import { credentials } from "../../utils";

export interface ProductState {
  bestProducts: GetBestQualificated[];
  product?: GetBestQualificated;
}

const Products_INITIAL_STATE: ProductState = {
  bestProducts: [],
  product: undefined,
};

export const ProductsProvider: FC<PropsChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, Products_INITIAL_STATE);

  const getAllProducts = async () => {
    try {
      const { data } = await apiEcommerce.get<GetBestQualificated[]>(
        "/product/"
      );
      dispatch({ type: "Product - bestProducts", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  const getBestProductQualificated = async () => {
    try {
      const { data } = await apiEcommerce.get<GetBestQualificated[]>(
        "/product/best/qualification"
      );
      dispatch({ type: "Product - bestProducts", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const getProductById = async (id: string) => {
    try {
      const { data } = await apiEcommerce.get<GetBestQualificated>(
        `/product/${id}`
      );
      dispatch({ type: "Product - selectedProduct", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const qualifyProduct = async (
    id: string,
    redirect: NextRouter,
    score: number | null
  ) => {
    if (!credentials.getToken()) {
      redirect.push("/login");
    } else {
      try {
        const { data } = await apiEcommerce.put(`/product/qualify`, {
          product_id: id,
          score,
        });

        if (data.status) {
          getProductById(id);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <ProductContext.Provider
      value={{
        ...state,
        getAllProducts,
        getBestProductQualificated,
        getProductById,
        qualifyProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
