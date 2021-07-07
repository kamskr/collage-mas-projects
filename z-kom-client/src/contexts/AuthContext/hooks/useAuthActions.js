import { useState, useEffect } from "react";
import { api } from "../../../api";
import {
  SET_ERRORS,
  LOADING_UI,
  CLEAR_ERRORS,
  SET_UNAUTHENTICATED,
} from "../AuthContext.consts";

export const useAuthActions = (userDispatch, uiDispatch) => {
  const [authContextLoaded, setAuthContextLoaded] = useState(false);

  useEffect(() => {
    checkIfAuthenticated();
  }, []);

  const checkIfAuthenticated = async () => {
    if (localStorage.token) {
      await api.setAuthToken(localStorage.token);
    }
    setTimeout(() => setAuthContextLoaded(true), 0);
  };

  const finalizeLogin = (token) => {
    const tokenString = `Bearer ${token}`;
    localStorage.setItem("token", tokenString);
    api.setAuthToken(tokenString);
    uiDispatch({ type: CLEAR_ERRORS });
  };

  const login = async (username, password) => {
    try {
      uiDispatch({ type: LOADING_UI });

      const res = await api.login({ login: username, password: password });

      if (res.data.token) {
        finalizeLogin(res.data.token);
      }
    } catch (err) {
      uiDispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      setTimeout(() => uiDispatch({ type: CLEAR_ERRORS }), 5000);
    }
  };

  const logout = async () => {
    try {
      localStorage.removeItem("token");
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
