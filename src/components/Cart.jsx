import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import "../css/cart.css";

function CartItem({ image, price, title, quantity, addToCart, removeFromCart }) {
  return (
    <li>
      <img src={image} />
      <div>
      <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <small>Cantidad: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
      <button onClick={removeFromCart}>Eliminar</button>
    </li>
  );
}

export default function Cart() {
  const { cart, clearCart, addToCart, isOpen, setIsOpen, removeFromCart} = useContext(cartContext);

  const subtotal = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

  return (
    <div>
      <aside className={`cart ${isOpen ? "open" : ""}`}>
        <button onClick={() => setIsOpen(false)}>Ocultar</button>
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              removeFromCart={() => removeFromCart(product)}
              {...product}
            />
          ))}
        </ul>
        <button onClick={clearCart}>Limpiar carrito</button>
        
        <div className="subtotal">
          <p>Subtotal </p>
          <p className="precio">${subtotal}</p>
        </div>
        <button className="btn-pagar">Pagar</button>
      </aside>
    </div>
  );
}