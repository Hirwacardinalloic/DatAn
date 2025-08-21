import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter} from "react-icons/fa";
import { motion } from 'framer-motion'
import './home.css'
import Myimage from "./landingImage";
const Home = ()=>{
    return(
        <section id="home">
            <motion.div className="hero"
                        initial={{opacity: 0, y:100}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:1}}>
                <h1 className='hero-text'>Hello, I&apos;m Hirwa 👋.</h1>
                <p className="hero-text-me">I&apos;m a Data Analytics</p>
                <p className="hero-about">Data enthusiast committed to analyzing and visualizing information to uncover trends and support strategic decisions.</p>
                <div className="socials">
                  <a href="https://github.com/Hirwacardinalloic" target="_blank" className="social-icons github" rel="noreferrer"><FiGithub /></a>
                  <a href="https://www.linkedin.com/in/cardinal-loic-hirwa-48502b242/" target="_blank" className="social-icons linkedin" rel="noreferrer"><FaLinkedinIn/></a>
                  <a href="https://x.com/loicard" target="_blank" className="social-icons twitter" rel="noreferrer"><FaXTwitter/></a>
                </div>
            </motion.div>
            <motion.div className="image-home-page"
                        initial={{opacity: 0, y:-100}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:1}}>
                <Myimage/>
            </motion.div>
        </section>
    )
}
export default Home