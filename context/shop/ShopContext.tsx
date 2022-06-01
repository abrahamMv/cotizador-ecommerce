import { createContext } from "react";
import { dataUpdateShop, shopData } from "../../interfaces";

interface ContextProps {
  property: boolean;

  createShop: (body: shopData) => Promise<void>;
  deleteShop: (id: string) => Promise<void>;
  getShopById: (id: string) => Promise<void>;
  getAllShops: () => Promise<void>;
  updateShop: (body: dataUpdateShop) => Promise<void>;
}

export const ShopContext = createContext({} as ContextProps);
