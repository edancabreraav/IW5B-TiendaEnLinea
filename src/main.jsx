import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { UserProvider } from "./context/userContext.jsx";
import { ProductProvider } from "./context/productContext.jsx";
import { CartProvider } from "./context/cartContext.jsx";

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <CartProvider>
    <ProductProvider>
      <App />
    </ProductProvider>
    </CartProvider>
  </UserProvider>
);
