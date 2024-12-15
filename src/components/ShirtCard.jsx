import { useContext } from "react";
import { userContext } from "../context/userContext";
import { products } from "../mocks/products.json";
import ShirtForm from "./ShirtForm";
import { productContext } from "../context/productContext";

export default function ShirtCard() {
  const { user } = useContext(userContext)
  const {showAddProductModal} = useContext(productContext)

  return (
    
    <div className="products-list">
      {products.map((proudct) => (
        <div className="card-content">
          <img src={proudct.image} />
          <h3>{proudct.title}</h3>
          <p>{proudct.description}</p>
          <p>${proudct.price}</p>
          {user.role === 'admin'?(
            <div>
            <button>Modificar</button>
            <button>Dar de baja</button>
            </div>
            
            ):(<button>Añadir al carrito</button>)}
        </div>
      ))}
      {showAddProductModal && <ShirtForm/>}
    </div>
  );
}
