import { observer } from "mobx-react-lite";
import "./headerAAA.css"
const HeaderAAA = observer(({ text, picture }) => {

    return (
        <>
            <h1 className="h1Right">
            <img src={picture} className="imgAAA" /> {text} 
            </h1>
            <div className="divHeadRight">
            </div>
        </>
    );
});

export default HeaderAAA;