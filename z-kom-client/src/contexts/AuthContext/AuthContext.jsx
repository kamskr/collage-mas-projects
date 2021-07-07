import React, { createContext, useContext, useReducer } from "react";
import { initialUserState, initialUIState } from "./AuthContext.consts";
import { userReducer, uiReducer } from "./reducers";
import { useAuthActions } from "./hooks/useAuthActions";

export const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducer, initialUserState);
  const [uiState, uiDispatch] = useReducer(uiReducer, initialUIState);
  const { login, logout } = useAuthActions(userDispatch, uiDispatch);

  return (
    <AuthContext.Provider
      value={{
        user: userState,
        ui: uiState,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
