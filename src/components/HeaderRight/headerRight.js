import { observer } from "mobx-react-lite";
import "./headerRight.css"
const HeaderRight = observer(({text, picture}) => {

    return (
        <>
            <h1>
                {text}<img src={picture} className="imageRight"/>
            </h1>
            <div className="divHeadRight">
            </div>
        </>
    );
});

export default HeaderRight;