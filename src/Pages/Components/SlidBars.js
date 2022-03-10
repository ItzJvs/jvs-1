import "../../Css/Slide.css";
import Linkedin from "../../assets/linkedin.png";
import Insta from "../../assets/instagram.png";
import Facebook from "../../assets/facebook.png";
import Whatsapp from "../../assets/whatsapp.png";
import github from "../../assets/github.png";
import Email from "../../assets/email.png";
import { useState, useEffect } from "react"; 

export default function SlideBars() {

    // const [WebProg, setWebProg] = useState("10px");
    const [AndroidProg, setAndroidProg] = useState("10px");
    const [ReactJsProg, setReactJsProg] = useState("10px");
    const [JavaProg, setJavaProg] = useState("10px");
    const [FlutterProg, setFlutterProg] = useState("10px");
    const [GitProg, setGitProg] = useState("10px");

    useEffect(() => {
        var i = 10;
        var web = setInterval(() => { 
            // if (i <= 200) setWebProg(i + "px");
            if (i <= 150) setReactJsProg(i + "px")
            if (i <= 120) setJavaProg(i + "px")
            if (i <= 100) setAndroidProg(i + "px");
            if (i <= 130) setFlutterProg(i + "px")
            if (i <= 100) setGitProg(i + "px")
            if (i === 200) clearInterval(web)
            i = i + 2;
        }, 15);
        return () => { clearInterval(web) }
    }, []);
    const Progress = (props) => {
        return <div className="com"> {props.subname ? props.subname : props.name}    :  <div style={{ width: props.Progress }} className={props.name}></div> </div>
    }
    // const Social = ({ media, classname, link }) => {
    //     return <div> <a href={link}><img className={classname} src={media} alt="img"  /> </a> </div>
    // }  

    return <pre className="Bars"> 
        <i>" Exploaring.. : " </i>
        {/* <Progress Progress={WebProg} name="Web" subname="Web Dev" /> */}
        <Progress Progress={ReactJsProg} name="ReactJs" />
        <Progress Progress={JavaProg} name="Java   " />
        <Progress Progress={AndroidProg} name="Android" subname="Android" />  
        <Progress Progress={FlutterProg} name="Flutter" />
        <Progress Progress={GitProg} name="Git    " />
        {/* Social Media Links.. */}
        <div className="Social"> 
        {/*  bug found .. anchor tag not working in component.. */}
            {/* <Social classname="SocialSite" link="https://www.linkedin.com/in/vivek-jagtap-21353b216/" media={Linkedin} />
            <Social classname="SocialSite" link="mailto:jagtapvs9832@gmail.com" media={Email} />
            <Social classname="SocialSite" link="https://github.com/GitUserVivek" media={github} />
            <Social classname="SocialSite" link="https://www.instagram.com/another._.coder._/" media={Insta} />
            <Social classname="SocialSite" link="https://api.whatsapp.com/send/?phone=917066649832&text=hello" media={Whatsapp} />
            <Social classname="SocialSite" link="https://www.facebook.com/vivek.raje.127" media={Facebook} />  
            */}
             <a rel="noreferrer" href="https://www.linkedin.com/in/vivek-jagtap-21353b216/" target="_blank" ><img className="SocialSite" src={Linkedin} alt="img"  /> </a> 
             <a rel="noreferrer" href="mailto:jagtapvs9832@gmail.com" target="_blank" ><img className="SocialSite" src={Email} alt="img"  /> </a> 
             <a rel="noreferrer" href="https://github.com/GitUserVivek" target="_blank" ><img className="SocialSite" src={github} alt="img"  /> </a> 
             <a rel="noreferrer" href="https://www.instagram.com/another._.coder._/" target="_blank" ><img className="SocialSite" src={Insta} alt="img"  /> </a> 
             <a rel="noreferrer" href="https://api.whatsapp.com/send/?phone=917066649832&text=hello" target="_blank" ><img className="SocialSite" src={Whatsapp} alt="img"  /> </a> 
             <a rel="noreferrer" href="https://www.facebook.com/vivek.raje.127" target="_blank" ><img className="SocialSite" src={Facebook} alt="img"  /> </a> 
        </div>
    </pre>

}