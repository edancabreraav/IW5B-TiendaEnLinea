import { useContext, useState } from "react";
import { cartContext } from "../context/cartContext";

function CartItem({ image, price, title, quantity, addToCart }) {
    return (
        <li>
    <img src={image} />
    <div>
      <strong>{title}</strong> - ${price}
    </div>
    <footer>
      <small>Cantidad:{quantity}</small>
      <button onClick={addToCart}>+</button>
    </footer>
  </li>
    )
}

export default function Cart() {
  const { cart, clearCart, addToCart } = useContext(cartContext);



  return (
    <div>
      <aside className="cart">
        <ul>
            {cart.map(product =>(
                <CartItem key={product.id}
                addToCart={()=>addToCart(product)}
                {...product}/>
            ))}
        </ul>
        <button onClick={clearCart}>Limpiar carrito</button>
      </aside>
    </div>
  );
}