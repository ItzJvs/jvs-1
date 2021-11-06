import NavBar from './NavBar';
import BackgroundHome from "../assets/home.jpg";
// import Home from './Home';
// import About from './About';
import A from './a';
import H from './h';
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
    const [backimg, setBackimg] = useState(BackgroundHome);
    return <Router>
        <div className="Body">
            <div className="Body" style={{
                backgroundImage: `url(${backimg}) `,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed"
            }}>
                <NavBar setBackimg={setBackimg} />
                <Switch>
                    <Route exact path="*/Home"> <H /> </Route>
                    <Route exact path="*/About">  <A /></Route>
                    <Route exact path="*/Resume"> <Resume /> </Route>
                    <Route exact path="*/Contact"><Contact /> </Route>
                </Switch>
            </div>
        </div>
    </Router>
}


