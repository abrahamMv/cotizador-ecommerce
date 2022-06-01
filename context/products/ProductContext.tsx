import { NextRouter } from "next/router";
import { createContext } from "react";
import { GetBestQualificated } from "../../interfaces";

interface ContextProps {
  bestProducts: GetBestQualificated[];
  product?: GetBestQualificated;

  getBestProductQualificated: () => Promise<void>;
  getProductById: (id: string) => Promise<void>;
  qualifyProduct: (
    id: string,
    redirect: NextRouter,
    score: number | null
  ) => Promise<void>;
}

export const ProductContext = createContext({} as ContextProps);
