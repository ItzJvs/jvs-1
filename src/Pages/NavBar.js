import { NavLink } from 'react-router-dom';
import BackgroundHome from "../assets/home.jpg";
import BackgroundSkills from "../assets/image4.jpg";
import BackgroundContact from "../assets/image2.jpg";

import '../Css/NavBar.css';
export default function NavBar({ setBackimg }) {
    return <div className="NavBarPage">
        <NavLink activeClassName="active" onClick={() => { setBackimg(BackgroundHome) }} to="/Portfolio"> Home </NavLink>
        <NavLink activeClassName="active" onClick={() => { setBackimg(BackgroundSkills) }} to="/Portfolio/About"> About </NavLink>
        <NavLink activeClassName="active" onClick={() => { setBackimg(BackgroundHome) }} to="/Portfolio/Resume"> Résumé </NavLink>
        <NavLink activeClassName="active" onClick={() => { setBackimg(BackgroundContact) }} to="/Portfolio/Contact"> Contact </NavLink>
    </div>
}