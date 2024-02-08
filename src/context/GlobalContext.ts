import React from "react";
import { GlobalContext } from "./GlobalProvider";

function useGlobalContext() {
  const context = React.useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("Context not allowed to be used outside the provider.");
  }
  return context;
}

export default useGlobalContext;
