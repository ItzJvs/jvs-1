import { NavLink } from 'react-router-dom';
import BackgroundHome from "../assets/home.jpg";
import BackgroundSkills from "../assets/image4.jpg";
import BackgroundContact from "../assets/image2.jpg";

import '../Css/NavBar.css';
export default function NavBar({ setBackimg }) {

    return <div className="NavBarPage">

        <NavLink onClick={() => { setBackimg(BackgroundHome) }} to="/Home"> Home </NavLink>
        <NavLink activeClassName="active" onClick={() => { setBackimg(BackgroundSkills) }} to="/About"> About </NavLink>
        <a target="_blank" rel="noreferrer" href="https://mrunkn.000webhostapp.com/Resume/Jagtap_Vivek_Somnath_Resume.pdf" download> Résumé </a>
        <NavLink activeClassName="active" onClick={() => { setBackimg(BackgroundContact) }} to="/Contact"> Contact </NavLink>
    </div>
}