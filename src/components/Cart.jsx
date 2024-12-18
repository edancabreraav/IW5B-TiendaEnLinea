import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import "../css/cart.css";

import { ExitIcon, DeleteIcon } from "./Icons";

function CartItem({ image, price, title, quantity, addToCart, removeFromCart }) {
  return (
    <li>
      <img src={image} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <small>Cantidad: {quantity}</small>
        <button onClick={addToCart} className="btn-add">+</button>
      </footer>
      <button onClick={removeFromCart} className="btn-remove"><DeleteIcon/></button>
    </li>
  );
}

export default function Cart() {
  const { cart, clearCart, addToCart, isOpen, setIsOpen, removeFromCart} = useContext(cartContext);

  const subtotal = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

  return (
    <div>
      <aside className={`cart ${isOpen ? "open" : ""}`}>
        <div className="cart-header">
          <button onClick={() => setIsOpen(false)}><ExitIcon/></button>
        </div>
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
        <button onClick={clearCart} className="btn-clean">Limpiar carrito <DeleteIcon/></button>
        
        <div className="subtotal">
          <p>Subtotal </p>
          <p className="precio">${subtotal}</p>
        </div>
        <button className="btn-pagar">Pagar</button>
      </aside>
    </div>
  );
}