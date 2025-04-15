import { useState, useEffect } from 'react'
import axios from 'axios'

import {Heading} from '../StyledComponents'
import {LoaderWrapper, LoaderContainer, Dot} from '../StyledComponents'
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
    <div id="my projects" className='project-container'>
        <Heading>Here are the projects I've worked on</Heading> <hr className='second-line' />
        {projects.length === 0 ?  
            <div className='loader'>     
                    <LoaderWrapper>
                        <LoaderContainer>
                            <Dot delay="0s" />
                            <Dot delay="0.2s" />
                            <Dot delay="0.4s" />
                            <Dot delay="0.6s" />
                        </LoaderContainer>
                    </LoaderWrapper>
            </div>
        :         
        <ul className='projects-ul-container'>
            {projects.map((each, index) => (
                <li className='project-li' key={each.id}>              
                    <h1 className='project-title'>{each.title}</h1>
                    <p className='project-description'>{each.description}</p>
                    {(projects.length - 1 )!== index &&  <p className='project-description'>Username: rahul, Password: rahul@2021</p>}
                    <a href={each.live_link} target="_black" rel='noopener noreferrer' className='anchor-element'>
                    <div className='hover-overlay'>
                        Click To View    
                    </div>
                    </a>
                </li>
            ))}
 </ul>}

    </div>
    )
}

export default Project