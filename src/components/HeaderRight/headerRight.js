import { observer } from "mobx-react-lite";
import "./headerRight.css"
const HeaderRight = observer(({ text, picture }) => {

    return (
        <>
            <img src={picture} className="imgRight" />
            <h1 className="h1Right">
                {text}
            </h1>
            <div className="divHeadRight">
            </div>
        </>
    );
});

export default HeaderRight;