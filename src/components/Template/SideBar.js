import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env;

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="Professor Profile" />
      </Link>
      <header>
        <h2>Dr. Vaibhav Garg</h2>
        <p>
          <a href="mailto:vaibhavg@vt.edu">vaibhavg@vt.edu</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I’m Dr. Vaibhav Garg. I am a Collegiate Assistant Professor in Computer Science at{' '}
        <a
          href="https://innovationcampus.vt.edu/"
          target="_blank"
          rel="noreferrer"
        >
          Virginia Tech’s Innovation Campus
        </a>
        . I earned my Ph.D. from NC State University in 2024. My research focuses on building NLP
        systems for social good, especially analyzing social media narratives in hate speech,
        inciting speech, and mental health support.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Dr. Vaibhav Garg <Link to="/">vaibhavg.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
