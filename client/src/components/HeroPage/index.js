import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import "./index.css";

const HomePage = () => (
    <div id="home" className="hero-page">
        <div className="hero-intro-container">
            <div className="info-container">
                <p className="greeting">
                    Hello, I am
                </p>
            <h1 className="hero-name">Vignesh Bk</h1>
            <hr className="line" />
            <p className="job-role">Full Stack Developer (MERN) | AI & Automation Enthusiast</p>
            <hr className="line" />
            <div className="social-media-icons-container">
                <a href="mailto:vignesh.bkprof@gmail.com" target="_blank" rel="noopener noreferrer">
                    <BiLogoGmail className="social-icons-email" />
                </a>
                <a href="https://www.linkedin.com/in/vignesh-bk" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icons-linkedin" />
                </a>
            </div>
            </div>
            <div className="image-container">
            <img src="https://res.cloudinary.com/dwz6ouiqm/image/upload/v1743776565/1000155581_j383fy.jpg" alt="hero img" className="hero-img"/>
            <hr className="line" />
            </div> 
        </div>
    </div>
);

export default HomePage;
