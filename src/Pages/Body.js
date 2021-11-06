import NavBar from './NavBar';
import BackgroundHome from "../assets/home.jpg";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Resume from './Resume';
import { useState } from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    // Redirect
} from "react-router-dom";

import '../Css/Body.css';

export default function Body() {
    console.log("in the Home");
    const [backimg, setBackimg] = useState(BackgroundHome);
    return <div className="Body">
        <Router>
            {/* <Redirect to="/Home"></Redirect> */}
            <div className="Body" style={{
                backgroundImage: `url(${backimg}) `,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed"
            }}>
                <NavBar setBackimg={setBackimg} />
                <Switch>
                    <Route exact path="/Home"> <Home /> </Route>
                    <Route exact path="/About">  <About /></Route>
                    <Route exact path="/Resume"> <Resume /> </Route>
                    <Route exact path="/Contact"><Contact /> </Route>
                </Switch>
            </div>
        </Router>
    </div>
}


