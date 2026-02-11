import { useState, useEffect } from 'react';
import axios from 'axios';

import { Heading } from '../StyledComponents';
import {
  LoaderWrapper,
  LoaderContainer,
  Dot
} from '../StyledComponents';

import './index.css';

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const url = 'https://vigneshbk-api-portfolio.onrender.com/projects';
        const response = await axios.get(url);
        setProjects(response.data);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div id="my-projects" className="project-container">
      <Heading>Here are the projects I've worked on</Heading>
      <hr className="second-line" />

      {/* Loader */}
      {loading && (
        <div className="loader">
          <LoaderWrapper>
            <LoaderContainer>
              <Dot delay="0s" />
              <Dot delay="0.2s" />
              <Dot delay="0.4s" />
              <Dot delay="0.6s" />
            </LoaderContainer>
          </LoaderWrapper>
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <p className="error-text">
          Failed to load projects. Please try again later.
        </p>
      )}

      {/* Projects List */}
      {!loading && !error && (
        <ul className="projects-ul-container">
          {projects.map(project => (
            <li className="project-li" key={project.id}>
              <h2 className="project-title">{project.title}</h2>

              {project.category && (
                <span className="project-category">
                  {project.category}
                </span>
              )}

              <p className="project-description">
                {project.description}
              </p>

              <p className="project-tech">
                <strong>Tech Stack:</strong> {project.tech_stack}
              </p>

              <div className="project-links">
                {project.live_link && (
                  <a
                    href={project.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="anchor-element"
                  >
                    <div className="hover-overlay">
                      Live Demo
                    </div>
                  </a>
                )}

                {project.github_link && (
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="anchor-element secondary"
                  >
                    <div className="hover-overlay">
                      View Code
                    </div>
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Project;
