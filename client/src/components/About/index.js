import { Element } from 'react-scroll';

import {Heading} from '../StyledComponents';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import AnimatedCounter from '../AnimatedCounter';
import './index.css';

const About = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/files/Vignesh Bk Resume.pdf';
    document.body.appendChild(link);
    link.download = 'Vignesh Bk Resume.pdf';
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Element name="about">
      <div className="about-container">
        <Heading>Know Me Better</Heading> <hr className="second-line " />
        <br />
        <div className="flex-container">
          <div className="about-paragraph-container">
            <p className="about">
              I’m a Full-Stack Developer and Software Development Instructor who builds scalable, production-ready applications and trains developers to do the same. With hands-on experience in MERN, Python, REST APIs, databases, payments, and AI-powered workflows, I focus on creating systems that are clean, fast, and built to scale.
              <span style={{ display: 'block', marginBottom: '10px' }} />
              Beyond building products, I’ve mentored and trained developers across frontend, backend, and Generative AI, helping them ship real-world applications with confidence. Self-driven, detail-oriented, and always evolving—I build with purpose, clarity, and impact.
            </p>
            <button
              onClick={handleDownload}
              type="button"
              className="download-cv-btn"
            >
              <FaCloudDownloadAlt className="download-icon" />
              Download My CV
            </button>
          </div>
        <div className="specialized-in-container">
          <ul className="specialized-in-ul">

            <li className="specialized-track">
              <div className="track-header">
                <h4 className="track-title">Full Stack Engineering</h4>
              </div>
              <div className="dna-track">
                <span className="dna-fill full"></span>
              </div>
              <p className="track-desc">
                End-to-end systems using MERN & Flask with clean architecture and scalability.
              </p>
            </li>

            <li className="specialized-track">
              <div className="track-header">
                <h4 className="track-title">AI & Automation Solutions</h4>
              </div>
              <div className="dna-track">
                <span className="dna-fill ai"></span>
              </div>
              <p className="track-desc">
                Intelligent workflows using LLMs, Generative AI, and n8n automations.
              </p>
            </li>

            <li className="specialized-track">
              <div className="track-header">
                <h4 className="track-title">API & System Design</h4>
              </div>
              <div className="dna-track">
                <span className="dna-fill api"></span>
              </div>
              <p className="track-desc">
                Secure, scalable REST APIs with Node.js, Flask, MongoDB, and SQLite.
              </p>
            </li>

          </ul>
        </div>


        </div>
        <ul className="why-me-ul">
          <li className="why-me-li">
            <span className="why-me-span">
              {' '}
              <AnimatedCounter end={3100} />{' '}
            </span>{' '}
            <br />
            Hours of Coding
          </li>
          <li className="why-me-li">
            <span className="why-me-span">
              {' '}
              <AnimatedCounter end={4000} />{' '}
            </span>{' '}
            <br />
            Problems Solved
          </li>
          <li className="why-me-li">
            <span className="why-me-span">
              {' '}
              <AnimatedCounter end={8} />{' '}
            </span>{' '}
            <br />
            Certified Courses
          </li>
        </ul>
      </div>
    </Element>
  );
};

export default About;
