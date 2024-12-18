import { useContext, useState } from "react";
import { productContext } from "../context/productContext";
import { ExitIcon } from "./Icons"

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
        e.preventDefault();
        setProducts([...products, { ...newProduct, id: products.length + 1 }]);
        setShowAddProductModal(false);
      };

  return (
    <div className="modal">
      <div className="form-container">
        <div className="form-header">
      <button onClick={()=> setShowAddProductModal(false)} 
      className="btn-closeModal"><ExitIcon/></button>
      </div>
        <form onSubmit={handleSubmit}>
          <h2>Añadir producto</h2>
          <div className="input-group">
            <label htmlFor="title">Nombre del producto</label>
            <input
              type="text"
              id="title"
              maxLength={40}
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
              maxLength={60}
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
          <button type="submit" className="btn-submit">Agregar producto</button>
        </form>
      </div>
    </div>
  );
}