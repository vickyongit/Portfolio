import Header from '../Header'
import HeroPage from '../HeroPage'
import About from '../About'
import MyServices from '../MyServices'
import Projects from '../Projects'
import Contact from '../Contact'
import Skills from '../Skills'
import useHashScroll from '../Hooks/useHashScroll'

import './index.css'

const Main = () => {
    useHashScroll(['/', 'about', 'my-portfolio', 'my-service', 'skills', 'contact'])
    return (
        <div className='main-container'>
            <Header />
            <div id="/"><HeroPage /></div>
            <div id="about"><About /></div>
            <div id="my-portfolio"><Projects /></div>
            <div id="skills"><Skills /> </div>
            <div id="my-service"><MyServices  /></div>
            <div id="contact"><Contact /></div>
        </div>
    )
}


export default Main