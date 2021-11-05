import '../Css/Contact.css';
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import whatsapp from "../assets/whatsapp.png";
import github from "../assets/github.png";
export default function Contact() {
    return <div className="Contact">
        <div className="IntroContact">
            <div className="Grid_Item">
                <pre>Mobile    : +917066649832                 </pre>
            </div><div></div>
            <div className="Grid_Item">
                <pre> Email  : jagtapvs9832@gmail.com</pre>
            </div>
            <div className="Grid_Item">
                <pre> Address   :   143 Kisan Nagar Behind Sutmil<br></br>   Akkalkot Road Solapur</pre>
            </div><div></div>
            <div className="Grid_Item">
                <pre> Alternet Mobile   :   +917841888910 </pre>
            </div>
            <div className="Grid_Item2"></div>
            <div className="Grid_Item_middle"> - : Social : - </div>
            <div className="Grid_Item2"> </div>
            <div className="Grid_Item">
                <pre>
                    <a href="https://www.linkedin.com/in/vivek-jagtap-21353b216/" target="blank" >
                        <img src={linkedin} alt="img" ></img>   Linkedin
                    </a></pre>
            </div> <div></div>
            <div className="Grid_Item">
                <pre>
                    <a href="https://github.com/GitUserVivek" target="blank" >
                        <img src={github} alt="img" ></img>   GitHub
                    </a></pre>
            </div>
            <div className="Grid_Item">
                <pre>
                    <a href="https://www.instagram.com/another._.coder._/" target="blank" >
                        <img src={instagram} alt="img" ></img>   Instagram
                    </a></pre>
            </div><div></div>
            <div className="Grid_Item">
                <pre>
                    <a href="https://api.whatsapp.com/send/?phone=917066649832&text=hello" target="blank" >
                        <img src={whatsapp} alt="img" ></img>   Whatsapp
                    </a></pre>
            </div>

        </div>
    </div>
}