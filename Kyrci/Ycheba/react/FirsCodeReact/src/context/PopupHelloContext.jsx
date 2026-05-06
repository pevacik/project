import { createContext, useState } from "react";

export const PopupHelloContext = createContext();

export function PopupHelloProvider({ children }) {
  const [notification, setNotification] = useState('');

  return (
    <PopupHelloContext.Provider value={{ notification, setNotification }}>
      {children}
    </PopupHelloContext.Provider>
  );
}
