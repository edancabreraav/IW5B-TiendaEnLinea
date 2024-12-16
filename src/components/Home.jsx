import { Link } from 'react-router-dom';
import '../css/home.css';

function Home() {
    return (
        <div className="container">
            {/* Sección Hero */}
            <section className="hero-section">
                <h1>Bienvenidos a Hero-Shop</h1>
                <p>
                    Tu tienda favorita de artículos de anime y videojuegos en Tepic, Nayarit. 
                    ¡Descubre los mejores productos de la cultura popular!
                </p>
                <Link to="/catalogo" className="hero-button">Ver Catálogo</Link>
            </section>

            {/* Banner */}
            <section className="banner-section">
                <img 
                    src="/images/banner.jpg" 
                    alt="Hero-Shop Promociones" 
                    className="banner-image" 
                />
            </section>

            {/* Sección de Preguntas Frecuentes */}
            <section className="faq-section">
                <h2>Preguntas Frecuentes</h2>
                <div className="faq-container">
                    <div className="faq-item">
                        <h3>¿Quiénes somos?</h3>
                        <p>HeroShop vende una amplia gama de ropa urbana y casual, desde camisetas y sudaderas hasta pantalones y accesorios.</p>
                    </div>
                    <div className="faq-item">
                        <h3>¿HeroShop ofrece tallas para todas las personas?</h3>
                        <p>Sí, HeroShop se esfuerza por ser inclusivo y ofrece una amplia gama de tallas para adaptarse a diversos tipos de cuerpo y estilos de vida.</p>
                    </div>
                    <div className="faq-item">
                        <h3>¿Qué tipo de promociones o descuentos ofrece HeroShop?</h3>
                        <p>HeroShop ofrece descuentos especiales en determinadas temporadas del año, como ventas de temporada, descuentos para estudiantes y promociones exclusivas para clientes leales.</p>
                    </div>
                    <div className="faq-item">
                        <h3>¿Qué diferencia a HeroShop de otras tiendas de ropa?</h3>
                        <p>HeroShop se destaca por su enfoque en la moda urbana, ofreciendo una selección única de prendas y accesorios que reflejan las últimas tendencias de la calle y la cultura pop.</p>
                    </div>
                    <div className="faq-item">
                        <h3>¿HeroShop tiene alguna política de devolución o cambio?</h3>
                        <p>Sí, HeroShop ofrece una política de devolución y cambio flexible, permitiendo a los clientes devolver o cambiar artículos dentro de un plazo determinado, siempre y cuando cumplan con las condiciones establecidas.</p>
                    </div>
                </div>
            </section>

            {/* Ubicación de la tienda */}
            <section className="location-section">
                <h2>Nuestra Ubicación</h2>
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1856.0481837457608!2d-104.90924776118366!3d21.503944990575125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842736f1bbc629c5%3A0xf8dafe44d09a6c83!2sIndependencia%2C%2063136%20Tepic%2C%20Nay.!5e0!3m2!1ses!2smx!4v1716756965468!5m2!1ses!2smx"
                        width="100%"
                        height="350"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Ubicación de Hero-Shop"
                    ></iframe>
                </div>
            </section>
        </div>
    );
}

export default Home;
