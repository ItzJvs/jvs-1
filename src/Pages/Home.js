import '../Css/Home.css';
import SlideBars from './Components/SlidBars';
export default function Home() {
    var software = "Software";
    var webdeveloper = "<Web Developer />";

    return <div className="HomePage">
        <pre id="HomeContent">
            <p>Hey there,<br></br>
                I'm Jagtap Vivek..<br></br></p>
            <div className="desc">
                Looking For The Job Opportunity <br></br>as<br></br> {software} , {webdeveloper}
            </div>
            <SlideBars />
        </pre>
    </div>
}