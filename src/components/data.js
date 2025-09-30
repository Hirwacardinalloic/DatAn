import exploreTheWorld from '../assets/call_center1.png'
import youthEmpoweringImg from '..//assets/HR_Analysis.png'
import bookItNow from '../assets/hrrr.png'
import LeaderBoard from '../assets/sharon.png'
const projects=[
    {
        id:1,
        title:'Call Center Performance Analysis',
        imgSource: `${exploreTheWorld}`,
        description: 'Built an interactive Excel dashboard to analyze 200K U.S. call center records. It enables managers to track performance, customer behavior, and call outcomes with filters for agent, month, and time of day.',
        listOftech:['Excel'],
        liveDemo:"https://drive.google.com/file/d/12dyBIDlErLZvh_0veLM7NjW32cK18CcC/view?usp=sharing",
        // sourceCode:"https://github.com/clin2on3mun/explore-countries"
    },
    {
        id:2,
        title:'A Power BI Dashboard for HR Management',
        imgSource: `${youthEmpoweringImg}`,
        description: 'I built an interactive Power BI dashboard to analyze HR data across multiple countries. The dashboard tracks staffing trends, gender balance, salary distribution, contract timelines, and retention rates. It includes filters, KPIs, maps, and drill-downs, giving HR managers and executives both a high-level overview and detailed staff insights.',
        listOftech:['HTML5', 'CSS3', 'Javascript'],
        liveDemo:"https://clin2on3mun.github.io/YouthEmpowering/",
        // sourceCode:"https://github.com/clin2on3mun/YouthEmpowering"
    },
    {
        id:3,
        title:'BookItNow',
        imgSource: `${bookItNow}`,
        description: 'The BookItnow - is an Online Doctor Reservation web application designed to provide users with the ability to reserve, view, and manage doctors and doctor appointment reservation . The system aims to streamline the process of finding and booking doctors from various locations.',
        listOftech:['Ruby on Rails', 'React', 'Redux','Css','Tailwind'],
        liveDemo:"https://bookitnow-app.onrender.com/",
        // sourceCode:"https://github.com/cosywasswa/BookItNow-back-end"
    },
    {
        id:4,
        title:'LeaderBoard',
        imgSource: `${LeaderBoard}`,
        description: 'LeaderBoard is a project that uses API to store data in name and score format.',
        listOftech:['Webpack', 'Javascript', 'HTML5','Css', 'API'],
        liveDemo:"https://clin2on3mun.github.io/LeaderBoard/",
        // sourceCode:"https://github.com/clin2on3mun/LeaderBoard"
    },
]
export default projects