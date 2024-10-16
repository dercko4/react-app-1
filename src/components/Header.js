import Navbar from "react-bootstrap/Navbar";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    
    return (
        <Navbar style={{height: "50px", background: "#78DBE2", fixed: "top"}}> 
        </Navbar>
    );
});

export default NavBar;