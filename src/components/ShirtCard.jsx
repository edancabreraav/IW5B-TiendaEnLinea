import { products } from "../mocks/products.json";

export default function ShirtCard() {
  return (
    <div className="products-list">
      {products.map((proudct) => (
        <div className="card-content">
          <img src={proudct.image} />
          <h3>{proudct.title}</h3>
          <p>{proudct.description}</p>
          <p>{proudct.price}</p>
          <button>Añadir al carrito</button>
        </div>
      ))}
    </div>
  );
}
