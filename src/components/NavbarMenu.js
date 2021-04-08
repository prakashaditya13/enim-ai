import {Link} from "react-router-dom"
import "../css/Navbar.module.css"
const NavbarMenu = ({MenuList,hr}) => {
    return <>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
            <ul className="navbar-nav">
                {
                    MenuList.map((list,index) => {
                        return <li className="nav-item" key={index}>
                            <Link 
                            style={{
                                fontWeight:500,
                                letterSpacing: "1.2px"
                            }}
                            key={index} 
                            className="nav-link" 
                            to={hr[index]}>{list}</Link>
                        </li>
                    })
                }
            </ul>
        </div>
    </>
}

export default NavbarMenu;