const Architecture = () => {
  return (
    <section className="architecture">
      <h2>How This AI Portfolio Works</h2>

      <div className="architecture-grid">

        <div className="architecture-card">
          <h3>Frontend</h3>
          <p>React + TypeScript with modular component structure.</p>
        </div>

        <div className="architecture-card">
          <h3>Backend</h3>
          <p>FastAPI handling API routing, prompt injection and response control.</p>
        </div>

        <div className="architecture-card">
          <h3>Database</h3>
          <p>PostgreSQL for structured resume & future conversation storage.</p>
        </div>

        <div className="architecture-card">
          <h3>AI Engine</h3>
          <p>OpenRouter API with dynamic system prompt for contextual responses.</p>
        </div>

      </div>
    </section>
  );
};

export default Architecture;