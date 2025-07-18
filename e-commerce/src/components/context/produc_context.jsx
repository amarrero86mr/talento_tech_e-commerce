import { createContext, useState, useEffect, useContext } from 'react';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  const fetchProductos = async () => {
    try {
      const res = await fetch('https://686c5d2214219674dcc7dbb6.mockapi.io/products/products');

      if (!res.ok) {
        throw new Error(`Error HTTP: ${res.status}`);
      }

      const data = await res.json();
      setProductos(data);
    } catch (error) {
      console.error("Error en peticion de Productos:", error);
    }
  };

  const editProducts = async ( id, producto ) => {
    try {
      const res = await fetch(`https://686c5d2214219674dcc7dbb6.mockapi.io/products/products/${id}`, {
        method: 'PUT', // or PATCH
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(producto)
      })

      if (res.ok) {
        await res.json();
        fetchProductos();
      }
      } catch (error) {
        console.error("Error en edicion de Producto Id:", id,  error);
      }
    }


useEffect(() => {
  fetchProductos();
}, []);

return (
  <ProductContext.Provider value={{ productos, fetchProductos, editProducts }}>
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