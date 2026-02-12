import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


import {Heading} from '../StyledComponents'
import { AiOutlineGlobal } from "react-icons/ai";
import { GiFullWoodBucket } from "react-icons/gi";
import { FiLayers } from "react-icons/fi";
import { ImPower } from "react-icons/im";
import { FaPaintBrush } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";

import './index.css'
const MyServicesItems = [
  {
    id: 0,
    name: 'Full Stack Engineering',
    brief:
      'Designing and building end-to-end web applications with clean architecture, scalable APIs, and production-ready frontends. From idea to deployment — done right.',
    icon: GiFullWoodBucket
  },
  {
    id: 1,
    name: 'AI & Automation Solutions',
    brief:
      'Creating intelligent workflows using LLMs, Generative AI, and automation tools like n8n to eliminate manual work and boost productivity at scale.',
    icon: ImPower
  },
  {
    id: 2,
    name: 'System & API Design',
    brief:
      'Architecting secure, scalable REST APIs and backend systems with Node.js, Express, Flask, MongoDB, and SQLite — built to handle real-world traffic.',
    icon: FiLayers
  },
  {
    id: 3,
    name: 'Modern Frontend Development',
    brief:
      'Crafting fast, responsive, and interactive UIs using React with a strong focus on UX, performance, and maintainable component architecture.',
    icon: AiOutlineGlobal
  },
  {
    id: 4,
    name: 'Performance & Optimization',
    brief:
      'Optimizing applications for speed, efficiency, and scalability — reducing load times, improving Lighthouse scores, and ensuring smooth user experiences.',
    icon: CiClock1
  },
  {
    id: 5,
    name: 'Product-Focused Development',
    brief:
      'Building with a product mindset — understanding business goals, user needs, and long-term scalability to deliver solutions that actually create impact.',
    icon: FaPaintBrush
  }
];


const MyServices = () => {
    useEffect(() => {
        AOS.init({
          duration: 3000,
          once: true,   
        })
      }, [])
    return (
        <div id="what i do" className='my-service-container'>
        <Heading>How I Can Help</Heading> <hr className="second-line " />
        <ul className="my-service-ul">
            {MyServicesItems.map((each, index) => {
                const Icon = each.icon
                return (
                <li className="my-service-li" key={each.id}       data-aos="fade-up"
                data-aos-delay={index * 100}>
                    <p className="service-icon" ><Icon /></p>
                    <h1 className="service-name">{each.name}</h1>
                    <p className="service-brief">{each.brief}</p>
                </li>
                )
            })}
        </ul>
    </div>
    )
}


export default MyServices