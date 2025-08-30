import { LiaCloudDownloadAltSolid } from "react-icons/lia"
import { motion } from "framer-motion"
import Button from "../Button"
import List from "../List"
import { 
  SiPython, 
  SiMysql, 
  SiPandas, 
  SiNumpy, 
  SiPostgresql 
} from "react-icons/si";
import { FaFileExcel, FaChartBar } from "react-icons/fa"; 
import './about.css'

const About = ()=> {
  return( 
    <section id="about">
      <motion.div className="about-content"
        initial={{opacity: 0, y:-100}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1}}
      >
        <h2 className="about-text">About</h2>
        <div className="about-me">
          <p style={{lineHeight:"1.8"}}>
            Hello! I&apos;m Hirwa Cardinal Loic, I am a dedicated Data Analyst specializing in turning raw data into meaningful insights that drive strategic decisions. With strong skills in Excel, SQL, Power BI, and Python, I excel at data extraction, analysis, visualization, and reporting. My expertise includes cleaning and organizing large datasets, creating interactive dashboards, and automating data processes to improve efficiency.
          </p>
          <p style={{lineHeight:"1.8", paddingTop:"10px"}}>
            My journey as a data analyst has equipped me with strong problem-solving skills, attention to detail, and a passion for uncovering insights from complex datasets. I am constantly learning and adapting to new tools and techniques to stay at the forefront of data technology, ensuring that my analysis are both accurate and impactful.
          </p>
          <p style={{lineHeight:"1.8", paddingTop:"10px"}}>
            If you like what you see and have a data project or analysis challenge, feel free to reach out! Let’s connect via my socials or email me at "
          <a href="mailto:loichirwa36@gmail.com" style={{ color: "royalblue", fontWeight: 700, cursor: "pointer" }}
        >
            loichirwa36@gmail.com"
            </a>

          </p>
        </div>

        <Button 
          link="https://drive.google.com/file/d/1uqVfdo4058vDV5ewyTawvNW_jXDeqRvO/view?usp=sharing"  
          classes="resume"
        >
          <div className="resume-content">
            <LiaCloudDownloadAltSolid className="icon-download"/>
            <span className="resume-button-name">Resume</span>
          </div>
        </Button>   
         <Button 
          link="https://drive.google.com/drive/folders/1NyCBxFF4PI-e9rDQ2IHGFAB5hSBqdwjp?usp=sharing"  
          classes="resume"
        >
          <div className="resume-content">
            <LiaCloudDownloadAltSolid className="icon-download"/>
            <span className="resume-button-name">Certificates</span>
          </div>
        </Button> 
      </motion.div>

      {/* Skills Section */}
      <motion.section id="skills"
        initial={{opacity: 0, y:100}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1}}
      >
        <section>
          <p className="skill-header">Tools</p>
          <ul className="skills">
            <List className="list-skill" style = {{background:'#00A9FF', color:'#fff'}}>
              <span className="size"><FaFileExcel /></span>
              <p className="skill-name">Excel</p>
            </List>
            <List className="list-skill" style={{background:'#FF6C22', color:'#fff'}}>
              <span className="size"><FaChartBar /></span>
              <p className="skill-name">Power BI</p>
            </List>
            <List className="list-skill" style={{background:'#000', color:'#fff'}}>
              <span className="size"><SiMysql /></span>
              <p className="skill-name">MySQL</p>
            </List>
            <List className="list-skill" style={{background:'#13005A', color:'#fff'}}>
              <span className="size"><SiPostgresql /></span>
              <p className="skill-name">SQL Server</p>
            </List>
          </ul>
        </section>
        <section>
          <p className="skill-header">Language</p>
          <ul className="skills">
            <List className="list-skill" style={{background:'#FF5B22', color:'white'}}> 
              <span className="size"><SiPython /></span>   
              <p className="skill-name">Python</p>
            </List>
            <List className="list-skill" style={{background:'#39A7FF', color:'#fff'}}>
              <span className="size"><SiMysql /></span>
              <p className="skill-name">SQL</p>
            </List>
          </ul>
        </section> 

        <section>
          <p className="skill-header">Libraries</p>
          <ul className="skills">
            <List className="list-skill" style={{background:'#89CFF3', color:'#fff'}}>
              <span className="size"><SiPandas /></span>
              <p className="skill-name">Pandas</p>
            </List>
            <List className="list-skill" style={{background:'#B31312', color:'#fff'}}>
              <span className="size"><SiNumpy /></span>
              <p className="skill-name">NumPy</p>
            </List>
          </ul>
        </section>
      </motion.section>
    </section>
  )
}
export default About
