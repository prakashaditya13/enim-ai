import HomeStyle from "../css/Home.module.css"
import {Link} from "react-router-dom"
const Home = ({icon}) => {
    return <div className={HomeStyle.MainSection}>
       <div className={HomeStyle.sectionFirst}>
            <div className={HomeStyle.headingText}>
                    <h1>Full-cycle software<br/> development company</h1>
            </div>
            <div className={HomeStyle.subheadingText}>
                    <p className={HomeStyle.subText}>Enim Live will provide a platform for an experimental learning environment that will benefit both the faculty and the students. We have also added additional useful features to make both the teaching and the learning experience better than ever.</p>
            </div>
            <div>
                <Link to="#" style={{textDecoration: "underline", fontWeight:400}}>Explore more</Link>
            </div>
       </div>
       <div className={HomeStyle.bgImage}>
            <img src={icon} alt="bg" width="600px" height="450px"/>
       </div>
    </div>
}

export default Home;