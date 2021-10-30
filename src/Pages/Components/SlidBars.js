import "../../Css/Slide.css";
import Linkedin from "../../assets/linkedin.png";
import Insta from "../../assets/instagram.png";
import Facebook from "../../assets/facebook.png";
import Whatsapp from "../../assets/whatsapp.png";
import Email from "../../assets/email.png";
export default function SlideBars(props) {
    const Progress = (props) => {
        return <div className="com"> {props.subname ? props.subname : props.name}    :  <div style={{}} className={props.name}></div> </div>
    }
    const Social = ({ media, classname, link }) => {
        return <> <a href={link} target="blank" ><img className={classname} src={media} alt="img" ></img> </a> </>
    }
    <script>
        var k = document.getElementsByClassName("com");
        console.log(k);
    </script>
    return <><div className="Bars">
        <i>" Exploaring.. : " </i>
        <Progress name="Web" subname="Web Dev" />
        <Progress name="ReactJs" />
        <Progress name="Java   " />
        <Progress name="Flutter" />
        <div className="Social">
            <Social classname=" Linkedin " link="https://www.linkedin.com/in/vivek-jagtap-21353b216/" media={Linkedin} />
            <Social classname=" Email " link="mailto:jagtapvs9832@gmail.com" media={Email} />
            <Social classname=" Insta " link="https://www.instagram.com/another._.coder._/" media={Insta} />
            <Social classname=" Whatsapp " link="https://api.whatsapp.com/send/?phone=917066649832&text=hello" media={Whatsapp} />
            <Social classname=" Facebook " link="https://www.facebook.com/vivek.raje.127" media={Facebook} />
        </div>
    </div></>

}