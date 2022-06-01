import { FC, useReducer } from "react";
import { ProductContext, productReducer } from ".";
import { apiEcommerce } from "../../config";
import { PropsChildren } from "../../interfaces";
import { GetBestQualificated } from "../../interfaces";

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
  return (
    <ProductContext.Provider
      value={{
        ...state,
        getBestProductQualificated,
        getProductById,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
