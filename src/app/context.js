"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [test, setTest] = useState(false);
  return <AppContext.Provider value={{ test }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
