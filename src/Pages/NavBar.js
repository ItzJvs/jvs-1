import { NavLink } from 'react-router-dom';
import BackgroundHome from "../assets/home.jpg";
import BackgroundSkills from "../assets/image4.jpg";
import BackgroundContact from "../assets/Me.png";

import '../Css/NavBar.css';
export default function NavBar({ setBackimg }) {
    return <>
        <div className="NavBarPage">
<<<<<<< HEAD
            <NavLink activeClassName="active" onClick={() => { { setBackimg(BackgroundHome) } }} to="/Home"> Home </NavLink>
            <NavLink activeClassName="active" onClick={() => { { setBackimg(BackgroundSkills) } }} to="/About"> About </NavLink>
            <NavLink activeClassName="active" onClick={() => { { setBackimg(BackgroundContact) } }} to="/Contact"> Contact </NavLink>
            <NavLink activeClassName="active" onClick={() => { { setBackimg(BackgroundHome) } }} to="/Resume"> Résumé </NavLink>
=======
            <NavLink activeClassName="active" onClick={() => setBackimg(BackgroundHome)} to="/Home"> Home </NavLink>
            <NavLink activeClassName="active" onClick={() => setBackimg(BackgroundSkills)} to="/About"> About </NavLink>
            <NavLink activeClassName="active" onClick={() => setBackimg(BackgroundHome)} to="/Resume"> Résumé </NavLink>
            <NavLink activeClassName="active" onClick={() => setBackimg(BackgroundContact)} to="/Contact"> Contact </NavLink>
>>>>>>> master
        </div>
    </>
}