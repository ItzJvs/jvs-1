import NavBar from './NavBar';
import BackgroundHome from "../assets/home.jpg";
import Home from './Home';
import About from './About';
import { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import '../Css/Body.css';

export default function Body() {

    const [backimg, setBackimg] = useState(BackgroundHome);

    return <div className="HomePage" >
        <Router>
            <Redirect to="/Home"></Redirect>
            <NavBar setBackimg={setBackimg} ></NavBar>
            <Switch>
                <Route exact to="/Home"><Home /> </Route>
                <Route to="/About"> <About /></Route>
                <Route to="/Resume"></Route>
                <Route to="/Contact"> </Route>
            </Switch>
        </Router>
    </div>
}