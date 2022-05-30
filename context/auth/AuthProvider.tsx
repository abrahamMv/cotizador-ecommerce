import { FC, useReducer } from "react";
import { apiEcommerce } from "../../config";
import {
  authUser,
  dataUser,
  LoginResponse,
  PropsChildren,
  UserRegister,
} from "../../interfaces";
import { AuthContext, authReducer } from "./";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { credentials } from "../../utils";
export interface AuthState {
  property: boolean;
}

const AUTH_INITIAL_STATE: AuthState = {
  property: false,
};

export const AuthProvider: FC<PropsChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);
  const router = useRouter();

  const createUser = async (data: dataUser) => {
    try {
      const res = await apiEcommerce.post<UserRegister>("/register", data);
      router.push("/login");
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.msg,
      });
    }
  };

  const login = async (body: authUser) => {
    try {
      const { data } = await apiEcommerce.post<LoginResponse>("/login", body);
      credentials._store(data);
      router.push("/");
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.msg,
      });
    }
  };
  return (
    <AuthContext.Provider
      value={{
        ...state,
        createUser,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
