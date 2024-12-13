import {products} from '../mocks/products.json'

export default function ShirtCard() {
  return (
    <div>
      <ul>
        {
          products.map(product => (
            <li key={product.id}>
              <img src={product.image} alt={product.description} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button>
                  Añadir al carrito
                </button>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
