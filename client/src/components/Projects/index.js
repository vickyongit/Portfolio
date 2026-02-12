import { useState, useEffect } from 'react';

import { Heading } from '../StyledComponents';
import {
  LoaderWrapper,
  LoaderContainer,
  Dot
} from '../StyledComponents';

import './index.css';

/* ===============================
   PROJECTS DATA (LOCAL)
   =============================== */
const projectsData = [
  {
    id: 1,
    title: 'Nutlio',
    category: 'Full Stack / E-commerce',
    description:
      'Nutlio is a modern full-stack e-commerce platform designed to make purchasing premium dry fruits simple, secure, and seamless. It features role-based access, smooth checkout flow, and Razorpay integration for secure online payments.',
    tech_stack:
      'React.js, Node.js, Express.js, SQLite, JavaScript, Razorpay Payment Gateway, Google Authentication, JWT, REST APIs',
    live_link: 'https://nutliofoods.com',
    github_link: 'https://github.com/yourusername/nutlio',
    images: [
      'https://res.cloudinary.com/dwz6ouiqm/image/upload/v1770807489/Screenshot_2026-02-11_162445_eaiciw.png',
      'https://res.cloudinary.com/dwz6ouiqm/image/upload/v1770807488/Screenshot_2026-02-11_162509_lukfvc.png',
      'https://res.cloudinary.com/dwz6ouiqm/image/upload/v1770807488/Screenshot_2026-02-11_162741_jypxrw.png'
    ]
  },

  {
    id: 2,
    title: 'NxtWatch',
    category: 'Full Stack / Media',
    description:
      'A YouTube-inspired video streaming platform with dark/light themes, JWT-based authentication, protected routes, and smooth navigation using React Router.',
    tech_stack:
      'React.js, Node.js, Express.js, SQLite, JavaScript, JWT Authentication, React Router, Theme Management',
    live_link: 'https://nxtwatchbyvicky.ccbp.tech',
    github_link: 'git_hub_link',
    images: [
      'https://res.cloudinary.com/dwz6ouiqm/image/upload/v1770808234/Screenshot_2026-02-11_163919_y18sdn.png',
      'https://res.cloudinary.com/dwz6ouiqm/image/upload/v1770808233/Screenshot_2026-02-11_163951_dgkf8x.png',
      'https://res.cloudinary.com/dwz6ouiqm/image/upload/v1770808234/Screenshot_2026-02-11_164016_h2ks0d.png',
      'https://res.cloudinary.com/dwz6ouiqm/image/upload/v1770808235/Screenshot_2026-02-11_164003_zi4pvk.png'
    ]
  },

  {
    id: 4,
    title: 'Trend Setter',
    category: 'Full Stack / E-commerce',
    description:
      'A modern shopping application with real-time product listings, cart functionality, and responsive design across all devices.',
    tech_stack:
      'React.js, Node.js, Express.js, SQLite, JavaScript, JWT Authentication, REST APIs, Responsive Design',
    live_link: 'https://trendsetterviki.ccbp.tech',
    github_link: 'git_hub_link',
    images: [
      'https://res.cloudinary.com/dwz6ouiqm/image/upload/v1770808592/Screenshot_2026-02-11_164455_pqsmaj.png',
      'https://res.cloudinary.com/dwz6ouiqm/image/upload/v1770808590/Screenshot_2026-02-11_164547_wjjaet.png',
      'https://res.cloudinary.com/dwz6ouiqm/image/upload/v1770808591/Screenshot_2026-02-11_164601_hysf6g.png',
      'https://res.cloudinary.com/dwz6ouiqm/image/upload/v1770808590/Screenshot_2026-02-11_164616_va2riv.png'
    ]
  },

  {
    id: 5,
    title: 'Portfolio Website',
    category: 'Personal Branding',
    description:
      'An interactive single-page portfolio showcasing my projects, skills, and services with smooth scroll animations and a premium UI.',
    tech_stack:
      'React.js, JavaScript, CSS Animations, Responsive Design, UI/UX Design, Cloudinary',
    live_link: 'https://vigneshbk-portfolio.vercel.app',
    github_link: 'git_hub_link',
    images: [
      'https://res.cloudinary.com/dwz6ouiqm/image/upload/v1770806726/Screenshot_2026-02-11_161140_pfgskp.png',
      'https://res.cloudinary.com/dwz6ouiqm/image/upload/v1770806725/Screenshot_2026-02-11_161222_jzxpv9.png',
      'https://res.cloudinary.com/dwz6ouiqm/image/upload/v1770806726/Screenshot_2026-02-11_161241_qbbntz.png'
    ]
  }
];


const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 Track active image per project (by id)
  const [activeImages, setActiveImages] = useState({});

  /* ===============================
     FAKE LOADING (SMOOTH UX)
     =============================== */
  useEffect(() => {
    const timer = setTimeout(() => {
      setProjects(projectsData);

      // initialize carousel index for each project
      const initialIndexes = {};
      projectsData.forEach(p => {
        initialIndexes[p.id] = 0;
      });
      setActiveImages(initialIndexes);

      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  /* ===============================
     AUTO-PLAY CAROUSELS
     =============================== */
  useEffect(() => {
    if (!projects.length) return;

    const interval = setInterval(() => {
      setActiveImages(prev => {
        const updated = { ...prev };

        projects.forEach(project => {
          const current = prev[project.id] || 0;
          const total = project.images.length;
          updated[project.id] =
            current === total - 1 ? 0 : current + 1;
        });

        return updated;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [projects]);

  if (loading) {
    return (
      <div className="project-container">
        <LoaderWrapper>
          <LoaderContainer>
            <Dot delay="0s" />
            <Dot delay="0.2s" />
            <Dot delay="0.4s" />
            <Dot delay="0.6s" />
          </LoaderContainer>
        </LoaderWrapper>
      </div>
    );
  }

  return (
    <div id="my-projects" className="project-container">
      <Heading>My Developments</Heading>
      <hr className="second-line" />
      <br />

      {/* ===============================
         PROJECTS LOOP
         =============================== */}
      {projects.map(project => (
        <div className="project-showcase" key={project.id}>
          {/* IMAGE CAROUSEL */}
          <div className="project-carousel">
            <img
              src={project.images[activeImages[project.id]]}
              alt={project.title}
              className="carousel-image"
            />

            <div className="carousel-dots">
              {project.images.map((_, index) => (
                <span
                  key={index}
                  className={`carousel-dot ${
                    index === activeImages[project.id] ? 'active' : ''
                  }`}
                  onClick={() =>
                    setActiveImages(prev => ({
                      ...prev,
                      [project.id]: index
                    }))
                  }
                />
              ))}
            </div>
          </div>

          {/* CONTENT */}
          <div className="project-content">
            <h2 className="project-title">{project.title}</h2>

            <span className="project-category">
              {project.category}
            </span>

            <p className="project-description">
              {project.description}
            </p>

            <p className="project-tech">
              <strong>Tech Stack:</strong> {project.tech_stack}
            </p>

            <div className="project-actions">
              <a
                href={project.live_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>

              <a
                href={project.github_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      ))}
      <hr className="second-line" />
    </div>
  );
};

export default Projects;
