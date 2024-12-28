import aboutImage from '@assets/about-image.jpg';
import './About.css';

const About = () => {
    const values = [
        {
            icon: '🎨',
            title: 'Creatividad',
            description:
                'Innovamos constantemente para crear sabores únicos y experiencias memorables',
        },
        {
            icon: '⭐',
            title: 'Calidad',
            description: 'Utilizamos los mejores ingredientes para garantizar el mejor sabor',
        },
        {
            icon: '💝',
            title: 'Pasión',
            description: 'Cada cookie está hecha con amor y dedicación para nuestros clientes',
        },
    ];

    return (
        <div className="about-container">
            <div className="about-header">
                <h1>Nuestra Historia</h1>
                <p>
                    Descubre cómo nació BCookies y por qué nos apasiona crear las mejores cookies
                    artesanales de Buenos Aires
                </p>
            </div>

            <div className="about-content">
                <div className="about-image">
                    <img src={aboutImage} alt="BCookies - Nuestra Historia" />
                </div>
                <div className="about-text">
                    <h2>De Pasión a Profesión</h2>
                    <p>
                        BCookies nació de un sueño y una pasión por la repostería. Lo que comenzó
                        como un hobby en nuestra cocina se transformó en una marca reconocida por
                        sus deliciosas cookies artesanales.
                    </p>
                    <p>
                        Cada receta es el resultado de meses de prueba y error, buscando la
                        combinación perfecta de sabores y texturas. Nos enorgullece usar
                        ingredientes de primera calidad y técnicas artesanales para crear cookies
                        únicas.
                    </p>
                    <p>
                        Hoy, BCookies es sinónimo de calidad y sabor en Buenos Aires, y seguimos
                        creciendo gracias al apoyo de nuestros fieles clientes que comparten nuestra
                        pasión por las cookies perfectas.
                    </p>
                </div>
            </div>

            <div className="about-values">
                <h2>Nuestros Valores</h2>
                <div className="values-grid">
                    {values.map((value, index) => (
                        <div key={index} className="value-card">
                            <div className="value-icon">{value.icon}</div>
                            <h3>{value.title}</h3>
                            <p>{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
