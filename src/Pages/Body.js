import NavBar from './NavBar';
import BackgroundHome from "../assets/home.jpg";
import Home from './Home';
<<<<<<< HEAD
=======
import About from './About';
>>>>>>> master
import { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
<<<<<<< HEAD
    Route, Redirect
=======
    Route,
    Redirect
>>>>>>> master
} from "react-router-dom";

import '../Css/Body.css';

export default function Body() {
<<<<<<< HEAD
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


=======

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
>>>>>>> master
