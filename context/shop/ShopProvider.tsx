import { FC, useReducer } from "react";
import { apiEcommerce } from "../../config";
import {
  CreateShopResponse,
  dataUpdateShop,
  GetAllShopsResponse,
  GetShopResponse,
  PropsChildren,
  shopData,
} from "../../interfaces";
import { ShopContext, ShopReducer } from "./";

export interface ShopState {
  property: boolean;
}

const Shop_INITIAL_STATE: ShopState = {
  property: false,
};

export const ShopProvider: FC<PropsChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(ShopReducer, Shop_INITIAL_STATE);

  const createShop = async (body: shopData) => {
    try {
      const res = await apiEcommerce.post<CreateShopResponse>(
        "/shop/create",
        body
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteShop = async (id: string) => {
    try {
      const res = await apiEcommerce.delete(`/shop/delete/${id}`);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const getShopById = async (id: string) => {
    try {
      const res = await apiEcommerce.get<GetShopResponse>(`/shop/${id}`);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllShops = async () => {
    try {
      const res = await apiEcommerce.get<GetAllShopsResponse>("/shop");
    } catch (error) {
      console.log(error);
    }
  };
  const updateShop = async (body: dataUpdateShop) => {
    try {
      const res = await apiEcommerce.put(`/shop/update`, body);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ShopContext.Provider
      value={{
        ...state,
        createShop,
        deleteShop,
        getShopById,
        getAllShops,
        updateShop,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
