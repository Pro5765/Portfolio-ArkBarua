import React from 'react';

export default function Footer() {
  return (
    <footer>
      <p style={{ marginBottom: "1rem" }}>
        © 2025 Ark Barua
      </p>
      <div className="footer-links" style={{ display: "flex", justifyContent: "center", gap: "2rem", alignItems: "center" }}>
        {/* Email */}
        <a
          href="mailto:arkbarua16@gmail.com"
          title="Email"
          style={{ color: "#fff", display: "flex", alignItems: "center", gap: "0.4rem" }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg" aria-label="Email">
            <path d="M20 4H4C2.897 4 2 4.897 2 6V18C2 19.103 2.897 20 4 20H20C21.103 20 22 19.103 22 18V6C22 4.897 21.103 4 20 4ZM20 6L12 13L4 6H20ZM4 18V8.236L11.293 15.293C11.683 15.683 12.317 15.683 12.707 15.293L20 8.236V18H4Z"/>
          </svg>
          Email
        </a>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/arkbarua"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
          style={{ color: "#fff", display: "flex", alignItems: "center", gap: "0.4rem" }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg" aria-label="LinkedIn">
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2v4.5h-3v-9h3v1.22c.41-.72 1.39-1.22 2.5-1.22 1.93 0 3.5 1.57 3.5 3.5v5.5z"/>
          </svg>
          LinkedIn
        </a>
        {/* GitHub */}
        <a
          href="https://github.com/Pro5765"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
          style={{ color: "#fff", display: "flex", alignItems: "center", gap: "0.4rem" }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg" aria-label="GitHub">
            <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.589 8.199-6.085 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
      </div>
    </footer>
  );
}