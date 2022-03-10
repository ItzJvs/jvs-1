import NavBar from './NavBar';
import BackgroundHome from "../assets/home.jpg";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { useState,useEffect } from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import '../Css/Body.css'; 
 

export default function Body() {
    const [X, setX] = useState(0);
    const [Y, setY] = useState(0);
    const [cursorClass, setcursorClass] = useState("");
    useEffect(()=>{
        document.addEventListener('mousemove', (e) => {
            setX(e.pageX - 12)
            setY(e.pageY - 12)
        })
        document.addEventListener('mousedown', (e) => {
            setcursorClass("Clicked")
            // setTimeout(() => {
            //     setcursorClass("")
            // }, 100);
        })
        document.addEventListener('mouseup', (e) => {
            setcursorClass("")
            // setTimeout(() => {
            //     setcursorClass("")
            // }, 100);
        })
    },[])
    

    const [backimg, setBackimg] = useState(BackgroundHome);
    return <Router>
        <Redirect to="/Home"></Redirect>
        <div className="Body">
            <div id="Cursor" className={cursorClass} style={{ left: (X + "px"), top: (Y + "px") }}></div>
            <div className="Body" style={{
                backgroundImage: `url(${backimg}) `,
                backgroundRepeat: "repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed"
            }}>
                <NavBar setBackimg={setBackimg} /> 
                <Switch>
                    <Route exact path="/Home"> <Home /> </Route>
                    <Route exact path="/About">  <About /></Route>
                    <Route exact path="/Contact"><Contact /> </Route>
                </Switch>
            </div>
        </div>
    </Router>
}


