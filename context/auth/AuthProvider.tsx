import { FC, useReducer } from "react";
import { PropsChildren } from "../../interfaces";
import { AuthContext, authReducer } from "./";

export interface AuthState {
  property: boolean;
}

const AUTH_INITIAL_STATE: AuthState = {
  property: false,
};

export const AuthProvider: FC<PropsChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
