import React, { createContext, useContext, useState } from "react";

/**
 * PUBLIC_INTERFACE
 * TyreSizeContext keeps track of currently selected tyre size for UI filtering/persistence.
 */
const TyreSizeContext = createContext();

export function useTyreSize() {
  return useContext(TyreSizeContext);
}

// PUBLIC_INTERFACE
export function TyreSizeProvider({ children }) {
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <TyreSizeContext.Provider value={{ selectedSize, setSelectedSize }}>
      {children}
    </TyreSizeContext.Provider>
  );
}
