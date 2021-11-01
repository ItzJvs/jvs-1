import NavBar from './NavBar';
import BackgroundHome from "../assets/home.jpg";
import Home from './Home';
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
            <Redirect to="/Home"></Redirect>
            <div className="Body" style={{
                backgroundImage: `url(${backimg}) `,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed"
            }}>
                <NavBar setBackimg={setBackimg} />
                <Switch>
                    <Route exact path="/Home"> <Home /> </Route>
                    <Route exact path="/About">  </Route>
                    <Route exact path="/Contact"> </Route>
                    <Route exact path="/Resume"> </Route>
                </Switch>
            </div>
        </Router>
    </div>
}


