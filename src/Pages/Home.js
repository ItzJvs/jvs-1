import NavBar from './NavBar';
import Body from './Body';

import '../Css/Home.css';

export default function Home() {
    return <>
        <div className="HomePage">
            <NavBar />
            <Body />
        </div>
    </>
}