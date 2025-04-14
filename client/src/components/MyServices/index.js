import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


import Heading from '../StyledComponents'
import { AiOutlineGlobal } from "react-icons/ai";
import { GiFullWoodBucket } from "react-icons/gi";
import { FiLayers } from "react-icons/fi";
import { ImPower } from "react-icons/im";
import { FaPaintBrush } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";

import './index.css'

const MyServicesItems = [
    {id: 0,name: 'Web Development', brief: "Crafting scalable web experiences — not just websites, From design to deployment, I deliver epic, high-performance solutions built to grow with your brand.", icon: AiOutlineGlobal},
    {id: 1, name: 'Full Stack', brief: 'I deliver complete, scalable web solutions — blending sleek, responsive design with powerful, production-ready backend systems. One place. End-to-end.', icon: GiFullWoodBucket},
    {id: 2, name: 'MERN Stack', brief: 'Built with the power of MERN — I craft full-stack solutions that are fast, flexible, and future-ready. From UI to database, it all happens here.', icon: FiLayers},
    {id: 3, name: 'Web Design' ,brief: 'I craft visually striking web pages with user-focused designs and creative ideas that leave a lasting impression — turning vision into pixel-perfect reality', icon: FaPaintBrush},
    {id: 4, name: "Performance Optimization", brief: "I fine-tune every line of code to ensure blazing-fast load times, smooth interactions, and top-tier performance across devices. Speed isn’t optional — it's built in.", icon: ImPower},
    {id: 5, name: 'Timely Delivery', brief: 'I value your time as much as your vision. Expect precise, efficient delivery — always on schedule, never in compromise.', icon: CiClock1}
]

const MyServices = () => {
    useEffect(() => {
        AOS.init({
          duration: 3000,
          once: true,   
        })
      }, [])
    return (
        <div className='my-service-container'>
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