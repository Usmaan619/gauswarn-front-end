import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [cart, setCart] = useState([]);
  

  return (
    <UserContext.Provider
      value={{ feedbackOpen, setFeedbackOpen, cart, setCart }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useCartContext };
