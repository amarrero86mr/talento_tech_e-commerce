import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ Children }) => {

  const [user, setUser] = useState([]);

  const fetchUser = async () => {
    try {
      const res = await fetch('https://686c5d2214219674dcc7dbb6.mockapi.io/products/user');

      if (!res.ok) {
        throw new Error(`Error HTTP: ${res.status}`);
      }

      const data = await res.json();
      setUser(data);
      console.log(data)
    } catch (error) {
      console.error("Error en peticion de Productos:", error);
    }
    
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, fetchUser }}>
      {Children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext debe usarse dentro de un UserProvider");
  }
  return context;
};

export default UserProvider;