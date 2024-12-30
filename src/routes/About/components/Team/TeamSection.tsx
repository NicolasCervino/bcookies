import teamPhoto from '@assets/team-members.jpg';
import './TeamSection.css';

export const TeamSection = () => {
    const teamMembers = [
        {
            name: 'Kelly Adriana R. Gorrin',
            role: 'Fundadora & Chef Pastelera',
            description:
                'Apasionada por la repostería desde joven transformó su hobby en una exitosa empresa de cookies artesanales.',
        },
        {
            name: 'Sergio Ariel Bonnet',
            role: 'Fundador & Director Comercial',
            description:
                'Con su experiencia en negocios, Sergio ayudó a transformar la pasión de Kelly en una marca reconocida en Buenos Aires.',
        },
    ];

    return (
        <div className="section-container">
            <div className="team-content">
                <div className="team-intro">
                    <div className="team-intro-text">
                        <h2>Un Equipo Apasionado</h2>
                        <p>
                            Somos Kelly y Sergio, dos apasionados por la repostería que decidimos
                            convertir nuestro amor por las cookies en algo más que un hobby.
                        </p>
                        <p>
                            Juntos, combinamos la creatividad culinaria con la visión empresarial
                            para traerte las mejores cookies artesanales de Buenos Aires.
                        </p>
                        <div className="team-members-grid">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="team-member">
                                    <div className="team-member-info">
                                        <h3>{member.name}</h3>
                                        <span className="member-role">{member.role}</span>
                                        <p>{member.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="team-photo-container">
                        <img src={teamPhoto} alt="Equipo BCookies" className="team-photo" />
                    </div>
                </div>
            </div>
        </div>
    );
};
