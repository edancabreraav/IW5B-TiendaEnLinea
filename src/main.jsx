import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { UserProvider } from "./context/userContext.jsx";
import { ProductProvider } from "./context/productContext.jsx";

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <ProductProvider>
      <App />
    </ProductProvider>
  </UserProvider>
);
