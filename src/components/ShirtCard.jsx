import { useContext, useState } from "react";
import ShirtForm from "./ShirtForm";
import Cart from "../components/Cart"
import { userContext } from "../context/userContext";
import { productContext } from "../context/productContext";
import { cartContext } from "../context/cartContext";

export default function ShirtCard() {
  const { user, setShowLoginModal } = useContext(userContext);
  const { showAddProductModal, products, setProducts, deleteProduct } = useContext(productContext);
  const {cart, addToCart, removeFromCart, setIsOpen} = useContext(cartContext)

  //---Lógica para edición---
  const [editingProductId, setEditingProductId] = useState(null);
  const [editedProduct, setEditedProduct] = useState({
    title: "",
    image: "",
    description: "",
    price: "",
  });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({
      ...editedProduct,
      [name]: value,
    });
  };

  const startEditing = (product) => {
    setEditingProductId(product.id);
    setEditedProduct({
      title: product.title,
      image: product.image,
      description: product.description,
      price: product.price,
    });
  };

  // Función para guardar los cambios
  const saveEdit = (productId) => {
    setProducts(
      products.map((product) =>
        product.id === productId
          ? { ...product, ...editedProduct }
          : product
      )
    );
    setEditingProductId(null);
  };
  //---Fin de lógica para edición---

  return (
    <div>
    <h2>Catálogo</h2>
    <div className="products-list">
      {products.map((product) => (
        <div key={product.id} className="card-content">
          {editingProductId !== product.id ? (
            <div>
              <img src={product.image} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
              {/*Mostrar los botones de acuerdo al rol del usuario*/}
              {user.role === "admin" ? (
                <div>
                  <button onClick={() => startEditing(product)}>Modificar</button>
                  <button onClick={() => deleteProduct(product.id)}>Dar de baja</button>
                </div>
              ) : (
                <div>
                {/*Verificar si el producto ya existe en el carrito*/}
                {cart.some((item) => item.id === product.id) ? (
                  <button onClick={() => {removeFromCart(product)}}>
                    Eliminar del carrito
                  </button>
                ) : (
                  //Añadir si el producto no existe en el carrito
                  <button
                    onClick={() => {
                      if (user.username !== null) {
                        setIsOpen(true);
                        addToCart(product); // Añade el producto al carrito
                      } else {
                        setShowLoginModal(true);
                      }
                    }}
                  >
                    Añadir al carrito
                  </button>
                )}
              </div>
              )}
            </div>
          ) : (
            <div>
              <input 
                type="text" 
                name="title"
                maxLength={30}
                placeholder="Nombre del producto"
                value={editedProduct.title}
                onChange={handleEditChange}
               />
              <input 
                type="text"
                name="image" 
                placeholder="URL del producto"
                value={editedProduct.image}
                onChange={handleEditChange}
              />
              <input 
                type="text"
                name="description"
                maxLength={60}
                placeholder="Descripción del producto" 
                value={editedProduct.description}
                onChange={handleEditChange}
              />
              <input 
                type="number"
                name="price"
                placeholder="Precio"
                value={editedProduct.price}
                onChange={handleEditChange} 
              />
              <button onClick={() => saveEdit(product.id)}>Guardar</button>
              <button onClick={() => setEditingProductId(null)}>
                Cancelar
              </button>
            </div>
          )}
        </div>
      ))}
      {/*Mostrar El formulario para añadir productos*/}
      {showAddProductModal && <ShirtForm />}
      <Cart/>
    </div>
    </div>
  );
}
