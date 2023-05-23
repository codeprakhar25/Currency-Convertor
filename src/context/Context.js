/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-lone-blocks */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable eol-last */
/* eslint-disable semi */


import React from "react";
import { useState } from "react";
const Context = React.createContext();
  const ContextProvider = ({ children }) => {
let searchdata = [];

  return (
    <Context.Provider value={{ searchdata}}>{children}</Context.Provider>
  );
};


export {ContextProvider,Context}
