import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import "./footer.css"

const Footer =()=>{
    return (
        <footer className="footer">
  <div className="socials">
    <a href="https://github.com/Hirwacardinalloic" target="_blank" className="social-icons github" rel="noreferrer"><FiGithub /></a>
    <a href="https://www.linkedin.com/in/cardinal-loic-hirwa-48502b242/" target="_blank" className="social-icons linkedin" rel="noreferrer"><FaLinkedinIn/></a>
    <a href="https://x.com/loicard" target="_blank" className="social-icons twitter" rel="noreferrer"><FaXTwitter /></a>
  </div>
  <a className="back-to-top" href="#home">
  <FaArrowUp />
</a>
</footer>

    )
}
export default Footer