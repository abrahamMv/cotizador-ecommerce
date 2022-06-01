import { FC, useReducer } from "react";
import { ProductContext, productReducer } from ".";
import { PropsChildren } from "../../interfaces";

export interface ProductState {
  property: boolean;
}

const Products_INITIAL_STATE: ProductState = {
  property: false,
};

export const ProductsProvider: FC<PropsChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, Products_INITIAL_STATE);
  return (
    <ProductContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
