import { useContext, useState } from "react";
import { productContext } from "../context/productContext";

export default function ShirtForm() {
    const {setShowAddProductModal, products, setProducts} = useContext(productContext)

    const [newProduct, setNewProduct] = useState({
        title:'',
        image:'',
        description:'',
        price:''
    })

    const handleChange = (e) => {
        const { id, value } = e.target;
        setNewProduct({
          ...newProduct,
          [id]: value
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault(); // Prevenir recarga de página
        setProducts([...products, { ...newProduct, id: products.length + 1 }]);
        setShowAddProductModal(false); // Cierra el modal
      };

  return (
    <div className="modal">
      <div className="form-container">
      <button onClick={()=> setShowAddProductModal(false)}>x</button>
        <form onSubmit={handleSubmit}>
          <h2>Añadir producto</h2>
          <div className="input-group">
            <label htmlFor="title">Nombre del producto</label>
            <input
              type="text"
              id="title"
              onChange={handleChange}
              value={newProduct.title}
              placeholder="Ingresa el nombre del producto"
            />
            <label htmlFor="image">URL de la imagen</label>
            <input
              type="text"
              id="image"
              onChange={handleChange}
              value={newProduct.image}
              placeholder="Ingresa el la URL del producto"
            />
            <label htmlFor="description">Descripción del producto</label>
            <input
              type="text"
              id="description"
              onChange={handleChange}
              value={newProduct.description}
              placeholder="Ingresa una descripción del producto"
            />
            <label htmlFor="price">Precio</label>
            <input
              type="number"
              id="price"
              onChange={handleChange}
              value={newProduct.price}
              placeholder="Ingresa el precio del producto"
            />
          </div>
          <button type="submit">Agregar producto</button>
        </form>
      </div>
    </div>
  );
}