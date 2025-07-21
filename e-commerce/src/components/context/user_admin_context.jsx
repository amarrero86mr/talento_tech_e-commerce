import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loggedUser, setLoggedUser] = useState(null);
  const [ isAuth, setIsAuth ] = useState(null);

  const fetchUsers = async () => {
    try {
      const res = await fetch("https://686c5d2214219674dcc7dbb6.mockapi.io/products/user");
      if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error("Error en peticion de Usuarios:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Función para iniciar sesión comparando con los usuarios existentes (admin, juan)
  const login = (name) => {
    const foundUser = users.find(user => user.name === name);
    if (foundUser) {
      setLoggedUser(foundUser);
      if (foundUser.admin == true) {
        setIsAuth(true);
      }
      return true;
    } else {
      return false;
    }
  };

  return (
    <UserContext.Provider value={{ users, loggedUser, login , isAuth}}>
      {children}
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