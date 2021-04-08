import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Partner from "./Routes/Partners"
import Service from "./Routes/Services"
import Error from "./Routes/Error"
import Navbar from "./components/Navbar"
function App() {
  const logo = {
    icon: "/download.jpg",
    homeImage: "/illustration.png"
  }
  const MenuList = ["Home","Service","Partners","Contact"]
  const Path = ["/","/service","/partner", "/contact"]
  return <Router>
    <Navbar icon={logo.icon} list={MenuList} rawPath={Path}/>
      <div className="container">
        <div className="row">
        <Switch>
          <Route exact path="/"><Home icon={logo.homeImage}/></Route>
          <Route path="/partner"><Partner/></Route>
          <Route path="/service"><Service/></Route>
          <Route path="/contact"><Contact/></Route>
          <Route path="*"><Error/></Route>
        </Switch>
        </div>
      </div>
  </Router>
}

export default App;
