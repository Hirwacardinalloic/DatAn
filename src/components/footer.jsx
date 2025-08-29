import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer =()=>{
    return (
        <footer className="socials" style={{position:"relative"}}>
                <a href="https://github.com/Hirwacardinalloic" target="_blank" className="social-icons github" rel="noreferrer"><FiGithub /></a>
                <a href="https://www.linkedin.com/in/cardinal-loic-hirwa-48502b242/" target="_blank" className="social-icons linkedin" rel="noreferrer"><FaLinkedinIn/></a>
                <a href="https://x.com/loicard" target="_blank" className="social-icons Twitter" rel="noreferrer"><FaXTwitter /></a>
                <a style={{position:"absolute", top: "20%", left:"70%", fontSize:"1.25em"}} className="back" href="#home">back to top</a>
        </footer>
    )
}
export default Footer