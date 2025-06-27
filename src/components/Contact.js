import React from 'react';

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="contact-list">
        <div className="contact-item">
          <span role="img" aria-label="Email">📧</span>
          <a href="mailto:arkbarua16@gmail.com">arkbarua16@gmail.com</a>
        </div>
        <div className="contact-item">
          <span role="img" aria-label="Phone">📱</span>
          <a href="tel:+919064933940">+91 9064933940</a>
        </div>
        <div className="contact-item">
          {/* LinkedIn SVG Icon */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#0A66C2" style={{marginRight: '0.4rem', verticalAlign: 'middle'}} xmlns="http://www.w3.org/2000/svg" aria-label="LinkedIn">
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2v4.5h-3v-9h3v1.22c.41-.72 1.39-1.22 2.5-1.22 1.93 0 3.5 1.57 3.5 3.5v5.5z"/>
          </svg>
          <a href="https://www.linkedin.com/in/arkbarua" target="_blank" rel="noreferrer">
            LinkedIn Profile
          </a>
        </div>
        <div className="contact-item">
          {/* GitHub SVG Icon */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#181717" style={{marginRight: '0.4rem', verticalAlign: 'middle'}} xmlns="http://www.w3.org/2000/svg" aria-label="GitHub">
            <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.589 8.199-6.085 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <a href="https://github.com/Pro5765" target="_blank" rel="noreferrer">
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}