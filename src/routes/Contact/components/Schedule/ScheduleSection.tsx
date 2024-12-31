import './ScheduleSection.css';

const ScheduleSection = ({ schedule }: { schedule: { days: string; hours: string }[] }) => {
    return (
        <div className="schedule-card">
            <div className="schedule-section">
                <h2>Horarios de Atención</h2>
                <p className="schedule-description">
                    Encontranos en nuestros puntos de venta o coordiná tu pedido por WhatsApp.
                    Seguinos en Instagram para saber en tiempo real dónde estamos. ¡Hacemos envíos!
                </p>
                <div className="schedule-items-container">
                    {schedule.map((time, index) => (
                        <div key={index} className="schedule-item">
                            <span className="days">{time.days}</span>
                            <span className="hours">{time.hours}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ScheduleSection;
