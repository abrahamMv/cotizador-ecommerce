import { createContext } from "react";

interface ContextProps {
  property: boolean;
}

export const AuthContext = createContext({} as ContextProps);
