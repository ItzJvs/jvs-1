const tab = "   ";
export default function Attribute(props) {
    return <div className="Attribute">
        <span>{props.title}</span>
        <span>{props.description}</span>
    </div>
}

const Education = <div className="Education"><pre>
    <span className="Heading">UG</span> : SY{tab} : 90.6%<br></br>
    {tab}College :Sangameshwar College,<br></br>{tab}Solapur<br></br>
    {tab}FY{tab} : 86% <br></br>
    <span className="Heading">HSC </span>: 62 %<br></br>{tab}College :S.V.C.S. JR College,<br></br>{tab}Solapur<br></br>
    <span className="Heading">SSC</span> : 75.40 %<br></br>{tab}College :S.V.C.S. HighSchool,<br></br>{tab}Solapur<br></br>
</pre></div>

const Skills = <div className="Skills"><pre>
    Html,css,Js <br></br>
    ReactJs <br></br>
    Java <br></br>
    Flutter <br></br>
    Git <br></br>

</pre></div>
const Projects = <pre className="Projects">
    <a target="_blank" rel="noreferrer" href="https://vhseducationprltd.000webhostapp.com/ChouguleEvents/"> Chougule Evens</a> <br></br>
    <a target="_blank" rel="noreferrer" href="https://mrunkn.000webhostapp.com/Projects/ToDo/"> ToDo With LocalStorage</a><br></br>
    <a target="_blank" rel="noreferrer" href="https://mrunkn.000webhostapp.com/Projects/DirtBike/"> DirtBike</a><br></br>
    <a target="_blank" rel="noreferrer" href="https://mrunkn.000webhostapp.com/Projects/CAR/"> Car Game</a><br></br>
    <a target="_blank" rel="noreferrer" href="https://mrunkn.000webhostapp.com/Projects/CALCULATOR/"> Calculator</a><br></br>
</pre>

export { tab, Education, Skills, Projects };