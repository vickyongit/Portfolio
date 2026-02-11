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
              Started with curiosity, evolved through discipline, and shaped by
              code. I began my journey driven by the desire to build — not just
              interfaces, but seamless digital experiences. Over time, I've
              grown into a full stack developer with strong roots in the MERN
              stack and Python. On the front end, I craft interactive,
              responsive UIs using React. On the back end, I design scalable
              APIs with Node.js and Express, and work with MongoDB or SQLite for
              efficient data handling. Python adds flexibility to my toolkit —
              for scripting, backend logic, or solving complex problems with
              clarity.Self-taught, self-driven, and always improving. I write
              code to build, to learn, and to grow. This is just the beginning.
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
