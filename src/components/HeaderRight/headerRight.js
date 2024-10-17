import Navbar from "react-bootstrap/Navbar";
import { observer } from "mobx-react-lite";
import "./headerRight.css"
const HeaderRight = observer(({text, picture}) => {

    return (
        <>
            <h1>
                <img src={picture}/>{text}
            </h1>
            <div className="divHead">
            </div>
        </>
    );
});

export default HeaderRight;