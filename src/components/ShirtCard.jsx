import { useContext } from "react";
import { userContext } from "../context/userContext";
import ShirtForm from "./ShirtForm";
import { productContext } from "../context/productContext";

export default function ShirtCard() {
  const { user } = useContext(userContext)
  const {showAddProductModal, products, setProducts} = useContext(productContext)

  const deleteProduct = (id) => setProducts(products.filter((product)=>product.id !==id))
  

  return (
    
    <div className="products-list">
      {products.map((product) => (
        <div key={product.id} className="card-content">
          <img src={product.image} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
          {user.role === 'admin'?(
            <div>
            <button>Modificar</button>
            <button onClick={() => deleteProduct(product.id)}>Dar de baja</button>
            </div>
            
            ):(<button>Añadir al carrito</button>)}
        </div>
      ))}
      {showAddProductModal && <ShirtForm/>}
    </div>
  );
}
