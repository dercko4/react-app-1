import { observer } from "mobx-react-lite";
import "./headerRight.css"
const HeaderRight = observer(({ text, picture }) => {

    return (
        <>
            <h1 className="h1Right">
                <img src={picture} className="imgRight" /> {text}
            </h1>
            <div className="divHeadRight">
            </div>
        </>
    );
});

export default HeaderRight;