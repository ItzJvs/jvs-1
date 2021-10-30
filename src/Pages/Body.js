import '../Css/Body.css';
// import MyPhoto from '../assets/Me.png';
// import Gif from '../assets/Gif2.gif';
import SlideBars from './Components/SlidBars';
export default function Body() {
    var software = "Software";
    var webdeveloper = "<Web Developer />";
    return <>
        <div className="BodyPage">
            {/* <img src={MyPhoto} ></img> */}
            <pre id="HomeContent">
                Hey there,<br></br>
                I'm Jagtap Vivek..<br></br>
                <div className="desc">
                    : Looking For The Job Opportunity <br></br>as<br></br> {software} , {webdeveloper}
                </div>
                <div className="exp">
                    <SlideBars />
                </div>
            </pre>

        </div>
    </>
}