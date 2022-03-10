const tab = "   ";
export default function Attribute(props) {
    return <div className="Attribute">
        <span>{props.title}</span>
        <span>{props.description}</span>
    </div>
}

const Education = <div className="Education"><pre>
    <span className="Heading">UG</span> : SY{tab} : 90.6%<br />
    {tab}College :Sangameshwar College,<br />{tab}Solapur<br />
    {tab}FY{tab} : 86% <br />
    <span className="Heading">HSC </span>: 62 %<br />{tab}College :S.V.C.S. JR College,<br />{tab}Solapur<br />
    <span className="Heading">SSC</span> : 75.40 %<br />{tab}College :S.V.C.S. HighSchool,<br />{tab}Solapur<br />
</pre></div>

const Skills = <div className="Skills"> 
    <span>Html,css,Js </span>
    <span>ReactJs </span>
    <span>Java </span>
    <span>Android </span>
    <span>Flutter </span>
    <span>Git </span>   
 </div>
const Projects = <pre className="Projects">
    <a  rel="noreferrer"  target="_blank"    href="https://vhseducationprltd.000webhostapp.com/ChouguleEvents/"> Chougule Evens</a> 
    <a  rel="noreferrer"  target="_blank"   href="https://mrunkn.000webhostapp.com/Projects/ToDo/"> ToDo With LocalStorage</a>
    <a  rel="noreferrer"  target="_blank"   href="https://mrunkn.000webhostapp.com/Projects/DirtBike/"> DirtBike</a>
    <a  rel="noreferrer"  target="_blank"   href="https://mrunkn.000webhostapp.com/Projects/CAR/"> Car Game</a>
    <a  rel="noreferrer"  target="_blank"   href="https://mrunkn.000webhostapp.com/Projects/CALCULATOR/"> Calculator</a>
</pre>

export { tab, Education, Skills, Projects };