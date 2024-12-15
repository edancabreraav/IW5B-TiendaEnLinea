import { useContext } from "react";
import { productContext } from "../context/productContext";

export default function ShirtForm() {
    const {setShowAddProductModal} = useContext(productContext)

  return (
    <div className="modal">
      <div className="form-container">
      <button onClick={()=> setShowAddProductModal(false)}>x</button>
        <form>
          <h2>Añadir producto</h2>
          <div className="input-group">
            <label htmlFor="title">Nombre del producto</label>
            <input
              type="text"
              id="title"
              //onChange={handleChange}
              //value={''}
              placeholder="Ingresa el nombre del producto"
            />
            <label htmlFor="image">URL de la imagen</label>
            <input
              type="text"
              id="image"
              //onChange={handleChange}
              //value={''}
              placeholder="Ingresa el la URL del producto"
            />
            <label htmlFor="description">Descripción del producto</label>
            <input
              type="text"
              id="description"
              //onChange={handleChange}
              //value={''}
              placeholder="Ingresa una descripción del producto"
            />
            <label htmlFor="price">Precio</label>
            <input
              type="number"
              id="price"
              //onChange={handleChange}
              //value={''}
              placeholder="Ingresa el precio del producto"
            />
          </div>
          <button type="submit">Agregar producto</button>
        </form>
      </div>
    </div>
  );
}
