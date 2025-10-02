import exploreTheWorld from '../assets/call_center1.png'
import youthEmpoweringImg from '..//assets/HR_Analysis.png'
import bookItNow from '../assets/customer-Analysis.png'
import LeaderBoard from '../assets/Real-Estate-Analysis.png'
const projects=[
    {
        id:1,
        title:'Call Center Performance Analysis',
        imgSource: `${exploreTheWorld}`,
        description: 'Built an interactive Excel dashboard to analyze 200K U.S. call center records. It enables managers to track performance, customer behavior, and call outcomes with filters for agent, month, and time of day.',
        // listOftech:['Excel'],
        liveDemo:"https://drive.google.com/file/d/12dyBIDlErLZvh_0veLM7NjW32cK18CcC/view?usp=sharing",
       
    },
    {
        id:2,
        title:'HR Management Analysis',
        imgSource: `${youthEmpoweringImg}`,
        description: 'I built an interactive Power BI dashboard to analyze HR data across multiple countries. The dashboard tracks staffing trends, gender balance, salary distribution, contract timelines, and retention rates. It includes filters, KPIs, maps, and drill-downs, giving HR managers and executives both a high-level overview and detailed staff insights.',
        liveDemo:"https://drive.google.com/file/d/1npdNXgByPbUiFsNyoQfWUe2e08V4KzC3/view?usp=sharing",
       
    },
    {
        id:3,
        title:'Financial Loan Analysis',
        imgSource: `${bookItNow}`,
        description: 'I built an interactive dashboard monitoring a $306M loan portfolio across 31,678 clients. It tracks a critical 21.5% default rate concentrated in under-36 borrowers (89% of portfolio) and single-income households (50%). The dashboard enables risk managers to identify high-risk segments and prioritize interventions through KPI cards, demographic charts, and global mapping.',
        liveDemo:"https://bookitnow-app.onrender.com/"
    },
    {
        id:4,
        title:'Real Estate Analysis',
        imgSource: `${LeaderBoard}`,
        description: "I built an interactive dashboard analyzing 32,190 Canadian property listings across all provinces. It tracks pricing trends, affordability segments, and geographic distribution, revealing BC's premium market ($1.9M-$2.2M) versus Ontario's mid-range opportunities ($285K-$2M). The dashboard helps investors, buyers, and analysts compare markets through filters, maps, and detailed property views.",
        liveDemo:"https://drive.google.com/file/d/10BhDmy9X43CXcVC-Vg6__8YPf6Z98Wq2/view?usp=sharing",
    },
]
export default projects