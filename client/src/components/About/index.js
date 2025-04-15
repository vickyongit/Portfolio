import { Element } from 'react-scroll';

import {Heading} from '../StyledComponents';
import { FaCloudDownloadAlt } from 'react-icons/fa';

import AnimatedProgressBar from '../AnimatedProgressBar';
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
              <li className="specialized-in-li">
                <p className="specialized-in-txt">Full Stack Web Develeper</p>
                <AnimatedProgressBar percent={95} color="grey" />
              </li>

              <li className="specialized-in-li">
                <p className="specialized-in-txt">Mern Stack Expertise</p>
                <AnimatedProgressBar percent={95} color="grey" />
              </li>
              <li className="specialized-in-li">
                <p className="specialized-in-txt">Web Designer</p>
                <AnimatedProgressBar percent={68} color="grey" />
              </li>
            </ul>
          </div>
        </div>
        <ul className="why-me-ul">
          <li className="why-me-li">
            <span className="why-me-span">
              {' '}
              <AnimatedCounter end={1000} />{' '}
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
