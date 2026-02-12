import { Heading } from '../StyledComponents'
import './index.css'

const skillsData = [
    {
    category: 'AI & Automation',
    skills: [
      { name: 'Generative AI', logo: 'https://img.icons8.com/fluency/96/artificial-intelligence.png' },
      { name: 'LLMs', logo: 'https://img.icons8.com/fluency/96/brain.png' },
      { name: 'Prompt Engineering', logo: 'https://img.icons8.com/fluency/96/chatbot.png' },
      { name: 'n8n Automation', logo: 'https://img.icons8.com/fluency/96/workflow.png' },
      { name: 'Vibe Coding', logo: 'https://img.icons8.com/fluency/96/code.png' }
    ]
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'JavaScript (ES6+)', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' }
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' }
      
    ]
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'SQLite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' }
    ]
  },
  {
    category: 'Core Concepts',
    skills: [
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'OOPS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' }
    ]
  },
  {
    category: 'DevOps & Deployment',
    skills: [
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Git & GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }
    ]
  }
]

const Skills = () => (
  <div id="skills" className="skills-container">
    <Heading>Skills</Heading>
    <hr className="second-line" />

    {skillsData.map(section => (
      <div key={section.category} className="skills-section">
        <h3 className="skills-title">{section.category}</h3>

        <ul className="skills-ul">
          {section.skills.map(skill => (
            <li key={skill.name} className="skill-li">
              <div className="skill-card">
                <img src={skill.logo} alt={skill.name} className="skill-logo" />
                <p className="skill-name">{skill.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
)

export default Skills
