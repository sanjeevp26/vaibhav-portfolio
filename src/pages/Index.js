import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="Portfolio website of Dr. Vaibhav Garg, Collegiate Assistant Professor at Virginia Tech."
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Welcome</Link>
          </h2>
          <p>
            Exploring the intersection of NLP, social media, and AI for social good.
          </p>
        </div>
      </header>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          gap: '2rem',
        }}
      >
        {/* Left: Text Content */}
        <div style={{ flex: 1, minWidth: '280px' }}>
          <p>
            This is me trying to give a serious look to my students when they think they’re secretly
            clicking me LOL
          </p>
          <p>
            Welcome to my academic portfolio. I’m a Collegiate Assistant Professor in Computer
            Science at Virginia Tech’s Innovation Campus, where I focus on building NLP systems to
            address challenges related to online discourse, safety, and support communities.
          </p>
          <p>
            You can learn more <Link to="/about">about me</Link>, view my{' '}
            <Link to="/resume">resume</Link>, check out my <Link to="/projects">research</Link>, or{' '}
            <Link to="/contact">get in touch</Link>.
          </p>
          <p>
            {'Source code available '}
            <a
              href="https://github.com/Vaibhav-g/rvaibhavg"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            .
          </p>
        </div>

        {/* Right: Profile Image */}
        <div style={{ flexShrink: 0 }}>
          <img
            src="/images/vaibhav-right.png"
            alt="Dr. Vaibhav Garg"
            style={{
              width: '280px',
              borderRadius: '12px',
              objectFit: 'cover',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          />
        </div>
      </div>
    </article>
  </Main>
);

export default Index;
