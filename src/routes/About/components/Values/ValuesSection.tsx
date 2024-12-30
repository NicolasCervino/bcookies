import './ValuesSection.css';

const ValuesSection = () => {
    const values = [
        {
            icon: '🎨',
            title: 'Creatividad',
            description:
                'Innovamos constantemente para crear sabores únicos y experiencias memorables',
            color: 'var(--color-accent)',
        },
        {
            icon: '⭐',
            title: 'Calidad',
            description: 'Utilizamos los mejores ingredientes para garantizar el mejor sabor',
            color: 'var(--color-primary)',
        },
        {
            icon: '💝',
            title: 'Pasión',
            description: 'Cada cookie está hecha con amor y dedicación para nuestros clientes',
            color: '#e74c3c',
        },
    ];

    return (
        <div className="section-container">
            <div className="section-header">
                <h2>Nuestros Valores</h2>
                <p>Los pilares que guían nuestro trabajo diario</p>
            </div>
            <div className="values-grid">
                {values.map((value, index) => (
                    <div key={index} className="value-card">
                        <div
                            className="value-icon-container"
                            style={{ backgroundColor: value.color }}
                        >
                            <span className="value-icon">{value.icon}</span>
                        </div>
                        <h3>{value.title}</h3>
                        <p>{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ValuesSection;
