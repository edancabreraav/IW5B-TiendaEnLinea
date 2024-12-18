import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Productos Disponibles</h2>
      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button>Agregar al Carrito</button>
            </li>
          ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </ul>
    </div>
  );
};

export default ProductList;