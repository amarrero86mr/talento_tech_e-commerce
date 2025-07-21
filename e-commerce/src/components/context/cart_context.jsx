import { createContext, useState, useEffect, useContext } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState({});
    
  const addCart = (id) => {
   setCarrito( data => ({
      ...data, [id]: (data[id] || 0) + 1
    }));
    // console.log(carrito)
  }

  const removeIdCart =(id)=> {

    setCarrito(...carrito, carrito.shift(product => product.id == id))
  }

  const deleteCart = () => { setCarrito([])}

  return (
    <CartContext.Provider value={{ carrito, addCart, removeIdCart, deleteCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext debe usarse dentro de un CartProvider");
  }
  return context;
};

export default CartProvider;