import {Link} from "react-router-dom"
import NavbarStyle from "../css/Navbar.module.css"
import NavbarMenu from "./NavbarMenu"
const Navbar = ({icon,list,rawPath}) => {
    return <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
        <Link className="navbar-brand" to="/">
            <img src={icon} width="40" height="40" alt=""/>
            <span className={NavbarStyle.logoText}>Enim AI</span>
        </Link>
        <NavbarMenu MenuList={list} hr={rawPath}/>
        </div>
    </nav>
}

export default Navbar;