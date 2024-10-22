import { observer } from "mobx-react-lite";
import "./headerLeft.css"
const HeaderLeft = observer(({text, picture}) => {

    return (
        <>
            <h1 className="h1Left">
                <img src={picture} className="imgLeft"/>{text}
            </h1>
            <div className="divHeadLeft">
            </div>
        </>
    );
});

export default HeaderLeft;