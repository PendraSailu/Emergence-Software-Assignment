const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>

      <div className="project-grid">

        <div className="project-card">
          <h3>FitPulse – Health Anomaly Detection</h3>
          <p><strong>Tech:</strong> Python, Pandas, TSFresh, Scikit-learn</p>
          <ul>
            <li>Time-series feature engineering</li>
            <li>Anomaly detection using clustering</li>
          </ul>
        </div>

        <div className="project-card">
          <h3>Physical Quantity Converter</h3>
          <p><strong>Tech:</strong> Node.js, Express, React</p>
          <ul>
            <li>Dynamic unit conversion API</li>
            <li>Scalable backend architecture</li>
          </ul>
        </div>

        <div className="project-card">
          <h3>AI-Powered Resume Portfolio</h3>
          <p><strong>Tech:</strong> React, FastAPI, PostgreSQL, OpenRouter</p>
          <ul>
            <li>Context-aware AI chatbot</li>
            <li>Secure backend prompt handling</li>
          </ul>
        </div>

        <div className="project-card">
          <h3>Face Filter Application</h3>
          <p><strong>Tech:</strong> OpenCV, MediaPipe</p>
          <ul>
            <li>Real-time facial landmark detection</li>
            <li>Custom visual filters</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Projects;