import { createContext } from "react";
import { authUser, dataUser } from "../../interfaces";

interface ContextProps {
  property: boolean;

  createUser: (data: dataUser) => Promise<void>;
  login: (data: authUser) => Promise<void>;
}

export const AuthContext = createContext({} as ContextProps);
