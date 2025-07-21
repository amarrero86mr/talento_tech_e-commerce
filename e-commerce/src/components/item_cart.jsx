import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { useProductContext } from "./context/produc_context";
import { useCartContext } from "./context/cart_context";


const ItemCart = ({id,cant}) => {
    const { addCart, removeIdCart, deleteCart } = useCartContext();
    const { productos } = useProductContext();
    const [itemCart, setItemCant ] = useState(productos.find(item => item.id == id)) 
    
   /*  useEffect(()=>{
        setItemCant(product.find(item => item.id == id))
    },[]) */

    return (
        <Container>
            <h3>{itemCart.title}</h3>
            <img width={80} src={itemCart.image} alt={itemCart.title} />
            
            <div>
                <button>+</button>
                <input type="number" value={cant} onChange={()=>{}}/>
                <button>-</button>
            </div>
            
        </Container>
    )
};

export default ItemCart;