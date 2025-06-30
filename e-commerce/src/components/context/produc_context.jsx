import { createContext, useState, useEffect, useContext } from 'react';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
    
  const fetchProductos = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');

      if (!res.ok) {
        throw new Error(`Error HTTP: ${res.status}`);
      }

      const data = await res.json();
      setProductos(data);
    } catch (error) {
      console.error("Error en peticion de Productos:", error);
    }
  };

  
  useEffect(() => {
    fetchProductos();
  }, []);

  return (
    <ProductContext.Provider value={{ productos, fetchProductos }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext debe usarse dentro de un ProductProvider");
  }
  return context;
};

export default ProductProvider;