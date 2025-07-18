import { useState } from "react"
import { Container } from "react-bootstrap"


const ItemCart = () => {
    const [itemCant, setItemCant ] = useState(1)

    return (
        <Container>
            <h3>{item.title}</h3>
            <img src={item.image} alt={item.title} />
            
            <div>
                <button>+</button>
                <input type="number" value={itemCant}/>
                <button>-</button>
            </div>
            
        </Container>
    )
};

export default ItemCart;