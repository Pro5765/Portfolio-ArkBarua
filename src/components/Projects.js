import React from "react";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      {/* AI Paragraph Summarizer */}
      <div className="project-card">
        <h3>AI Paragraph Summarizer</h3>
        <p>
          Created an AI Paragraph Summarizer using PHP and MySQL with a 100%
          success rate. Increased client revenue by 30% and achieved 95% user
          satisfaction.
        </p>
        <div className="project-links">
          <button
            className="project-repo-btn"
            onClick={() =>
              window.open(
                "https://github.com/Pro5765/AI-Paragraph-Summarizer",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            🔗 Repository
          </button>
        </div>
      </div>

      {/* Kangaroo Runner Game */}
      <div className="project-card">
        <h3>Kangaroo Runner Game</h3>
        <p>
          Unity-based 2D endless runner using reusable prefabs and Rigidbody2D
          physics. Increased gameplay engagement by 50%.
        </p>
        <div className="project-links">
          <button
            className="project-repo-btn"
            onClick={() =>
              window.open(
                "https://github.com/Pro5765/unity-web-game",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            🔗 Repository
          </button>
        </div>
      </div>

      {/* Mortgage Calculator */}
      <div className="project-card">
        <h3>Mortgage Calculator</h3>
        <p>
          Created a responsive mortgage calculator site. Increased client
          revenue by 20% with 95% user satisfaction.
        </p>
        <div className="project-links">
          <button
            className="project-repo-btn"
            onClick={() =>
              window.open(
                "https://github.com/Pro5765/mortgage-calculator",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            🔗 Repository
          </button>
          <button
            className="project-demo-btn"
            onClick={() =>
              window.open(
                "https://pro5765.github.io/Mortgage-Calculator/",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            🚀 Live Demo
          </button>
        </div>
      </div>

      {/* FocusFlow Pomodoro App */}
      <div className="project-card">
        <h3>FocusFlow – Pomodoro Timer Web App</h3>
        <p>
          A beautiful, responsive Pomodoro Timer with user registration, login,
          profile editing, dark/light mode, and session tracking — all powered
          by <strong>localStorage</strong>, no backend required.
        </p>
        <ul>
          <li>🔐 User Registration & Login</li>
          <li>🕒 Customizable Focus Timer</li>
          <li>📅 Session History Tracking</li>
          <li>🧑‍💼 Editable Profile with Avatar</li>
          <li>🌗 Dark/Light Mode Toggle</li>
        </ul>
        <div className="project-links">
          <button
            className="project-repo-btn"
            onClick={() =>
              window.open(
                "https://github.com/Pro5765/FocusFlow",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            🔗 Repository
          </button>
          <button
            className="project-demo-btn"
            onClick={() =>
              window.open(
                "https://focusflow-flax.vercel.app",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            🚀 Live Demo
          </button>
        </div>
      </div>

      {/* Online HTML Editor */}
      <div className="project-card">
        <h3>Online HTML Editor</h3>
        <p>
          A powerful real-time HTML/CSS/JS editor with live preview,
          file-saving, dark mode, CodeMirror syntax highlighting, and Bootstrap
          UI. Includes SweetAlert for beautiful popups and a responsive layout.
        </p>
        <ul>
          <li>⚡ Real-time preview with SweetAlert</li>
          <li>💾 Save as HTML/CSS/JS files</li>
          <li>🌙 Dark Mode Toggle</li>
          <li>🧠 CodeMirror for syntax highlighting</li>
          <li>📱 Fully Responsive using Bootstrap</li>
        </ul>
        <div className="project-links">
          <button
            className="project-repo-btn"
            onClick={() =>
              window.open(
                "https://github.com/Pro5765/Online-HTML-Editor",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            🔗 Repository
          </button>
          <button
            className="project-demo-btn"
            onClick={() =>
              window.open(
                "https://pro5765.github.io/Online-HTML-Editor",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            🚀 Live Demo
          </button>
        </div>
      </div>

      {/* Docker Task Manager */}
      <div className="project-card">
        <h3>Docker Task Manager</h3>
        <p>
          A modern, responsive task manager app for Docker operations, built
          using React, Node.js, and Material-UI. Includes real-time updates,
          error handling, and secure REST API.
        </p>
        <ul>
          <li>
            📋 Manage Docker tasks (Containers, Images, Networks, Volumes)
          </li>
          <li>⭐ Priority tags & completion tracking</li>
          <li>🧠 Built with React, Node.js, Material-UI</li>
          <li>🔒 Secured with Helmet, CORS, Rate Limiting</li>
          <li>🐳 Dockerized full-stack with Compose support</li>
        </ul>
        <div className="project-links">
          <button
            className="project-repo-btn"
            onClick={() =>
              window.open(
                "https://github.com/Pro5765/Docker-Task-Manager",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            🔗 Repository
          </button>
        </div>
      </div>

      {/* E-commerce Delivery Analytics Dashboard */}
      <div className="project-card">
        <h3>E-commerce Delivery Analytics Dashboard</h3>
        <p>
          A comprehensive dashboard built with Python, Dash, and Plotly to
          visualize and monitor e-commerce delivery performance in real-time.
          Offers advanced analytics, platform insights, and CSV-based dynamic
          data loading.
        </p>
        <ul>
          <li>📊 Real-time delivery & performance metrics</li>
          <li>📁 Upload CSVs for instant visualizations</li>
          <li>📉 Correlation & trend analysis tools</li>
          <li>🧠 Built with Dash, Plotly, and Pandas</li>
          <li>⚙️ Bat scripts for easy setup and launch (Windows)</li>
        </ul>
        <div className="project-links">
          <button
            className="project-repo-btn"
            onClick={() =>
              window.open(
                "https://github.com/Pro5765/Data-Science-Analysis-Dashboard",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            🔗 Repository
          </button>
        </div>
      </div>
    </section>
  );
}
