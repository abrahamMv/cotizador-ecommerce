import { createContext } from "react";

interface ContextProps {
  property: boolean;
}

export const ProductContext = createContext({} as ContextProps);
