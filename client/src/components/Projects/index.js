import { useState, useEffect } from 'react'
import axios from 'axios'

import Heading from '../StyledComponents'
import './index.css'

const Project = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const url = 'https://vigneshbk-api-portfolio.onrender.com/projects';
        axios.get(url)
            .then((res) => {
                setProjects(res.data);
            })
            .catch((err) => {
                console.error('Error on fetching the projects:', err);
            });
    }, []);
        

    return (
    <div id="my portfolio" className='project-container'>
        <Heading>Here are the projects I've worked on</Heading> <hr className='second-line' />
        <ul className='projects-ul-container'>
            {projects.map(each => (
                <li className='project-li' key={each.id}>              
                    <h1 className='project-title'>{each.title}</h1>
                    <p className='project-description'>{each.description}</p>
                    <p className='project-description'>Username: rahul, Password: rahul@2021</p>
                    <a href={each.live_link} target="_black" rel='noopener noreferrer' className='anchor-element'>
                    <div className='hover-overlay'>
                        Click To View    
                    </div>
                    </a>
                </li>
            ))}
        </ul>
    </div>
    )
}

export default Project