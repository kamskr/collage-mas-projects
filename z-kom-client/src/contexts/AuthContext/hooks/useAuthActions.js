import { useState, useEffect } from "react";
import { api } from "../../../api";
import {
  LOADING_UI,
  CLEAR_ERRORS,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
} from "../AuthContext.consts";

export const useAuthActions = (userDispatch, uiDispatch) => {
  const [authContextLoaded, setAuthContextLoaded] = useState(false);

  useEffect(() => {
    checkIfAuthenticated();
  }, []);

  const checkIfAuthenticated = async () => {
    if (localStorage.accessToken) {
      console.log("checking");
      await api.setAuthToken(localStorage.accessToken);
      userDispatch({ type: SET_AUTHENTICATED });
    }
    setTimeout(() => setAuthContextLoaded(true), 0);
  };

  const finalizeLogin = (token) => {
    const tokenString = `Bearer ${token}`;
    localStorage.setItem("accessToken", tokenString);
    api.setAuthToken(tokenString);
    userDispatch({ type: SET_AUTHENTICATED });
    uiDispatch({ type: CLEAR_ERRORS });
  };

  const login = async (username, password) => {
    try {
      uiDispatch({ type: LOADING_UI });

      const res = await api.login({ login: username, password: password });
      console.log(res);

      if (res.data.accessToken) {
        finalizeLogin(res.data.accessToken);
      }
    } catch (err) {
      console.log(err);
      setTimeout(() => uiDispatch({ type: CLEAR_ERRORS }), 5000);
    }
  };

  const logout = async () => {
    try {
      await api.logout();
      localStorage.removeItem("accessToken");
      api.clearAuthToken();

      userDispatch({
        type: SET_UNAUTHENTICATED,
      });
      uiDispatch({ type: CLEAR_ERRORS });
    } catch (err) {
      console.log(err);
    }
  };

  return {
    authContextLoaded,
    login,
    logout,
  };
};
