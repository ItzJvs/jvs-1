import NavBar from './NavBar';
import BackgroundHome from "../assets/home.jpg";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from "react-router-dom";

import '../Css/Body.css';

export default function Body() {
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
                    <Route exact path="/jvs"> <Home /> </Route>
                    <Route exact path="/About">  <About /></Route>
                    <Route exact path="/Resume"> </Route>
                    <Route exact path="/Contact"><Contact /> </Route>
                </Switch>
            </div>
        </Router>
    </div>
}


