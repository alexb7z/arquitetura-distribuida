import "./App.css";

function App() {
  return (
    <div className="container">

      <header className="hero">
        <h1>HealthCare+</h1>
        <p>Cuidando da sua saúde e bem-estar</p>
      </header>

      <section className="services">

        <div className="card">
          <img src="https://images.unsplash.com/photo-1581595219315-a187dd40c322" alt="Checkup"/>
          <h2>Check-up Médico</h2>
          <p>Monitoramento da saúde com exames e acompanhamento profissional.</p>
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061" alt="Nutrição"/>
          <h2>Nutrição</h2>
          <p>Alimentação equilibrada para manter energia e qualidade de vida.</p>
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438" alt="Exercício"/>
          <h2>Atividade Física</h2>
          <p>Exercícios regulares fortalecem o corpo e previnem doenças.</p>
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773" alt="Saúde mental"/>
          <h2>Saúde Mental</h2>
          <p>Equilíbrio emocional é essencial para o bem-estar geral.</p>
        </div>

      </section>

      <section className="about">
        <h2>Por que cuidar da saúde?</h2>
        <p>
          Pequenas mudanças no estilo de vida podem melhorar significativamente
          a saúde física e mental. Alimentação equilibrada, atividade física
          e acompanhamento médico são fundamentais para uma vida saudável.
        </p>
      </section>

      <footer>
        <p>Projeto acadêmico sobre Saúde e Bem-Estar</p>
      </footer>

    </div>
  );
}

export default App;