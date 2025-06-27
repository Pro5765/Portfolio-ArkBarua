import React from 'react';

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        <div>
          <h4>Frontend</h4>
          <ul>
            <li>HTML5, CSS3, JavaScript</li>
            <li>React, Angular, Vue</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div>
          <h4>Backend & Tools</h4>
          <ul>
            <li>PHP, SQLite</li>
            <li>Git, GitHub</li>
            <li>JIRA, Scrum, Agile</li>
            <li>CI/CD (basic), Unit Testing</li>
          </ul>
        </div>
        <div>
          <h4>Other</h4>
          <ul>
            <li>Chrome DevTools</li>
            <li>Languages: English, Hindi, Bengali</li>
          </ul>
        </div>
      </div>
    </section>
  );
}