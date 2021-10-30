import NavBar from './NavBar';
import Body from './Body';
import { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import '../Css/Home.css';

export default function Home() {
    // var backimg = BackgroundHome;
    const [backimg, setBackimg] = useState("black");
    return <>
        <Router>

            <div className="HomePage" style={{
                backgroundImage: `url(${backimg}) `,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}>
                <NavBar setBackimg={setBackimg} />
                <Switch>
                    <Route exact path="/Home"> <Body /> </Route>
                    <Route exact path="/Skills">  </Route>
                    <Route exact path="/Contact"> </Route>
                    <Route exact path="/Resume"> </Route>
                </Switch>
            </div>
        </Router>
    </>
}